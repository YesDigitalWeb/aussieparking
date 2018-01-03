// +build ignore

package main

import (
	"flag"
	"fmt"

	"github.com/qor/media_library"

	"github.com/qor/transition"
	"github.com/theplant/qor-enterprise/promotion"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
)

func main() {
	force := flag.Bool("f", false, "force migration")
	flag.Parse()

	tables := []interface{}{
		&models.User{},
		&models.Profile{},
		&models.Order{},
		&models.OrderItem{},
		&models.Note{},
		&models.ContactUs{},
		&models.Range{},
		&models.RangeProduct{},
		&models.Product{},
		&models.DailyReport{},
		&models.AdminUser{},
		&models.Article{},
		&transition.StateChangeLog{},
		&media_library.AssetManager{},
	}

	for _, t := range tables {
		if *force {
			if err := db.DB.Debug().DropTable(t).Error; err != nil {
				fmt.Println(err) // do not panic here for new database don't have tables
			}
		}
		if err := db.DB.Debug().AutoMigrate(t).Error; err != nil {
			panic(err)
		}
	}

	// resources.PublishDB.AutoMigrate(&models.Range{}, &models.RangeProduct{}, &models.Product{})
	// resources.PublishDB.AutoMigrate(&models.Range{}, &models.RangeProduct{})
	promotion.AutoMigrate(db.DB)

	if *force {
		if err := db.DB.Model(&models.OrderItem{}).AddIndex("order_id_day_type", []string{"order_id", "day", "type", "deleted_at"}...).Error; err != nil {
			panic(err)
		}
		if err := db.DB.Model(&models.User{}).AddIndex("user_index", "email").Error; err != nil {
			panic(err)
		}
		if err := db.DB.Model(&models.Profile{}).AddIndex("profile_index", "first_name", "last_name", "phone").Error; err != nil {
			panic(err)
		}

		err := db.DB.Create(&models.AdminUser{
			Name:              "Admin",
			Role:              "admin",
			Email:             "admin@aussieparking.com.au",
			Password:          "test",
			ConfirmedPassword: "test",
		}).Error
		if err != nil {
			panic(err)
		}
	}
}
