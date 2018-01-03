// +build ignore

package main

import (
	"flag"
	"log"
	"os"
	"strconv"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
)

type Ints []int

func (is Ints) String() string {
	var s string
	for _, i := range is {
		if s != "" {
			s += ", "
		}
		s += strconv.Itoa(i)
	}
	return s
}

func (is *Ints) Set(v string) error {
	i, err := strconv.ParseInt(v, 10, 64)
	if err != nil {
		return err
	}
	*is = append(*is, int(i))
	return nil
}

func main() {
	var ids Ints
	var toUser, toAdmin bool
	var booking, payment bool
	flag.Var(&ids, "id", "order id, multiple ids are supported (-id 1 -id 2)")
	flag.BoolVar(&toUser, "user", false, "resend emails to user")
	flag.BoolVar(&toAdmin, "admin", false, "resend emails to admin")
	flag.BoolVar(&booking, "booking", false, "resend booking emails")
	flag.BoolVar(&payment, "payment", false, "resend payment emails")
	flag.Parse()

	if len(ids) == 0 {
		log.Println("please specify id with -id 1")
		os.Exit(1)
	}
	if !toUser && !toAdmin {
		log.Println("please specify email destination with -to-user or -to-admin")
		os.Exit(1)
	}

	var orders []models.Order
	if err := db.DB.Where("id in (?)", ids).Preload("User").Preload("Profile").Find(&orders).Error; err != nil {
		panic(err)
	}
	for _, order := range orders {
		log.Printf("handle order (%d:%s:%s) -----\n", order.Id, order.Profile.FullName(), order.User.Email)
		order.SendEmailNotifications(toUser, toAdmin, booking, payment)
	}
}
