package controllers_test

import (
	"fmt"
	"net/http"
	"net/http/cookiejar"
	"net/http/httptest"
	"net/url"
	"os"
	"reflect"
	"testing"
	"time"

	"github.com/kr/pretty"
	"github.com/theplant/qor-enterprise/promotion"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config/routes"
	"github.com/theplant/aussie/db"
	"github.com/theplant/aussie/testutil"
)

var server *httptest.Server

func init() {
	mux := routes.Mux()
	server = httptest.NewServer(mux)
}

func resetDB() {
	testutil.ResetDB()
	if err := db.DB.DropTableIfExists(&models.Order{}).CreateTable(&models.Order{}).Error; err != nil {
		panic(err)
	}

	ranges := []models.Range{
		// A range starts 10 days from now and end 30 days later
		{
			Start:            time.Now().Add(-10 * time.Hour * 24),
			End:              time.Now().Add(30 * time.Hour * 24),
			Weekdays:         []int{0, 1, 2, 3, 4, 5, 6},
			SpecialTimeSince: time.Now().Add(3 * time.Hour).Format("15:04"),
			RangeProducts: []models.RangeProduct{
				{ProductId: models.ProductIndoor.Id, Price: 80, SpecialPrice: 20},
				{ProductId: models.ProductUnderCover.Id, Price: 5},
				{ProductId: models.ProductOutdoor.Id, Price: 40},

				{ProductId: models.AllCleanProducts[0].Id, Price: 5},
				{ProductId: models.AllCleanProducts[1].Id, Price: 5},
				{ProductId: models.AllCleanProducts[2].Id, Price: 5},
				{ProductId: models.AllCleanProducts[3].Id, Price: 5},
			},
		},

		// A range starts 5 days from now and end 5 days later
		{
			Start:            time.Now().Add(-5 * time.Hour * 24),
			End:              time.Now().Add(5 * time.Hour * 24),
			Weekdays:         []int{0, 1, 2, 3, 4, 5, 6},
			SpecialTimeSince: "18:00",
			RangeProducts: []models.RangeProduct{
				{ProductId: models.ProductIndoor.Id, Price: 20, SpecialPrice: 10},
				{ProductId: models.ProductUnderCover.Id, Price: 5},
				{ProductId: models.ProductOutdoor.Id, Price: 10},

				{ProductId: models.AllCleanProducts[0].Id, Price: 5},
				{ProductId: models.AllCleanProducts[1].Id, Price: 5},
				{ProductId: models.AllCleanProducts[2].Id, Price: 5},
				{ProductId: models.AllCleanProducts[3].Id, Price: 5},
			},
		},
	}

	for i, _ := range ranges {
		r := ranges[i]
		if err := db.DB.Create(&r).Error; err != nil {
			fmt.Println("db rollback test", err)
			os.Exit(1)
		}
	}

	if _, err := models.CreateDiscount(
		models.PromotionRule{
			Start:    "2014-10-01",
			End:      time.Now().Add(time.Hour * 24).Format("2006-01-02"),
			Weekdays: models.Weekdays{0, 1, 2, 3, 4, 5, 6},
		},
		models.PromotionBenefit{
			Discounts: []models.Discount{
				{
					Days: 5,
					Products: []models.ProductDiscount{
						{ProductId: models.AllParkingProducts[0].Id, Discount: 10},
						{ProductId: models.AllParkingProducts[1].Id, Discount: 20},
						{ProductId: models.AllParkingProducts[2].Id, Discount: 30},
					},
				},
				{
					Days: 10,
					Products: []models.ProductDiscount{
						{ProductId: models.AllParkingProducts[0].Id, Discount: 20},
						{ProductId: models.AllParkingProducts[1].Id, Discount: 30},
						{ProductId: models.AllParkingProducts[2].Id, Discount: 40},
					},
				},
				{
					Days: 20,
					Products: []models.ProductDiscount{
						{ProductId: models.AllParkingProducts[0].Id, Discount: 30},
						{ProductId: models.AllParkingProducts[1].Id, Discount: 40},
						{ProductId: models.AllParkingProducts[2].Id, Discount: 50},
					},
				},
			},
		},
	); err != nil {
		panic(err)
	}
}

func getLoggedInClient() http.Client {
	var client http.Client
	jar, err := cookiejar.New(nil)
	if err != nil {
		panic(err)
	}
	client.Jar = jar
	_, err = client.PostForm(server.URL+"/admin_login", url.Values{
		"Email":    {"admin@aussieparking.com.au"},
		"Password": {"test"},
	})
	if err != nil {
		panic(err)
	}
	return client
}

func getFrontEndClient() http.Client {
	var client http.Client
	jar, err := cookiejar.New(nil)
	if err != nil {
		panic(err)
	}
	client.Jar = jar
	return client
}

// TODO: complete this test
func TestCreateRanges(t *testing.T) {
	type price struct{ price, special float64 }
	type expectRange struct {
		// start, end time.Time
		prices []price
	}
	var cases = []struct {
		values       url.Values
		expectRanges []expectRange
	}{
		// Case 0 and 1 are for default range value assignment
		0: {
			values: url.Values{
				"Start":    {time.Now().Format("2006-01-02")},
				"End":      {time.Now().Add(time.Hour * 24 * 10).Format("2006-01-02")},
				"weekdays": {"1", "2", "3", "4", "5"},

				// Parking products
				"RangeProducts.0.ProductId": {"1"},
				"RangeProducts.0.Price":     {""},
				"RangeProducts.1.ProductId": {"2"},
				"RangeProducts.1.Price":     {""},
				"RangeProducts.2.ProductId": {"3"},
				"RangeProducts.2.Price":     {""},

				// Special time
				"SpecialRateChecked":           {""},
				"SpecialTimeSince":             {"22:22"},
				"RangeProducts.0.SpecialPrice": {"11"},
				"RangeProducts.1.SpecialPrice": {"12"},
				"RangeProducts.2.SpecialPrice": {"13"},

				// Clean products
				"RangeProducts.3.ProductId": {"4"},
				"RangeProducts.3.Price":     {""},
				"RangeProducts.4.ProductId": {"5"},
				"RangeProducts.4.Price":     {""},
				"RangeProducts.5.ProductId": {"6"},
				"RangeProducts.5.Price":     {""},
				"RangeProducts.6.ProductId": {"7"},
				"RangeProducts.6.Price":     {""},
			},
			expectRanges: []expectRange{
				{
					// start: time.Now(),
					// end:   time.Now(),
					prices: []price{
						{price: 80, special: 20},
						{price: 5, special: 0},
						{price: 40, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
					},
				},
				{
					// start: time.Now(),
					// end:   time.Now(),
					prices: []price{
						{price: 20, special: 10},
						{price: 5, special: 0},
						{price: 10, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
					},
				},
			},
		},
		1: {
			values: url.Values{
				"Start":    {time.Now().Format("2006-01-02")},
				"End":      {time.Now().Add(time.Hour * 24 * 10).Format("2006-01-02")},
				"weekdays": {"1", "2", "3", "4", "5"},

				// Parking products
				"RangeProducts.0.ProductId": {"1"},
				"RangeProducts.0.Price":     {""},
				"RangeProducts.1.ProductId": {"2"},
				"RangeProducts.1.Price":     {""},
				"RangeProducts.2.ProductId": {"3"},
				"RangeProducts.2.Price":     {""},

				// Special time
				"SpecialRateChecked":           {"true"},
				"SpecialTimeSince":             {"22:22"},
				"RangeProducts.0.SpecialPrice": {"11"},
				"RangeProducts.1.SpecialPrice": {"12"},
				"RangeProducts.2.SpecialPrice": {"13"},

				// Clean products
				"RangeProducts.3.ProductId": {"4"},
				"RangeProducts.3.Price":     {""},
				"RangeProducts.4.ProductId": {"5"},
				"RangeProducts.4.Price":     {""},
				"RangeProducts.5.ProductId": {"6"},
				"RangeProducts.5.Price":     {""},
				"RangeProducts.6.ProductId": {"7"},
				"RangeProducts.6.Price":     {""},
			},
			expectRanges: []expectRange{
				{
					// start: time.Now(),
					// end:   time.Now(),
					prices: []price{
						{price: 80, special: 11},
						{price: 5, special: 12},
						{price: 40, special: 13},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
					},
				},
				{
					// start: time.Now(),
					// end:   time.Now(),
					prices: []price{
						{price: 20, special: 11},
						{price: 5, special: 12},
						{price: 10, special: 13},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
						{price: 5, special: 0},
					},
				},
			},
		},
	}

	client := getLoggedInClient()
	for _, c := range cases {
		resetDB()

		// Try to create a range from now to 10 days later with nil values
		if _, err := client.PostForm(server.URL+"/admin/range", c.values); err != nil {
			t.Error(err)
		}

		var ranges []models.Range
		if err := db.DraftDB.Preload("RangeProducts.Product").Order("id desc").Limit(2).Find(&ranges).Error; err != nil {
			t.Error(err)
		}

		for i, r := range ranges {
			for j, rp := range r.RangeProducts {
				if rp.Price != c.expectRanges[i].prices[j].price {
					t.Errorf("New Range %d (%d) Product(% 13s).Price = %.2f; want %.2f", i, r.Id, rp.Product.Name, rp.Price, c.expectRanges[i].prices[j].price)
				}
				if rp.SpecialPrice != c.expectRanges[i].prices[j].special {
					t.Errorf("New Range %d (%d) Product(% 13s).SpecialPrice = %.2f; want %.2f", i, r.Id, rp.Product.Name, rp.SpecialPrice, c.expectRanges[i].prices[j].special)
				}
			}
		}
	}
}

func TestCreateDiscount(t *testing.T) {
	type wantd struct {
		discount promotion.PromotionDiscount
		rule     models.PromotionRule
		benefit  models.PromotionBenefit
	}
	var cases = []struct {
		input url.Values
		want  wantd
	}{
		0: {
			input: url.Values{
				"Start":    {"2015-08-26"},
				"End":      {"2015-08-31"},
				"weekdays": {"6", "5", "4", "3", "2", "1"},

				"Discounts.0.Days":                 {"5"},
				"Discounts.0.Products.0.ProductId": {"1"},
				"Discounts.0.Products.0.Discount":  {"10"},
				"Discounts.0.Products.1.ProductId": {"2"},
				"Discounts.0.Products.1.Discount":  {"20"},
				"Discounts.0.Products.2.ProductId": {"3"},
				"Discounts.0.Products.2.Discount":  {"30"},

				"Discounts.1.Days":                 {"10"},
				"Discounts.1.Products.0.ProductId": {"1"},
				"Discounts.1.Products.0.Discount":  {"20"},
				"Discounts.1.Products.1.ProductId": {"2"},
				"Discounts.1.Products.1.Discount":  {"30"},
				"Discounts.1.Products.2.ProductId": {"3"},
				"Discounts.1.Products.2.Discount":  {"40"},

				"Discounts.2.Days":                 {"20"},
				"Discounts.2.Products.0.ProductId": {"1"},
				"Discounts.2.Products.0.Discount":  {"30"},
				"Discounts.2.Products.1.ProductId": {"2"},
				"Discounts.2.Products.1.Discount":  {"40"},
				"Discounts.2.Products.2.ProductId": {"3"},
				"Discounts.2.Products.2.Discount":  {"50"},
			},
			want: wantd{
				discount: promotion.PromotionDiscount{},
				rule: models.PromotionRule{
					Start:    "2015-08-26",
					End:      "2015-08-31",
					Weekdays: models.Weekdays{6, 5, 4, 3, 2, 1},
				},
				benefit: models.PromotionBenefit{
					Discounts: []models.Discount{
						{
							Days: 5,
							Products: []models.ProductDiscount{
								{ProductId: models.AllParkingProducts[0].Id, Discount: 10},
								{ProductId: models.AllParkingProducts[1].Id, Discount: 20},
								{ProductId: models.AllParkingProducts[2].Id, Discount: 30},
							},
						},
						{
							Days: 10,
							Products: []models.ProductDiscount{
								{ProductId: models.AllParkingProducts[0].Id, Discount: 20},
								{ProductId: models.AllParkingProducts[1].Id, Discount: 30},
								{ProductId: models.AllParkingProducts[2].Id, Discount: 40},
							},
						},
						{
							Days: 20,
							Products: []models.ProductDiscount{
								{ProductId: models.AllParkingProducts[0].Id, Discount: 30},
								{ProductId: models.AllParkingProducts[1].Id, Discount: 40},
								{ProductId: models.AllParkingProducts[2].Id, Discount: 50},
							},
						},
					},
				},
			},
		},
	}

	client := getLoggedInClient()
	for _, c := range cases {
		testutil.ResetDB()
		if _, err := client.PostForm(server.URL+"/admin/discount", c.input); err != nil {
			t.Error(err)
		}
		var got promotion.PromotionDiscount
		if err := db.DB.Preload("Rules").Preload("Benefits").Find(&got).Error; err != nil {
			t.Fatal(err)
		}
		if got, want := models.ToModelRule(got.Rules[0]), &c.want.rule; !reflect.DeepEqual(got, want) {
			t.Errorf("Rule = %#  v; want %#  v", pretty.Formatter(got), pretty.Formatter(want))
		}
		if got, want := models.ToModelBenefit(got.Benefits[0]), &c.want.benefit; !reflect.DeepEqual(got, want) {
			t.Errorf("got = %#  v; want %#  v", pretty.Formatter(got), pretty.Formatter(want))
		}
	}
}
