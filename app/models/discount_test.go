package models

import (
	"reflect"
	"testing"
	"time"

	"github.com/kr/pretty"
	"github.com/theplant/qor-enterprise/promotion"

	"github.com/theplant/aussie/db"
)

func TestRetrieveBenefit(t *testing.T) {
	benefit := PromotionBenefit{
		Discounts: []Discount{
			{
				Days: 5,
				Products: []ProductDiscount{
					{ProductId: AllParkingProducts[0].Id, Discount: 10},
					{ProductId: AllParkingProducts[1].Id, Discount: 20},
					{ProductId: AllParkingProducts[2].Id, Discount: 30},
				},
			},
			{
				Days: 10,
				Products: []ProductDiscount{
					{ProductId: AllParkingProducts[0].Id, Discount: 20},
					{ProductId: AllParkingProducts[1].Id, Discount: 30},
					{ProductId: AllParkingProducts[2].Id, Discount: 40},
				},
			},
			{
				Days: 20,
				Products: []ProductDiscount{
					{ProductId: AllParkingProducts[0].Id, Discount: 30},
					{ProductId: AllParkingProducts[1].Id, Discount: 40},
					{ProductId: AllParkingProducts[2].Id, Discount: 50},
				},
			},
		},
	}

	cases := []struct {
		item OrderItem
		want float64
	}{
		0: {
			item: OrderItem{ProductId: 1, Day: "2015-09-01", Order: &Order{From: getTime("2015-09-01")}},
			want: 0,
		},
		1: {
			item: OrderItem{ProductId: 2, Day: "2015-09-05", Order: &Order{From: getTime("2015-09-01")}},
			want: 20,
		},
		2: {
			item: OrderItem{ProductId: 3, Day: "2015-09-10", Order: &Order{From: getTime("2015-09-01")}},
			want: 40,
		},
		3: {
			item: OrderItem{ProductId: 2, Day: "2015-09-20", Order: &Order{From: getTime("2015-09-01")}},
			want: 40,
		},
	}

	pbenefit := ToPromotionBenefit(benefit)
	for i, c := range cases {
		if err := retrieveBenefit(nil, &c.item, pbenefit); err != nil {
			t.Error(err)
		}
		if got, want := c.item.Discount, c.want; got != want {
			t.Errorf("cases[%d].item.Discount = %.2f; want %.2f", i, got, want)
		}
	}
}

func TestCreateDiscount(t *testing.T) {
	discount, err := CreateDiscount(
		PromotionRule{
			Start:    time.Now().Add(time.Hour * 24).Format("2006-01-02"),
			End:      time.Now().Add(time.Hour * 24 * 365).Format("2006-01-02"),
			Weekdays: Weekdays{0, 1, 2, 3, 4, 5, 6},
		},
		PromotionBenefit{
			Discounts: []Discount{
				{
					Days: 5,
					Products: []ProductDiscount{
						{ProductId: AllParkingProducts[0].Id, Discount: 0},
						{ProductId: AllParkingProducts[1].Id, Discount: 0},
						{ProductId: AllParkingProducts[2].Id, Discount: 0},
					},
				},
				{
					Days: 10,
					Products: []ProductDiscount{
						{ProductId: AllParkingProducts[0].Id, Discount: 20},
						{ProductId: AllParkingProducts[1].Id, Discount: 0},
						{ProductId: AllParkingProducts[2].Id, Discount: 0},
					},
				},
				{
					Days: 20,
					Products: []ProductDiscount{
						{ProductId: AllParkingProducts[0].Id, Discount: 30},
						{ProductId: AllParkingProducts[1].Id, Discount: 40},
						{ProductId: AllParkingProducts[2].Id, Discount: 50},
					},
				},
			},
		},
	)
	if err != nil {
		t.Error(err)
	}
	var gotDiscount promotion.PromotionDiscount
	if err := db.DB.Preload("Rules").Preload("Benefits").Find(&gotDiscount, discount.ID).Error; err != nil {
		t.Error(err)
	}
	want := &PromotionBenefit{
		Discounts: []Discount{
			{
				Days: 10,
				Products: []ProductDiscount{
					{ProductId: AllParkingProducts[0].Id, Discount: 20},
					// {ProductId: AllParkingProducts[1].Id, Discount: 20},
				},
			},
			{
				Days: 20,
				Products: []ProductDiscount{
					{ProductId: AllParkingProducts[0].Id, Discount: 30},
					{ProductId: AllParkingProducts[1].Id, Discount: 40},
					{ProductId: AllParkingProducts[2].Id, Discount: 50},
				},
			},
		},
	}

	got := ToModelBenefit(gotDiscount.Benefits[0])
	if !reflect.DeepEqual(got, want) {
		t.Errorf("got %# v; want %# v", pretty.Formatter(got), pretty.Formatter(want))
	}
}
