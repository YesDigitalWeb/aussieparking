package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/qor/publish"
	"github.com/theplant/aussie/db"
)

type Range struct {
	Base
	publish.Status
	Start            time.Time `schema:"-" sql:"type:date"`
	End              time.Time `schema:"-" sql:"type:date"`
	Weekdays         Weekdays  `sql:"type:varchar(255)"`
	SpecialTimeSince string
	RangeProducts    []RangeProduct
}

// func (r *Range) BeforeSave(db *gorm.DB) {
// 	r.Start = now.New(r.Start).BeginningOfDay()
// 	r.End = now.New(r.End).EndOfDay()
// }

type RangeProduct struct {
	Base
	publish.Status
	RangeId      uint64
	Product      Product
	ProductId    uint64
	Price        float64 `sql:"type:decimal(19,4) DEFAULT 0"`
	SpecialPrice float64 `sql:"type:decimal(19,4) DEFAULT 0"`
}

// Sun(0), Mon(1), Tues(2), Wed(3), Thur(4), Fri(5), Sat(6)
type Weekdays []int

func (w Weekdays) Has(day int) bool {
	for _, weekday := range w {
		if weekday == day {
			return true
		}
	}
	return false
}

func (w *Weekdays) Scan(val interface{}) (err error) {
	err = json.Unmarshal(val.([]byte), &w)
	return
}

func (w Weekdays) Value() (val driver.Value, err error) {
	val, err = json.Marshal(w)
	return
}

func GetRangeByDate(date time.Time) (r *Range, err error) {
	r = new(Range)
	if err = getRangeScope(date, date).Last(r).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			err = nil
		}

		r = nil
		return
	}

	err = db.DB.Model(r).Related(&r.RangeProducts).Error

	return
}

func getRangeScope(from, to time.Time) *gorm.DB {
	froms, tos := from.Format("2006-01-02"), to.Format("2006-01-02")
	return db.DB.Where("(start >= ? and start <= ?)", froms, tos).Or("(end >= ? and end <= ?)", froms, tos).Or("(start <= ? and end >= ?)", froms, tos).Order("id desc")
}

func FindRanges(from, to time.Time) (ranges []Range, err error) {
	scope := getRangeScope(from, to)
	if err = scope.Preload("RangeProducts").Find(&ranges).Error; err != nil {
		return
	}

	return
}

type Ranges []Range

// GetRangeByDate is for exporting function getRangeByDate for controller
// usage and avoid conflicts with function GetRangeByDate
func (r Ranges) GetRangeByDate(date time.Time) Range { return getRangeByDate(r, date) }

func getRangeByDate(ranges []Range, date time.Time) Range {
	if len(ranges) == 0 {
		return Range{}
	}

	day := date.Format("2006-01-02")
	for _, r := range ranges {
		// Using string comparison here to avoid time discrepancy
		if r.Start.Format("2006-01-02") <= day && day <= r.End.Format("2006-01-02") {
			if r.Weekdays.Has(int(date.Weekday())) {
				return r
			}
		}
	}

	return Range{}
}

func (r *Range) Validate() (err error) {
	now := time.Now().Format("2006-01-02")
	// if r.Start.Before(now) && r.Start.Format("2006-01-02") != now.Format("2006-01-02") {
	if r.Start.Format("2006-01-02") < now {
		err = errors.New("start date should be greater than now")
		return
	}
	// if r.End.Before(now) && r.End.Format("2006-01-02") != now.Format("2006-01-02") {
	if r.End.Format("2006-01-02") < now {
		err = errors.New("end date should be greater than now")
		return
	}
	// if r.End.Before(r.Start) && r.Start.Format("2006-01-02") != r.End.Format("2006-01-02") {
	if r.Start.Format("2006-01-02") > r.End.Format("2006-01-02") {
		err = errors.New("end date should be greater than start date")
		return
	}

	return
}

func GetCleanRangeProductsByDate(date time.Time) (data map[string]RangeProduct, err error) {
	r, err := GetRangeByDate(date)
	if err != nil {
		return
	}

	data = map[string]RangeProduct{}

	if r != nil {
		for _, p := range AllCleanProducts {
			for _, rp := range r.RangeProducts {
				if rp.ProductId == p.Id {
					rp.Product = *p
					data[p.CarType+"-"+p.Name] = rp
					break
				}
			}
		}
	}

	return
}

func (r *Range) GetRangeProductById(id uint64) RangeProduct {
	for _, rp := range r.RangeProducts {
		if rp.Id == id {
			return rp
		}
	}

	return RangeProduct{}
}
