package models

import (
	"github.com/theplant/aussie/config"

	"testing"
)

func TestSendEmailNotifications(t *testing.T) {
	order := Order{
		User: User{Email: config.Cfg.Mail.TestRecipient},
		Profile: Profile{
			FirstName: "Julian",
			LastName:  "Logan",
			Phone:     "+379-82-8401990",
		},
		From:               getTime("2015-10-27 08:00"),
		To:                 getTime("2015-10-30 08:00"),
		PaymentType:        PaymentTypeOnSite,
		Amount:             1000.1526,
		CarMake:            "Car Make",
		CarModel:           "Car Model",
		CarRego:            "Car Rego",
		Note:               "a long note: non earum temporibus iure non dicta nihil.",
		ParkingProductName: "indoor",
		ReturnFlight:       "0xff",
		PeopleNum:          10,
	}

	order.SendEmailNotifications(true, true, true, true)

	order.PaymentType = PaymentTypePaypal
	order.SendEmailNotifications(true, true, true, true)
}
