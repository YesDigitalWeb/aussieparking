package models

import (
	"errors"
	"fmt"
	"log"
	"sort"
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/jinzhu/gorm"
	"github.com/jinzhu/now"
	"github.com/mattbaird/gochimp"
	"github.com/qor/transition"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
)

var OrderStateMachine = transition.New(&Order{})

const (
	// The names of states are same as order events and will be used in
	// Order.AfterSave callback. It's a bad idea.
	OrderStateNew        = "new"
	OrderStateReady      = "ready"
	OrderStatePaypalPaid = "paypal_paid"
	OrderStatePayOnSite  = "pay_on_site"
	OrderStateConfirmed  = "confirmed"
	OrderStateCheckIn    = "check-in"
	OrderStateCheckOut   = "check-out"
	OrderStateCancelled  = "cancelled"

	PaymentTypePaypal = "Paypal"
	PaymentTypeOnSite = "On Site"
)

func init() {
	OrderStateMachine.Initial(OrderStateNew)
	OrderStateMachine.State(OrderStateReady)
	OrderStateMachine.State(OrderStatePaypalPaid)
	OrderStateMachine.State(OrderStatePayOnSite)
	OrderStateMachine.State(OrderStateConfirmed)
	OrderStateMachine.State(OrderStateCheckIn)
	OrderStateMachine.State(OrderStateCheckOut)
	OrderStateMachine.State(OrderStateCancelled)

	OrderStateMachine.Event("paypal_paid").To(OrderStatePaypalPaid).Before(func(value interface{}, tx *gorm.DB) error {
		order := value.(*Order)
		order.PaymentType = PaymentTypePaypal
		order.OrderedAt = time.Now()
		return tx.Model(&OrderItem{}).Where("order_id = ?", order.Id).UpdateColumn("state", OrderItemStatePaid).Error
	})
	OrderStateMachine.Event("pay_on_site").To(OrderStatePayOnSite).Before(func(value interface{}, tx *gorm.DB) error {
		order := value.(*Order)
		order.PaymentType = PaymentTypeOnSite
		order.OrderedAt = time.Now()
		return nil
	})
	OrderStateMachine.Event("ready").To(OrderStateReady)
	OrderStateMachine.Event("confirmed").To(OrderStateConfirmed).Before(func(value interface{}, tx *gorm.DB) (err error) {
		order := value.(*Order)
		return tx.Model(&OrderItem{}).Where("order_id = ?", order.Id).UpdateColumn("state", OrderItemStateConfirmed).Error
	})
	OrderStateMachine.Event("check-in").To(OrderStateCheckIn).Before(func(value interface{}, tx *gorm.DB) (err error) {
		order := value.(*Order)
		return tx.Model(&OrderItem{}).Where("order_id = ?", order.Id).UpdateColumn("state", OrderItemStatePaid).Error
	})
	OrderStateMachine.Event("check-out").To(OrderStateCheckOut)
	OrderStateMachine.Event("cancelled").To(OrderStateCancelled).Before(func(value interface{}, tx *gorm.DB) (err error) {
		order := value.(*Order)
		return tx.Model(&OrderItem{}).Where("order_id = ?", order.Id).UpdateColumn("state", OrderItemStateCancelled).Error
	})

	OrderStateMachine.Event("change_booking").To(OrderStateNew).From(OrderStateReady).After(func(value interface{}, tx *gorm.DB) (err error) {
		order := value.(*Order)
		return tx.Model(order).UpdateColumn("state", OrderStateNew).Error
	})
}

type Order struct {
	Base
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

	Amount float64 `sql:"type:decimal(19,4) DEFAULT 0"` // discount value is included
	// PayPal discount is included here. Also, note amount changes are applied
	// here. Details could be found in callback Note.BeforeSave.
	// It's a tricky implementation. (not my idea™) -- Van
	DiscountValue float64 `sql:"type:decimal(19,4) DEFAULT 0"`

	ParkingProductName string
	CleanProductId     uint64

	Note                 string
	SubscribeToMailChimp bool

	Notes      []Note
	OrderItems []OrderItem

	DiscountId uint // Promotion discount

	Cleaning          string    // Clean state
	CleanedAt         time.Time `sql:"type:date"`
	CleaningOrderedAt time.Time `sql:"type:date"` // Clean service order date

	OrderedAt time.Time

	// inAdminCreation is used matchDiscount()
	inAdminCreation bool

	// isFromOrToModified is introduced to disable price manager in dashboard order updates where
	// there are no from/to changes
	isFromOrToModified bool
}

func (o *Order) Editable() bool { return o.GetState() == OrderStateNew }

func (o *Order) IsNonDraft() bool {
	state := o.GetState()
	return state != OrderStateNew && state != OrderStateReady
}

func (o *Order) PaypalAmount() float64 {
	return mul(o.Amount, 0.9)
}

var ErrNotEnoughSlots = errors.New("Sorry, there are not enough slots available now. Please try changing your parking option or contact us for special arrangement.")

func (order *Order) BeforeSave(tx *gorm.DB) (err error) {
	if order.To.Sub(order.From).Hours()/24 > 720 {
		return errors.New("Can't process order range more than 720 days")
	}
	product := GetParkingProductByName(order.ParkingProductName)
	if product == nil {
		return errors.New("can't find product by name " + order.ParkingProductName)
	}

	// isFromOrToModified is by default true so it's not affecting admin order
	// creation which has a default state as confirmed
	order.isFromOrToModified = true
	if order.Id != 0 && order.IsNonDraft() {
		var oldOrder Order
		if err := tx.Find(&oldOrder, order.Id).Error; err != nil {
			return err
		}
		l := "2006-01-02 15:04"
		order.isFromOrToModified = !(order.From.Format(l) == oldOrder.From.Format(l) && order.To.Format(l) == oldOrder.To.Format(l))
	}

	// disable for now. Quote:
	// 	We may need to add it back in the future, but currently they never hit
	// 	their capacity and don’t want to deal with it now
	//
	// enough, err := HasEnoughSlots(order.From, order.To, product.Id)
	// if err != nil {
	// 	return
	// }
	// if !enough {
	// 	tx.AddError(validations.NewError(order, "SlotAvailablity", ErrNotEnoughSlots.Error()))
	// 	return ErrNotEnoughSlots
	// }

	return
}

func (order *Order) BeforeCreate(tx *gorm.DB) (err error) {
	if order.PeopleNum == 0 {
		order.PeopleNum = 1
	}
	if order.GetState() == "" {
		order.SetState(OrderStateNew)
	}

	// For normal order created by users in front end, state is OrderStateNew
	if order.Id == 0 && order.State == OrderStateConfirmed {
		order.inAdminCreation = true
	}

	return
}

func (order *Order) AfterSave(tx *gorm.DB) (err error) {
	if !order.IsNonDraft() || order.isFromOrToModified {
		err = NewPriceManager(order, tx).Process()
	}

	if state := order.GetState(); (state != "") && (state != OrderStateNew) {
		err = OrderStateMachine.Trigger(state, order, tx)
	}

	if order.SubscribeToMailChimp && order.User.Email != "" {
		go order.subscribeUserToMailChimp()
	}

	return
}

type Errors map[string]string

func (es Errors) Error() string {
	return fmt.Sprint(es)
}

func (order *Order) Validate(withProfile bool) error {
	now := time.Now()
	var err = make(Errors)
	if order.From.Before(now) {
		err["CheckInDate"] = fmt.Errorf("should greater than now.").Error()
	}
	if order.To.Before(now) {
		err["CheckOutDate"] = fmt.Errorf("should greater than now.").Error()
	}
	if order.From.After(order.To) {
		err["CheckOutDate"] = fmt.Errorf("Please select a check-out date and time.").Error()
	}
	if withProfile {
		if order.Profile.FirstName == "" {
			err["Profile.FirstName"] = fmt.Errorf("First Name can't be empty.").Error()
		}
		if order.Profile.LastName == "" {
			err["Profile.LastName"] = fmt.Errorf("Family Name can't be empty.").Error()
		}
		if order.Profile.Phone == "" {
			err["Profile.Phone"] = fmt.Errorf("Phone can't be empty.").Error()
		}

		if order.User.Email == "" {
			err["User.Email"] = fmt.Errorf("Email can't be empty.").Error()
		} else if !govalidator.IsEmail(order.User.Email) {
			err["User.Email"] = fmt.Errorf("Email format is illegal.").Error()
		}
	}

	for range err {
		return err
	}

	return nil
}

type PriceBreakdown struct {
	Items []PriceBreakdownItem
	Total float64
}

func (p *PriceBreakdown) Len() int           { return len(p.Items) }
func (p *PriceBreakdown) Swap(i, j int)      { p.Items[i], p.Items[j] = p.Items[j], p.Items[i] }
func (p *PriceBreakdown) Less(i, j int) bool { return p.Items[i].day < p.Items[j].day }

type PriceBreakdownItem struct {
	day         string
	Date        string
	Rate        float64
	DayTotal    float64
	Description string
}

// TODO: add test
// GenPriceBreakdown contains both order items and notes
func GenPriceBreakdown(db *gorm.DB, order Order) (breakdown PriceBreakdown) {
	var orderItems []OrderItem
	if err := db.Where("order_id = ?", order.Id).Order("day").Order("type desc").Find(&orderItems).Error; err != nil {
		fmt.Println("GenPriceBreakdown error:", err)
		return
	}
	for _, item := range orderItems {
		// clean products is merged into the last breakdown item
		if item.Type == Clean {
			index := len(breakdown.Items) - 1
			bitem := breakdown.Items[index]
			bitem.DayTotal += item.Price
			var productName string
			if product := GetProductById(item.ProductId); product != nil {
				productName = product.Name
			}
			if bitem.Description == "—" {
				bitem.Description = ""
			}
			bitem.Description += fmt.Sprintf("Car Detailing: %s + $%.2f; ", productName, item.Amount())
			breakdown.Items[index] = bitem
		} else {
			date, _ := time.Parse("2006-01-02", item.Day)
			bitem := PriceBreakdownItem{
				day:         item.Day,
				Date:        date.Format("Mon, Jan 2"),
				Description: "—",
				Rate:        item.Amount(),
				DayTotal:    item.Amount(),
			}
			if item.Discount != 0 {
				bitem.Description = fmt.Sprintf("Discount: $%.2f; ", item.Discount)
			}
			if item.SpecialPrice > 0.0 {
				bitem.Description = fmt.Sprintf("Special Time Surcharge + $%.2f; ", item.SpecialPrice)
				bitem.Rate -= item.SpecialPrice
			}
			breakdown.Items = append(breakdown.Items, bitem)
		}
	}

	breakdown.Total = order.Amount

	var notes []Note
	if err := db.Where("order_id = ? and auto_generated = false", order.Id).Find(&notes).Error; err != nil {
		println("can't retrieve notes:", err.Error())
	}

	for _, note := range notes {
		desc := "Note: —"
		if note.Note != "" {
			desc = "Note: " + note.Note
		}
		breakdown.Items = append(breakdown.Items, PriceBreakdownItem{
			day:         note.CreatedAt.Format("2006-01-02"),
			Date:        note.CreatedAt.Format("Mon, Jan 2"),
			Rate:        note.ChangedAmount,
			DayTotal:    note.ChangedAmount,
			Description: desc,
		})
	}

	sort.Sort(&breakdown)

	return
}

func GetBookingStats(date time.Time) (checkIns, checkOuts, availables int, err error) {
	scope := db.DB.Model(&Order{}).Where(
		"state in (?)",
		[]string{
			OrderStatePaypalPaid, OrderStatePayOnSite, // "paypal_paid", "pay_on_site",
			OrderStateConfirmed, OrderStateCheckIn, // "confirmed", "check-in", "paid",
		},
	)
	beginning, end := now.New(date).BeginningOfDay(), now.New(date).EndOfDay()
	if err = scope.Where("`from` >= ? and `from` <= ?", beginning, end).Count(&checkIns).Error; err != nil {
		return
	}
	if err = scope.Where("`to` >= ? and `to` <= ?", beginning, end).Count(&checkOuts).Error; err != nil {
		return
	}
	var occupied int
	err = scope.Where("`from` <= ? and `to` >= ?", end, beginning).Count(&occupied).Error
	if err != nil {
		return
	}

	availables = UnderCoverSlotAvailablity + IndoorSlotAvailablity + OutdoorSlotAvailablity - occupied

	return
}

func (o Order) subscribeUserToMailChimp() (err error) {
	if config.Cfg.MailChimpAPIKey == "" {
		return
	}

	log.Println("subscribe user to mailchimp list")
	api := gochimp.NewChimp(config.Cfg.MailChimpAPIKey, true)
	list, err := api.ListsList(gochimp.ListsList{
		ApiKey: config.Cfg.MailChimpAPIKey,
		Filters: gochimp.ListFilter{
			ListName: config.Cfg.MailChimpListName,
		},
	})
	if err != nil {
		config.ReportError(err)
		return
	} else if len(list.Data) == 0 {
		err = fmt.Errorf("empty list error")
		config.ReportError(err)
		return
	}

	if _, err = api.ListsSubscribe(gochimp.ListsSubscribe{
		ApiKey:         config.Cfg.MailChimpAPIKey,
		ListId:         list.Data[0].Id,
		Email:          gochimp.Email{Email: o.User.Email},
		UpdateExisting: true,
	}); err != nil {
		config.ReportError(fmt.Errorf("subscribeUserToMailChimp(id: %d, email: %s): %s", o.Id, o.User.Email, err))
		return
	}

	return
}

// for table: Car Detailing (Internal) For Checkout Due Tomorrow
func (o *Order) Due() string {
	if today := now.New(time.Now()).EndOfDay(); o.To.Before(today) {
		return "today"
	} else if o.To.Before(today.Add(time.Hour * 24)) {
		return "tomorrow"
	}

	return o.To.String()
}

// for table: Checkins & Checkouts Today
func (o *Order) InOut() string {
	text, _, _ := o.CheckInOutRaw("text")
	return text
}

// for table: Checkins & Checkouts Today
func (o *Order) CheckInOutTime() string {
	_, tim, layout := o.CheckInOutRaw("time")
	return tim.Format(layout)
}

// CheckInOutRaw return in/out time for table "Checkins & Checkouts Today".
// For the sake of DRY, so it's a little bit of messy.
func (o *Order) CheckInOutRaw(typ string) (text string, tim time.Time, layout string) {
	today, text, layout := time.Now(), "error", "error"
	switch o.GetState() {
	case OrderStateCheckIn, OrderStateCancelled:
		if sameDay(today, o.From) && !sameDay(today, o.To) {
			switch typ {
			case "text":
				if o.GetState() == OrderStateCancelled {
					text = "Cancelled"
				} else {
					text = "Checked IN"
				}
				return
			case "time":
				tim, layout = o.From, "15:04"
				return
			}
		}

		switch typ {
		case "text":
			if o.GetState() == OrderStateCancelled {
				text = "Cancelled"
			} else {
				text = "Check OUT"
			}
			return
		case "time":
			if o.IsLateCheckInOut() {
				tim, layout = o.To, "15:04 Jan 02"
			} else {
				tim, layout = o.To, "15:04"
			}
			return
		}
	case OrderStateCheckOut:
		switch typ {
		case "text":
			text = "Checked OUT"
			return
		case "time":
			tim, layout = o.To, "15:04"
			return
		}
	}

	switch typ {
	case "text":
		text = "Check IN"
		return
	case "time":
		if o.IsLateCheckInOut() {
			tim, layout = o.From, "15:04 Jan 02"
		} else {
			tim, layout = o.From, "15:04"
		}
		return
	}

	return
}

func (o *Order) IsLateCheckInOut() bool {
	now := now.New(time.Now()).BeginningOfDay()
	switch o.GetState() {
	case OrderStatePaypalPaid, OrderStateConfirmed, OrderStatePayOnSite:
		return o.From.Before(now)
	case OrderStateCheckIn:
		return o.To.Before(now)
	}
	return false
}

// for table: Booking List
func (o *Order) BookingListInOut(typ string, date string) string {
	if date == "" {
		date = time.Now().Format("2006-01-02")
	}
	if o.From.Format("2006-01-02") == date {
		switch typ {
		case "text":
			return "Check IN"
		case "time":
			return o.From.Format("15:04")
		}
	}

	switch typ {
	case "text":
		return "Check OUT"
	case "time":
		return o.To.Format("15:04")
	}

	return "Error"
}

func sameDay(day1, day2 time.Time) bool {
	return day1.Format("2006-01-02") == day2.Format("2006-01-02")
}

var maskIDBase uint64 = 28974

// MaskedId returns a masked id for order, which is also unique and link to
// original id. for the puporse of hiding the original id
func (o Order) MaskedId() string {
	return fmt.Sprintf("%x", o.Id+maskIDBase)
}

func (o Order) ParkingDays() int {
	return int(time.Date(o.To.Year(), o.To.Month(), o.To.Day(), 0, 0, 0, 0, o.To.Location()).Sub(time.Date(o.From.Year(), o.From.Month(), o.From.Day(), 0, 0, 0, 0, o.From.Location())).Hours()/24) + 1
}

func (o Order) FormatedAmount() string {
	return fmt.Sprintf("%.2f", o.Amount)
}
