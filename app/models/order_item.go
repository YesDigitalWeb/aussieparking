package models

import (
	"fmt"
	"time"

	"github.com/jinzhu/now"
	"github.com/qor/transition"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
)

const OrderItemDayFormat = "2006-01-02"

const (
	OrderItemStatePaid      = "paid"
	OrderItemStatePayOnSite = "pay_on_site"
	OrderItemStateConfirmed = "confirmed"
	OrderItemStateCancelled = "cancelled"
)

type OrderItem struct {
	Base
	transition.Transition

	Order     *Order `sql:"-"`
	OrderId   uint64
	ProductId uint64

	Price    float64 `sql:"type:decimal(19,4) DEFAULT 0"`
	Discount float64 `sql:"type:decimal(19,4) DEFAULT 0"`

	Day  string // Date Format: 2014-09-08
	Type string // Product Type: clean, parking

	// already included in Price, read only (for GenPriceBreakdown)
	SpecialPrice float64 `sql:"type:decimal(19,4) DEFAULT 0"`
}

func (item *OrderItem) Amount() float64 {
	if item.GetState() == "cancelled" {
		return 0
	} else {
		return item.Price
	}
}

func (oi *OrderItem) IsBooked() bool {
	state := oi.GetState()
	return state == OrderItemStateConfirmed || state == OrderItemStatePaid
}

type MonthBooking struct {
	Count int
	Month string
}

func GetMonthlyBookings() (thisYears, lastYears [12]int, err error) {
	var mbs []MonthBooking
	thisYear := fmt.Sprint(time.Now().Year())
	lastYear := fmt.Sprint(time.Now().Year() - 1)
	err = db.DB.Model(&OrderItem{}).Select("count(id) as count, SUBSTR(day, 1, 7) as month").Where(
		"day >= ? and day <= ? and state in (?)",
		lastYear+"-01-01",
		thisYear+"-12-31",
		[]string{OrderItemStateConfirmed, OrderItemStatePaid},
	).Group("SUBSTR(day, 1, 7)").Order("month").Scan(&mbs).Error
	if err != nil {
		return
	}

	for _, mb := range mbs {
		if year := mb.Month[0:4]; year == thisYear {
			thisYears[(mb.Month[5]-'0')*10+mb.Month[6]-'1'] = mb.Count
		} else if year == lastYear {
			lastYears[(mb.Month[5]-'0')*10+mb.Month[6]-'1'] = mb.Count
		}
	}

	return
}

func HasEnoughSlots(from, to time.Time, productId uint64) (enough bool, err error) {
	var orders []struct {
		Day   string
		Count int
	}
	err = db.DB.Model(&OrderItem{}).Select("day, count(day) as count").Where(
		"product_id = ? AND day >= ? AND day <= ? AND state in (?)",
		productId,
		from.Format("2006-01-02"),
		to.Format("2006-01-02"),
		[]string{OrderItemStateConfirmed, OrderItemStatePayOnSite, OrderItemStatePaid},
	).Order("day").Group("day").Scan(&orders).Error
	if err != nil {
		return
	}

	var total int
	switch productId {
	case ProductIndoor.Id:
		total = IndoorSlotAvailablity
	case ProductOutdoor.Id:
		total = OutdoorSlotAvailablity
	case ProductUnderCover.Id:
		total = UnderCoverSlotAvailablity
	}

	enough = true
	for _, order := range orders {
		if total <= order.Count {
			enough = false
			break
		}
	}

	return
}

func (oi OrderItem) GetDay() time.Time {
	t, err := time.Parse(OrderItemDayFormat, oi.Day)
	if err != nil {
		config.ReportError(err)
	}
	return now.New(t).BeginningOfDay()
}

func (oi *OrderItem) DaysFromOrderBeginning() int {
	return int(oi.GetDay().Sub(now.New(oi.Order.From).BeginningOfDay()).Hours()/24) + 1
}
