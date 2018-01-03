// +build ignore

package main

import "github.com/theplant/aussie/db"

func main() {
	if err := db.DB.Exec(`alter table orders change column ordered_at cleaning_ordered_at date`).Error; err != nil {
		panic(err)
	}
	if err := db.DB.Exec(`alter table orders add column ordered_at timestamp`).Error; err != nil {
		panic(err)
	}
}
