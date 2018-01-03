package controllers_test

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/bom-d-van/sidekick"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
)

func TestBook(t *testing.T) {
	cases := []struct {
		payType             string
		expectState         string
		expectAmount        float64
		expectDiscountValue float64
	}{
		0: {
			payType:             models.PaymentTypePaypal,
			expectState:         models.OrderStatePaypalPaid,
			expectAmount:        76.5,
			expectDiscountValue: -8.5,
		},
		1: {
			payType:             models.PaymentTypeOnSite,
			expectState:         models.OrderStatePayOnSite,
			expectAmount:        85,
			expectDiscountValue: 0,
		},
		2: {
			payType:             "failed paypal",
			expectState:         models.OrderStateReady,
			expectAmount:        85,
			expectDiscountValue: 0,
		},
	}
	for _, c := range cases {
		resetDB()

		client := getFrontEndClient()
		submitOrder(t, &client)

		switch c.payType {
		case models.PaymentTypeOnSite:
			if _, err := client.Post(server.URL+"/order/pay_on_site", "application/json", nil); err != nil {
				t.Error(err)
			}
		case models.PaymentTypePaypal:
			if _, err := client.Post(server.URL+"/order/pay_with_paypal", "application/json", strings.NewReader(`{
				"Name":   "Mr Tester",
				"Number": "4012888888881881",
				"Month":  "07",
				"Year":   "19",
				"CVV2":   "010"
			}`)); err != nil {
				t.Error(err)
			}
		case "failed paypal":
			if resp, err := client.Post(server.URL+"/order/pay_with_paypal", "application/json", strings.NewReader(`{
				"Name":   "Mr Tester",
				"Number": "1111111111111111",
				"Month":  "07",
				"Year":   "19",
				"CVV2":   "010"
			}`)); err != nil {
				t.Error(err)
			} else {
				if got, want := resp.Status, "406 Not Acceptable"; got != want {
					t.Errorf("resp.Status = %s; want %s", got, want)
				}
			}
		}

		var order models.Order
		if err := db.DB.First(&order).Error; err != nil {
			t.Fatal(err)
		}

		if got, want := order.State, c.expectState; got != want {
			t.Errorf("order.State = %s; want %s", got, want)
		}
		if got, want := order.Amount, c.expectAmount; got != want {
			t.Errorf("order.Amount = %.4f; want %.4f", got, want)
		}
		if got, want := order.DiscountValue, c.expectDiscountValue; got != want {
			t.Errorf("order.DiscountValue = %.4f; want %.4f", got, want)
		}
	}
}

func TestChangeBooking(t *testing.T) {
	resetDB()
	client := getFrontEndClient()
	submitOrder(t, &client)

	var readyOrder models.Order
	if err := db.DB.First(&readyOrder).Error; err != nil {
		t.Fatal(err)
	}
	if got, want := readyOrder.State, models.OrderStateReady; got != want {
		t.Errorf("readyOrder.State = %s; want %s", got, want)
	}

	if _, err := client.Post(server.URL+"/order/change_booking", "application/json", nil); err != nil {
		t.Error(err)
	}

	var newOrder models.Order
	if err := db.DB.First(&newOrder).Error; err != nil {
		t.Fatal(err)
	}
	if got, want := newOrder.State, models.OrderStateNew; got != want {
		t.Errorf("newOrder.State = %s; want %s", got, want)
	}
}

func submitOrder(t *testing.T, client *http.Client) {
	from, to := time.Now().Add(time.Hour*24).Format("2006-01-02"), time.Now().Add(time.Hour*24*4).Format("2006-01-02")

	if resp, err := client.Post(server.URL+"/order", "application/json", strings.NewReader(fmt.Sprintf(`{
		"ParkingProductName": "indoor",
		"From":               "%s 05:45",
		"To":                 "%s 10:15"
	}`, from, to))); err != nil {
		t.Error(err)
	} else if resp.StatusCode != 202 {
		body, _ := ioutil.ReadAll(resp.Body)
		t.Errorf("%s", body)
	}

	if resp, err := client.Post(server.URL+"/order?with_profile=true", "application/json", strings.NewReader(fmt.Sprintf(`{
		"From":                 "%s 05:45",
		"To":                   "%s 10:15",
		"ParkingProductName":   "indoor",
		"Profile.FirstName":    "Rhoda",
		"Profile.LastName":     "Williamson",
		"Profile.Phone":        "+375-81-3209440",
		"User.Email":           "juxuryjem@yahoo.com",
		"PeopleNum":            "1",
		"State":                "paypal_paid",
		"ReturnFlight":         "Voluptate mollit",
		"Note":                 "Voluptatem, porro magnam.",
		"CarRego":              "Dolor",
		"CarMake":              "Amet",
		"CarModel":             "Adipisicing ipsam",
		"SubscribeToMailChimp": "true"
	}`, from, to))); err != nil {
		t.Error(err)
	} else if resp.StatusCode != 202 {
		body, _ := ioutil.ReadAll(resp.Body)
		t.Errorf("%s", body)
	}

	// Make sure state is impossible to changed by random json input
	var order models.Order
	if err := db.DB.First(&order).Error; err != nil {
		t.Fatal(err)
	}
	if got, want := order.State, models.OrderStateNew; got != want {
		t.Errorf("order.State = %s; want %s", got, want)
	}

	if resp, err := client.Post(server.URL+"/order", "application/json", strings.NewReader(`{"CleanProductId":"4"}`)); err != nil {
		t.Error(err)
	} else if resp.StatusCode != 202 {
		body, _ := ioutil.ReadAll(resp.Body)
		t.Errorf("%s", body)
	}

	if _, err := client.Post(server.URL+"/order/confirm", "application/json", nil); err != nil {
		t.Error(err)
	}
}

func TestSubmitOrder(t *testing.T) {
	resetDB()
	client := getFrontEndClient()
	submitOrder(t, &client)
	var order models.Order
	if err := db.DB.Last(&order).Error; err != nil {
		t.Error(err)
	}
	// boolean in qor Decode is broken every once in a while, so add test to
	// make sure it's always working
	if got, want := order.SubscribeToMailChimp, true; got != want {
		t.Errorf("order.SubscribeToMailChimp = %t; want %t", got, want)
	}
}

func TestCreateAdminOrder(t *testing.T) {
	resetDB()
	client := getLoggedInClient()

	from, to := time.Now().Add(time.Hour*24).Format("2006-01-02"), time.Now().Add(time.Hour*24*4).Format("2006-01-02")
	if resp, err := client.Post(server.URL+"/admin/orders", "application/json", strings.NewReader(fmt.Sprintf(`{
		"State":              "confirmed",
		"PaymentType":        "On Site",
		"From":               "%s 05:15",
		"To":                 "%s 06:30",
		"PeopleNum":          "1",
		"CleanProductId":     "4",
		"ParkingProductName": "indoor",
		"Profile.FirstName":  "Bryar",
		"Profile.LastName":   "Tanner",
		"Profile.Phone":      "+482-26-3163449",
		"User.Email":         "pyxohyjid@gmail.com",
		"Note":               "Dolorem no",
		"ReturnFlight":       "Quae optio",
		"CarMake":            "Neque dolo",
		"CarModel":           "Aut evenie",
		"CarRego":            "Aute non a"
	}`, from, to))); err != nil {
		t.Error(err)
	} else if got, want := resp.StatusCode, http.StatusOK; got != want {
		t.Errorf("resp.StatusCode = %d; want %d", got, want)
		body, _ := ioutil.ReadAll(resp.Body)
		t.Errorf("resp.Body = %s", body)
	}

	var order models.Order
	if err := db.DB.First(&order).Error; err != nil {
		t.Error(err)
	}
	if got, want := order.DiscountId, uint(1); got != want {
		t.Errorf("order.DiscountId = %d; want %d", got, want)
	}
	if got, want := order.State, models.OrderStateConfirmed; got != want {
		t.Errorf("order.State = %s; want %s", got, want)
	}
	if got, want := order.PaymentType, models.PaymentTypeOnSite; got != want {
		t.Errorf("order.PaymentType = %s; want %s", got, want)
	}
}

func TestCreateAdminNote(t *testing.T) {
	resetDB()
	client := getLoggedInClient()

	order := models.Order{
		From:               time.Now().Add(time.Hour * 24),
		To:                 time.Now().Add(time.Hour * 24 * 4),
		ParkingProductName: "indoor",
		DiscountValue:      -7,
	}
	if err := db.DB.Create(&order).Error; err != nil {
		t.Error(err)
	}

	if resp, err := client.Post(server.URL+"/admin/notes", "application/json", strings.NewReader(fmt.Sprintf(`{
		"OrderId":       "%d",
		"ChangedAmount": "-10",
		"Note":          ""
	}`, order.Id))); err != nil {
		t.Error(err)
	} else if got, want := resp.StatusCode, http.StatusOK; got != want {
		t.Errorf("resp.StatusCode = %d; want %d", got, want)
		body, _ := ioutil.ReadAll(resp.Body)
		t.Errorf("resp.Body = %s", body)
	}

	var updatedOrder models.Order
	if err := db.DB.Find(&updatedOrder, order.Id).Error; err != nil {
		t.Error(err)
	}
	if got, want := order.Amount-updatedOrder.Amount, 10.0; got != want {
		t.Errorf("order.Amount - updatedOrder.Amount = %.4f; want %.4f", got, want)
	}
	if got, want := updatedOrder.DiscountValue, -17.0; got != want {
		t.Errorf("updatedOrder.DiscountValue = %.4f; want %.4f", got, want)
	}
}

func TestDefualtAdminPage(t *testing.T) {
	resetDB()
	client := getLoggedInClient()
	resp, err := client.Get(server.URL + "/admin")
	if err != nil {
		t.Error(err)
	} else if got, want := resp.Request.URL.Path, "/admin/orders"; got != want {
		t.Errorf("resp.Request.URL.Path = %s; want %s", got, want)
	}
}

// TestAdminAccessIsNormal makes sure that qor update doesn't create panics in admin pages
// In order to use views/qor/layout.tmpl in our project, we need to specify
// WEB_ROOT here to enable the test:
// 		WEB_ROOT=$GOPATH/src/github.com/theplant/aussie go test
func TestAdminAccessIsNormal(t *testing.T) {
	if os.Getenv("WEB_ROOT") == "" {
		return
	}

	resetDB()
	client := getLoggedInClient()
	for i, c := range []struct {
		url string
	}{
		0: {url: "/admin/calendar"},
		1: {url: "/admin/order"},
		2: {url: "/admin/orders"},
		3: {url: "/admin/admin_users"},
	} {
		if sidekick.SkipCase(i) {
			continue
		}
		if resp, err := client.Get(server.URL + c.url); err != nil {
			t.Error(err)
		} else if got, want := resp.StatusCode, http.StatusOK; got != want {
			t.Errorf("resp.StatusCode = %d; want %d", got, want)
		}
	}
}

func TestOrderActions(t *testing.T) {
	actions := []string{
		"cancel",
	}
	for _, action := range actions {
		resetDB()
		client := getLoggedInClient()
		submitOrder(t, &client)
		if _, err := client.Post(server.URL+"/order/pay_on_site", "application/json", nil); err != nil {
			t.Error(err)
		}

		var order models.Order
		if err := db.DB.First(&order).Error; err != nil {
			t.Fatal(err)
		}

		req, err := http.NewRequest(
			"PUT",
			server.URL+"/admin/orders/"+action,
			strings.NewReader(url.Values{
				"primary_values[]": {fmt.Sprintf("%v", order.Id)},
			}.Encode()),
		)
		if err != nil {
			t.Error(err)
		}
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
		req.Header.Set("Accept", "application/json")
		if resp, err := client.Do(req); err != nil {
			t.Error(err)
		} else if got, want := resp.StatusCode, 200; got != want {
			t.Errorf("resp.StatusCode = %d; want %d", got, want)
		}

		var newOrder models.Order
		if err := db.DB.First(&newOrder).Error; err != nil {
			t.Fatal(err)
		}
		if got, want := newOrder.State, models.OrderStateCancelled; got != want {
			t.Errorf("newOrder.State = %s; want %s", got, want)
		}
	}
}
