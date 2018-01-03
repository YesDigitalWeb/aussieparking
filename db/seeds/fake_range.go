// +build ignore

package main

import (
	"time"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
	_ "github.com/theplant/aussie/resources"
)

func main() {
	loc, _ := time.LoadLocation("Asia/Shanghai")
	start, _ := time.ParseInLocation("2006-01-02", "2015-01-20", loc)
	end, _ := time.ParseInLocation("2006-01-02", "2015-01-31", loc)
	r := models.Range{
		Start:            start,
		End:              end,
		Weekdays:         []int{1, 2, 3, 4, 5, 6, 0},
		SpecialTimeSince: "22:00",
		RangeProducts: []models.RangeProduct{
			{
				ProductId:    1,
				SpecialPrice: 10,
				Price:        10,
			},
			{
				ProductId:    2,
				SpecialPrice: 20,
				Price:        20,
			},
			{
				ProductId:    3,
				SpecialPrice: 5,
				Price:        5,
			},
			{
				ProductId: 4,
				Price:     10,
			},
			{
				ProductId: 5,
				Price:     20,
			},
			{
				ProductId: 6,
				Price:     30,
			},
			{
				ProductId: 7,
				Price:     10,
			},
			{
				ProductId: 8,
				Price:     20,
			},
			{
				ProductId: 9,
				Price:     30,
			},
		},
	}
	err := db.DB.Create(&r).Error
	if err != nil {
		panic(err)
	}
}
