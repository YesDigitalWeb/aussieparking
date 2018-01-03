// +build ignore

package main

import (
	"time"

	"github.com/qor/transition"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
)

func main() {
	db.DB.LogMode(false)
	for i := 0; i < 1000; i++ {
		db.DB.Create(&models.Order{From: time.Now().Add(time.Hour * 24), To: time.Now().Add(time.Hour * 24 * 10), Transition: transition.Transition{State: "pay_on_site"}})
	}
}
