package models

import (
	"bytes"
	"fmt"
	"log"

	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/lib/scribbler"
)

// For On Site Payment Order:
//
// User  (1 email): bookings.tpl
// Admin (1 email): admin.bookings.tpl
//
// For PayPal Order:
// User  (2 emails): bookings.tpl, payment.tpl
// Admin (2 emails): admin.bookings.tpl, admin.payment.tpl
//
func (o *Order) SendEmailNotifications(toUser, toAdmin, booking, payment bool) {
	if config.MailAuth == nil {
		return
	}

	log.Println("sending order email notification")

	if booking {
		if toUser {
			if err := o.sendCustomerBookingsMail(); err != nil {
				reportOrderError(o, fmt.Errorf("sendCustomerBookingsMail error: %s", err))
			}
		}
		if toAdmin {
			if err := o.sendAdminBookingsMail(); err != nil {
				reportOrderError(o, fmt.Errorf("sendAdminBookingsMail error: %s", err))
			}
		}
	}

	if payment && o.PaymentType == PaymentTypePaypal {
		if toUser {
			if err := o.sendCustomerPaymentMail(); err != nil {
				reportOrderError(o, fmt.Errorf("sendCustomerPaymentMail error: %s", err))
			}
		}
		if toAdmin {
			if err := o.sendAdminPaymentMail(); err != nil {
				reportOrderError(o, fmt.Errorf("sendAdminPaymentMail error: %s", err))
			}
		}
	}
}

func reportOrderError(o *Order, err error) {
	config.ReportError(fmt.Errorf("order (%d): %s", o.Id, err))
}

func (o *Order) sendCustomerBookingsMail() error {
	log.Println("sending customer bookings mail")

	var mail scribbler.Mail
	mail.Subject = fmt.Sprintf("Aussie Parking booking confirmation")
	mail.FromName = "Aussie Parking"
	mail.From = config.Cfg.Mail.Bookings
	mail.To = []string{o.User.Email}
	return o.sendMail(mail, "bookings")
}

func (o *Order) sendAdminBookingsMail() error {
	log.Println("sending admin bookings mail")

	var mail scribbler.Mail
	mail.Subject = fmt.Sprintf("New booking from %s %s", o.Profile.FirstName, o.Profile.LastName)
	mail.FromName = "Aussie Parking"
	mail.From = config.Cfg.Mail.Bookings
	mail.To = []string{config.Cfg.Mail.Bookings}
	return o.sendMail(mail, "bookings_admin")
}

func (o *Order) sendCustomerPaymentMail() error {
	log.Println("sending customer payment mail")

	var mail scribbler.Mail
	mail.Subject = fmt.Sprintf("Aussie Parking payment confirmation")
	mail.FromName = "Aussie Parking"
	mail.From = config.Cfg.Mail.Bookings
	mail.To = []string{o.User.Email}
	return o.sendMail(mail, "payment")
}

func (o *Order) sendAdminPaymentMail() error {
	log.Println("sending admin payment mail")

	var mail scribbler.Mail
	mail.Subject = fmt.Sprintf("Payment received from %s %s", o.Profile.FirstName, o.Profile.LastName)
	mail.FromName = "Server Admin"
	mail.From = config.Cfg.Mail.Admin
	mail.To = []string{config.Cfg.Mail.Bookings}
	return o.sendMail(mail, "paymnet_admin")
}

func (o *Order) sendMail(mail scribbler.Mail, tpl string) error {
	var buf bytes.Buffer
	if err := orderEmailTmpls.ExecuteTemplate(&buf, tpl, o); err != nil {
		return err
	}
	mail.HTML = buf.String()
	if err := mail.Send(config.Cfg.Mail.Host+config.Cfg.Mail.Port, config.MailAuth); err != nil {
		return err
	}
	return nil
}
