// +build ignore

package main

import (
	"fmt"
	"time"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
)

func main() {
	var products = []models.Product{
		{Name: models.Indoor, Type: models.Parking},
		{Name: models.UnderCover, Type: models.Parking},
		{Name: models.Outdoor, Type: models.Parking},

		{Name: models.CleanTypeNoWorries, CarType: models.CarTypeSedan, Type: models.Clean},
		{Name: models.CleanTypeBonza, CarType: models.CarTypeSedan, Type: models.Clean},
		// {Name: models.CleanTypeHolyMackerel, CarType: models.CarTypeSedan, Type: models.Clean},

		{Name: models.CleanTypeNoWorries, CarType: models.CarType4WD, Type: models.Clean},
		{Name: models.CleanTypeBonza, CarType: models.CarType4WD, Type: models.Clean},
		// {Name: models.CleanTypeHolyMackerel, CarType: models.CarType4WD, Type: models.Clean},
	}

	var db = db.DB
	for i, product := range products {
		// err := db.Where("name = ?", product.Name).Assign(product).FirstOrCreate(&product).Error
		err := db.Create(&product).Error
		if err != nil {
			fmt.Println(product.Name, err)
		}
		err = db.Save(&product).Error
		if err != nil {
			fmt.Println(product.Name, err)
		}
		products[i] = product
	}

	// A basic range spanning over ten years
	err := db.Create(&models.Range{
		Start:            time.Now(),
		End:              time.Now().Add(time.Hour * 24 * 365 * 10),
		Weekdays:         []int{0, 1, 2, 3, 4, 5, 6},
		SpecialTimeSince: "15:00",
		RangeProducts: []models.RangeProduct{
			{ProductId: products[0].Id, Price: 20}, // Indoor
			{ProductId: products[1].Id, Price: 17}, // Under Cover
			{ProductId: products[2].Id, Price: 13}, // Outdoor
			{ProductId: products[3].Id, Price: 25}, // Clean Type No Worries
			{ProductId: products[4].Id, Price: 89}, // Clean Type Bonza
			{ProductId: products[5].Id, Price: 29}, // Clean Type No Worries
			{ProductId: products[6].Id, Price: 99}, // Clean Type Bonza
		},
	}).Error
	if err != nil {
		panic(err)
	}
}
