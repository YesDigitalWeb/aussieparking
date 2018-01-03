// +build ignore

package main

import (
	"fmt"
	"html"
	"log"
	"strconv"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/qor/transition"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
)

type Booking struct {
	ID              uint      `gorm:"column:id"`                 // | int(11)      | NO   | PRI | NULL
	ClientFirstName string    `gorm:"column:_client_first_name"` // | varchar(512) | NO   |     | NULL
	ClientLastName  string    `gorm:"column:_client_last_name"`  // | varchar(512) | NO   |     | NULL
	ClientEmail     string    `gorm:"column:_client_email"`      // | varchar(512) | NO   | MUL | NULL
	Date            time.Time `gorm:"column:date"`               // | timestamp    | NO   |     | CURRENT_TIMESTAMP
	Amount          int       `gorm:"column:amount"`             // | int(11)      | YES  |     | NULL
	Paypal          bool      `gorm:"column:paypal"`             // | tinyint(1)   | YES  |     | NULL
	Status          int       `gorm:"column:status"`             // | int(11)      | YES  |     | 1
	Agency          int       `gorm:"column:agency"`             // | int(11)      | YES  |     | NULL
	DepartureDate   int       `gorm:"column:departure_date"`     // | int(32)      | NO   |     | NULL
	DepartureTime   string    `gorm:"column:departure_time"`     // | varchar(32)  | YES  |     | NULL
	ReturnDate      int       `gorm:"column:return_date"`        // | int(32)      | NO   |     | NULL
	ReturnTime      string    `gorm:"column:return_time"`        // | varchar(32)  | YES  |     | NULL
	InOut           string    `gorm:"column:in_out"`             // | varchar(11)  | YES  |     | NULL
	NumPassengers   string    `gorm:"column:num_passengers"`     // | varchar(32)  | YES  |     | NULL
	Rego            string    `gorm:"column:rego"`               // | varchar(32)  | YES  | MUL | NULL
	Make            string    `gorm:"column:make"`               // | varchar(256) | YES  |     | NULL
	Model           string    `gorm:"column:model"`              // | varchar(256) | YES  |     | NULL
	FlightReference string    `gorm:"column:flight_reference"`   // | varchar(32)  | YES  |     | NULL
	UserAgent       string    `gorm:"column:user_agent"`         // | varchar(512) | YES  |     | NULL
	// DepartureDate2  time.Time `gorm:"departure_date_2"`   // | timestamp    | NO   |     | CURRENT_TIMESTAMP
	// ReturnDate2     time.Time `gorm:"return_date_2"`      // | timestamp    | NO   |     | CURRENT_TIMESTAMP
}

type Order struct {
	models.Base
	transition.Transition

	Profile   Profile
	ProfileId uint64
	User      User
	UserId    uint64

	From time.Time
	To   time.Time

	PaypalRef      string
	PaypalResponse string
	PaymentType    string // Paypal, On Site

	ReturnFlight string
	PeopleNum    uint
	CarRego      string
	CarMake      string
	CarModel     string

	Amount             float64 `sql:"type:decimal(19,4) DEFAULT 0"`
	DiscountValue      float64 `sql:"type:decimal(19,4) DEFAULT 0"` // Paypal discount
	ParkingProductName string
	CleanProductId     uint64

	Note                 string
	SubscribeToMailChimp bool

	// Notes      []Note
	OrderItems []OrderItem

	DiscountId uint // Promotion discount

	Cleaning          string    // Clean state
	CleanedAt         time.Time `sql:"type:date"`
	CleaningOrderedAt time.Time `sql:"type:date"` // Clean service order date
}

type User struct {
	models.Base
	Email string
}

type Profile struct {
	models.Base
	FirstName string
	LastName  string
	Phone     string
}

type OrderItem struct {
	models.Base
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

func main() {
	oldDB, err := gorm.Open("mysql", fmt.Sprintf(
		"%s:%s@%s/%s?charset=utf8&parseTime=True&loc=Local",
		config.Cfg.DB.User,
		config.Cfg.DB.Password,
		config.Cfg.DB.Host,
		"aap",
	))
	if err != nil {
		panic(fmt.Sprintf("Can't initalize database: %v", err.Error()))
	}
	var bookings []Booking
	now := time.Now().Add(-time.Hour * 24)
	tim := time.Date(now.Year(), now.Month(), now.Day(), 0, 0, 0, 0, time.Local).Unix()
	if err := oldDB.Table("_bookings").Where("departure_date >= ? or return_date >= ?", tim, tim).Find(&bookings).Error; err != nil {
		panic(err)
	}

	var total, skipped, added int
	for _, booking := range bookings {
		log.Println("============================")
		log.Println("processing", booking.ID)
		total++
		if booking.Status == 0 {
			skipped++
			log.Println("Skipped")
			continue
		}
		added++
		order := Order{
			User: User{Email: booking.ClientEmail},
			Profile: Profile{
				FirstName: html.UnescapeString(booking.ClientFirstName),
				LastName:  html.UnescapeString(booking.ClientLastName),
			},
			ReturnFlight: booking.FlightReference,
			CarRego:      booking.Rego,
			CarMake:      booking.Make,
			CarModel:     booking.Model,

			Amount:             float64(booking.Amount),
			PeopleNum:          booking.getPeopleNum(),
			Transition:         booking.getTransition(),
			ParkingProductName: booking.getParkingProductName(),
			PaymentType:        booking.getPaymentType(),
			From:               booking.getFrom(),
			To:                 booking.getTo(),
			Note:               fmt.Sprintf("Old DB ID: %d", booking.ID),
		}
		order.genOrderItems()
		fmt.Println(booking)
		fmt.Println(order)
		if booking.ID == 9850 {
			for _, item := range order.OrderItems {
				log.Println(item.Day, item.ProductId, item.Type, item.Price)
			}
		}

		if err := db.DB.Create(&order).Error; err != nil {
			panic(err)
		}
	}
	log.Println("Total:", total, "Skipped:", skipped, "Added:", added)
}

func (b *Booking) getParkingProductName() string {
	switch b.InOut {
	case "outdoor":
		return models.Outdoor
	case "indoor":
		return models.Indoor
	case "motorbike":
		return models.UnderCover
	}
	panic("unknown inout: " + b.InOut)
	return ""
}

func (b *Booking) getPaymentType() string {
	if b.Paypal {
		return models.PaymentTypePaypal
	}
	return models.PaymentTypeOnSite
}

func (b *Booking) getTransition() transition.Transition {
	if b.Paypal {
		return transition.Transition{State: models.OrderStatePaypalPaid}
	}
	return transition.Transition{State: models.OrderStatePayOnSite}
}

func (b *Booking) getFrom() time.Time {
	date := time.Unix(int64(b.DepartureDate), 0)
	if date.Hour() == 23 {
		date = date.Add(time.Hour * 2)
	}
	tim, err := time.ParseInLocation("2006-01-02 3:04pm", date.Format("2006-01-02 ")+b.DepartureTime, time.Local)
	if err != nil {
		panic(err)
	}
	return tim
}

func (b *Booking) getTo() time.Time {
	date := time.Unix(int64(b.ReturnDate), 0)
	if date.Hour() == 23 {
		date = date.Add(time.Hour * 2)
	}
	tim, err := time.ParseInLocation("2006-01-02 3:04pm", date.Format("2006-01-02 ")+b.ReturnTime, time.Local)
	if err != nil {
		panic(err)
	}
	return tim
}

func (b Booking) String() string {
	return fmt.Sprintf("%s\t%t\t%d\t%s\t%s\t%s\t%s", b.InOut, b.Paypal, b.Amount, unix(b.DepartureDate), b.DepartureTime, unix(b.ReturnDate), b.ReturnTime)
}

func unix(i int) string {
	return time.Unix(int64(i), 0).Format("2006-01-02")
}

func (o Order) String() string {
	return fmt.Sprintf("%s\t%s\t%s\t%f\t%s\t%s\t%d", o.State, o.ParkingProductName, o.PaymentType, o.Amount, o.From.Format("2006-01-02 3:04pm"), o.To.Format("2006-01-02 3:04pm"), len(o.OrderItems))
}

func (o *Order) genOrderItems() []OrderItem {
	var ois []OrderItem
	days := int(time.Date(o.To.Year(), o.To.Month(), o.To.Day(), 0, 0, 0, 0, time.UTC).Sub(time.Date(o.From.Year(), o.From.Month(), o.From.Day(), 0, 0, 0, 0, time.UTC)).Hours()/24) + 1
	price := o.Amount / float64(days)
	state := "paid"
	if o.State == models.OrderStatePaypalPaid {
		state = "confirmed"
	}
	for i := 0; i < days; i++ {
		ois = append(ois, OrderItem{
			ProductId:  models.GetParkingProductByName(o.ParkingProductName).Id,
			Type:       models.Parking,
			Day:        o.From.Add(time.Hour * 24 * time.Duration(i)).Format("2006-01-02"),
			Price:      price,
			Transition: transition.Transition{State: state},
		})
	}
	o.OrderItems = ois
	return ois
}

func (b *Booking) getPeopleNum() uint {
	switch b.NumPassengers {
	case "two":
		return 2
	case "2adult 1baby":
		return 3
	}
	i, err := strconv.Atoi(b.NumPassengers)
	if err != nil {
		log.Printf("Atoi(%s) has error: %s\n", b.NumPassengers, err)
	}
	return uint(i)
}
