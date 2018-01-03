package models

import (
	"flag"
	"log"
	"strings"
	"testing"
	"time"

	"github.com/qor/admin"
	"github.com/qor/qor"
	"github.com/theplant/aussie/db"
	"github.com/theplant/qor-enterprise/promotion"
)

var debugCase = flag.Int("case", -1, "specify case index")

// specify running case with flag case. e.g. go test -run ParkingDays -case 1
func skipCase(i int) bool { return *debugCase != -1 && *debugCase != i }

func getTime(format string) time.Time {
	layout := "2006-01-02"
	if strings.Contains(format, ":") {
		layout = "2006-01-02 15:04"
	}
	date, err := time.ParseInLocation(layout, format, time.Local)
	if err != nil {
		panic(err)
	}
	return date
}

var (
	productClean *Product
	testBenefit  PromotionBenefit
	testDiscount promotion.PromotionDiscount
)

func init() {
	log.SetFlags(log.Lshortfile)
	RegisterPromotionHandlers(admin.New(&qor.Config{DB: db.DB}))

	productClean = AllCleanProductsMap[CarType4WD][CleanTypeNoWorries]
	tables := []interface{}{
		&Order{},
		&OrderItem{},
		&DailyReport{},
		&Range{},
		&RangeProduct{},

		&promotion.PromotionDiscount{},
		&promotion.PromotionRule{},
		&promotion.PromotionBenefit{},
		&promotion.BenefitRecord{},
	}
	for _, table := range tables {
		if err := db.DB.DropTable(table).Error; err != nil {
			panic(err)
		}
		if err := db.DB.CreateTable(table).Error; err != nil {
			panic(err)
		}
	}

	// Test Data Explanation
	//
	//   2014 November      |    2014 December
	// Su Mo Tu We Th Fr Sa | Su Mo Tu We Th Fr Sa
	//                    1 |     1  2  3  4  5  6
	//  2  3  4  5  6  7  8 |  7  8  9 10 11 12 13
	//  9 10 11 12 13 14 15 | 14 15 16 17 18 19 20
	// 16 17 18 19 20 21 22 | 21 22 23 24 25 26 27
	// 23 24 25 26 27 28 29 | 28 29 30 31
	// 30                   |
	//
	ranges := []Range{
		// an old and long basic ranges
		0: {
			Start:            getTime("2014-10-01"),
			End:              getTime("2014-12-31"),
			Weekdays:         []int{0, 1, 2, 3, 4, 5, 6},
			SpecialTimeSince: "15:00",
			RangeProducts: []RangeProduct{
				{ProductId: ProductIndoor.Id, Price: 80, SpecialPrice: 20},
				{ProductId: ProductOutdoor.Id, Price: 40},
				{ProductId: ProductUnderCover.Id, Price: 5},
				{ProductId: productClean.Id, Price: 20},
			},
		},

		1: {
			Start:            getTime("2014-11-01"),
			End:              getTime("2014-11-05"),
			Weekdays:         []int{0, 1, 2, 3, 4, 5, 6},
			SpecialTimeSince: "18:00",
			RangeProducts: []RangeProduct{
				{ProductId: ProductIndoor.Id, Price: 20, SpecialPrice: 10},
				{ProductId: ProductOutdoor.Id, Price: 10},
				{ProductId: ProductUnderCover.Id, Price: 5},
				{ProductId: productClean.Id, Price: 20},
			},
		},
		2: {
			Start:            getTime("2014-11-02"),
			End:              getTime("2014-11-03"),
			Weekdays:         []int{0, 1, 2, 3, 4, 5, 6},
			SpecialTimeSince: "15:00",
			RangeProducts: []RangeProduct{
				{ProductId: ProductIndoor.Id, Price: 35, SpecialPrice: 10},
				{ProductId: ProductOutdoor.Id, Price: 25},
				{ProductId: ProductUnderCover.Id, Price: 5},
			},
		},

		// special weekdays setting
		3: {
			Start:            getTime("2014-11-01"),
			End:              getTime("2014-12-01"),
			Weekdays:         []int{4}, // Thursday
			SpecialTimeSince: "15:00",
			RangeProducts: []RangeProduct{
				{ProductId: ProductIndoor.Id, Price: 50, SpecialPrice: 20},
				{ProductId: ProductOutdoor.Id, Price: 30},
				{ProductId: ProductUnderCover.Id, Price: 15},
				{ProductId: productClean.Id, Price: 20},
			},
		},
	}

	for i, _ := range ranges {
		r := ranges[i]
		if err := db.DB.Create(&r).Error; err != nil {
			panic(err)
		}
	}

	// This is discount data is to be ignored
	if _, err := CreateDiscount(
		PromotionRule{
			Start:    "2014-10-01",
			End:      time.Now().Add(time.Hour * 24).Format("2006-01-02"),
			Weekdays: Weekdays{0, 1, 2, 3, 4, 5, 6},
		},
		PromotionBenefit{
			Discounts: []Discount{
				{
					Days: 5,
					Products: []ProductDiscount{
						{ProductId: AllParkingProducts[0].Id, Discount: 11},
						{ProductId: AllParkingProducts[1].Id, Discount: 21},
						{ProductId: AllParkingProducts[2].Id, Discount: 31},
					},
				},
				{
					Days: 10,
					Products: []ProductDiscount{
						{ProductId: AllParkingProducts[0].Id, Discount: 21},
						{ProductId: AllParkingProducts[1].Id, Discount: 31},
						{ProductId: AllParkingProducts[2].Id, Discount: 41},
					},
				},
				{
					Days: 20,
					Products: []ProductDiscount{
						{ProductId: AllParkingProducts[0].Id, Discount: 31},
						{ProductId: AllParkingProducts[1].Id, Discount: 41},
						{ProductId: AllParkingProducts[2].Id, Discount: 51},
					},
				},
			},
		},
	); err != nil {
		panic(err)
	}

	testBenefit = PromotionBenefit{
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
	var err error
	if testDiscount, err = CreateDiscount(
		PromotionRule{
			Start:    "2014-10-01",
			End:      time.Now().Add(time.Hour * 24).Format("2006-01-02"),
			Weekdays: Weekdays{0, 1, 2, 3, 4, 5, 6},
		},
		testBenefit,
	); err != nil {
		panic(err)
	}

	if _, err := CreateDiscount(
		PromotionRule{
			Start:    "2014-11-20",
			End:      time.Now().Add(time.Hour * 24).Format("2006-01-02"),
			Weekdays: Weekdays{0, 1, 2, 3, 4, 5, 6},
		},
		PromotionBenefit{},
	); err != nil {
		panic(err)
	}
}

// TODO: test Order.DiscountValue here too
// Part of PriceManager's functionality is covered in TestOrderUpdate too.
func TestPriceManager(t *testing.T) {
	cases := []struct {
		order                *Order
		expectAmount         float64
		expectOrderItemCount int
		expectItems          []OrderItem
		expectDiscountId     uint
	}{
		// Use test range 1 and 2 created in init() above
		// Has special prices
		0: {
			order: &Order{
				From:               getTime("2014-11-02 16:00"),
				To:                 getTime("2014-11-05 19:00"),
				ParkingProductName: ProductIndoor.Name,
			},
			expectAmount: float64((35 + 10) + 35 + 20 + (20 + 10)), // group by day
			expectItems: []OrderItem{
				0: {Day: "2014-11-02", Discount: 0, Type: Parking, Price: 35 + 10},
				1: {Day: "2014-11-03", Discount: 0, Type: Parking, Price: 35},
				2: {Day: "2014-11-04", Discount: 0, Type: Parking, Price: 20},
				3: {Day: "2014-11-05", Discount: 0, Type: Parking, Price: 20 + 10},
			},
			expectDiscountId: testDiscount.ID,
		},

		// Same as case 0, but with clean product
		1: {
			order: &Order{
				From:               getTime("2014-11-02 16:00"),
				To:                 getTime("2014-11-05 19:00"),
				ParkingProductName: ProductIndoor.Name,
				CleanProductId:     productClean.Id,
			},
			expectAmount: float64((35 + 10) + 35 + 20 + (20 + 10) + 20), // group by day
			expectItems: []OrderItem{
				0: {Day: "2014-11-02", Discount: 0, Type: Parking, Price: 35 + 10},
				1: {Day: "2014-11-03", Discount: 0, Type: Parking, Price: 35},
				2: {Day: "2014-11-04", Discount: 0, Type: Parking, Price: 20},
				3: {Day: "2014-11-05", Discount: 0, Type: Clean, Price: 20},
				4: {Day: "2014-11-05", Discount: 0, Type: Parking, Price: 20 + 10},
			},
			expectDiscountId: testDiscount.ID,
		},

		// Only park for one day
		2: {
			order: &Order{
				From:               getTime("2014-11-05 7:00"),
				To:                 getTime("2014-11-05 20:00"),
				ParkingProductName: ProductIndoor.Name,
				CleanProductId:     productClean.Id,
			},
			expectAmount: float64((20 + 10) + 20),
			expectItems: []OrderItem{
				0: {Day: "2014-11-05", Discount: 0, Type: Clean, Price: 20},
				1: {Day: "2014-11-05", Discount: 0, Type: Parking, Price: 20 + 10},
			},
			expectDiscountId: testDiscount.ID,
		},

		// Has discounts
		3: {
			order: &Order{
				From:               getTime("2014-11-01 7:00"),
				To:                 getTime("2014-11-25 20:00"),
				ParkingProductName: ProductIndoor.Name,
				CleanProductId:     productClean.Id,
			},
			expectAmount: 1250,
			expectItems: []OrderItem{
				0:  {Day: "2014-11-01", Price: 20, Discount: 0, Type: Parking},
				1:  {Day: "2014-11-02", Price: 35, Discount: 0, Type: Parking},
				2:  {Day: "2014-11-03", Price: 35, Discount: 0, Type: Parking},
				3:  {Day: "2014-11-04", Price: 20, Discount: 0, Type: Parking},
				4:  {Day: "2014-11-05", Price: 10, Discount: 10, Type: Parking},
				5:  {Day: "2014-11-06", Price: 40, Discount: 10, Type: Parking},
				6:  {Day: "2014-11-07", Price: 70, Discount: 10, Type: Parking},
				7:  {Day: "2014-11-08", Price: 70, Discount: 10, Type: Parking},
				8:  {Day: "2014-11-09", Price: 70, Discount: 10, Type: Parking},
				9:  {Day: "2014-11-10", Price: 60, Discount: 20, Type: Parking},
				10: {Day: "2014-11-11", Price: 60, Discount: 20, Type: Parking},
				11: {Day: "2014-11-12", Price: 60, Discount: 20, Type: Parking},
				12: {Day: "2014-11-13", Price: 30, Discount: 20, Type: Parking},
				13: {Day: "2014-11-14", Price: 60, Discount: 20, Type: Parking},
				14: {Day: "2014-11-15", Price: 60, Discount: 20, Type: Parking},
				15: {Day: "2014-11-16", Price: 60, Discount: 20, Type: Parking},
				16: {Day: "2014-11-17", Price: 60, Discount: 20, Type: Parking},
				17: {Day: "2014-11-18", Price: 60, Discount: 20, Type: Parking},
				18: {Day: "2014-11-19", Price: 60, Discount: 20, Type: Parking},
				19: {Day: "2014-11-20", Price: 20, Discount: 30, Type: Parking},
				20: {Day: "2014-11-21", Price: 50, Discount: 30, Type: Parking},
				21: {Day: "2014-11-22", Price: 50, Discount: 30, Type: Parking},
				22: {Day: "2014-11-23", Price: 50, Discount: 30, Type: Parking},
				23: {Day: "2014-11-24", Price: 50, Discount: 30, Type: Parking},
				24: {Day: "2014-11-25", Price: 20, Discount: 0, Type: Clean},
				25: {Day: "2014-11-25", Price: 70, Discount: 30, Type: Parking},
			},
			expectDiscountId: testDiscount.ID,
		},
	}

	for i, c := range cases {
		if skipCase(i) {
			continue
		}

		t.Log("Test Case", i)

		// loop twice here to make sure that price manager always return the
		// same result for the same order input
		for i := 0; i < 2; i++ {
			t.Log("Loop", i)
			order := *c.order
			order.State = OrderStateNew
			if err := db.DB.Save(&order).Error; err != nil {
				t.Errorf("unexpect error %s", err)
			}

			var dbOrder Order
			if err := db.DB.Preload("OrderItems").Find(&dbOrder, order.Id).Error; err != nil {
				t.Fatal(err)
			}
			order = dbOrder

			if order.Amount != c.expectAmount {
				t.Errorf("got %.2f; expect %.2f", order.Amount, c.expectAmount)
			}
			if order.DiscountId != c.expectDiscountId {
				t.Errorf("got %d; expect %d", order.DiscountId, c.expectDiscountId)
			}

			var items []OrderItem
			if err := db.DB.Model(&order).Related(&items).Error; err != nil {
				t.Errorf("unexpect error %s", err)
			}

			if count := len(items); count != len(c.expectItems) {
				t.Errorf("len(items) = %d; expect %d", count, len(c.expectItems))
			}

			for i, item := range items {
				if len(c.expectItems) <= i {
					continue
				}

				if got, want := item.Day, c.expectItems[i].Day; got != want {
					t.Errorf("item[%d].Day = %s; want %s", i, got, want)
				}
				if got, want := item.Discount, c.expectItems[i].Discount; got != want {
					t.Errorf("item[%d].Discount = %.2f; want %.2f", i, got, want)
				}
				if got, want := item.Type, c.expectItems[i].Type; got != want {
					t.Errorf("item[%d].Type = %s; want %s", i, got, want)
				}
				if got, want := item.Price, c.expectItems[i].Price; got != want {
					t.Errorf("item[%d].Price = %.2f; want %.2f", i, got, want)
				}
			}
		}
	}
}
