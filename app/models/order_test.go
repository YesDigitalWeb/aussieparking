package models

import (
	"testing"
	"time"

	"github.com/theplant/aussie/db"
)

// // Configure MailChimpAPIKey in test.json to enable tests
// func TestSubscribeUserToMailChimp(t *testing.T) {
// 	err := subscribeUserToMailChimp(fmt.Sprintf("Robot+%d@gmail.com", time.Now().UnixNano()))
// 	if err != nil {
// 		t.Error("failed to subscribeUserToMailChimp:", err)
// 	}
// }

func TestOrderUpdate(t *testing.T) {
	cases := []struct {
		state    string
		modified bool
		updated  bool

		// expectOrderAmount tests if PriceManager is using old
		// OrderItem.Amount when recaculate Order.Amount
		expectOrderAmount float64
	}{
		0: {state: OrderStateNew, modified: false, updated: true, expectOrderAmount: 130},
		1: {state: OrderStateNew, modified: true, updated: true, expectOrderAmount: 180},

		2: {state: OrderStateReady, modified: false, updated: true, expectOrderAmount: 130},
		3: {state: OrderStateReady, modified: true, updated: true, expectOrderAmount: 180},

		4: {state: OrderStatePaypalPaid, modified: false, updated: false, expectOrderAmount: 130},
		5: {state: OrderStatePaypalPaid, modified: true, updated: true, expectOrderAmount: 144},

		6: {state: OrderStatePayOnSite, modified: false, updated: false, expectOrderAmount: 130},
		7: {state: OrderStatePayOnSite, modified: true, updated: true, expectOrderAmount: 144},

		8: {state: OrderStateConfirmed, modified: false, updated: false, expectOrderAmount: 130},
		9: {state: OrderStateConfirmed, modified: true, updated: true, expectOrderAmount: 144},

		10: {state: OrderStateCheckIn, modified: false, updated: false, expectOrderAmount: 130},
		11: {state: OrderStateCheckIn, modified: true, updated: true, expectOrderAmount: 144},

		12: {state: OrderStateCheckOut, modified: false, updated: false, expectOrderAmount: 130},
		13: {state: OrderStateCheckOut, modified: true, updated: true, expectOrderAmount: 144},

		14: {state: OrderStateCancelled, modified: false, updated: false, expectOrderAmount: 130},
		15: {state: OrderStateCancelled, modified: true, updated: true, expectOrderAmount: 144},
	}

	for i, c := range cases {
		if skipCase(i) {
			continue
		}

		t.Log("Case", i)
		order := &Order{
			From:               getTime("2014-11-02 16:00"),
			To:                 getTime("2014-11-05 19:00"),
			ParkingProductName: ProductIndoor.Name,
		}
		if err := db.DB.Save(order).Error; err != nil {
			t.Error(err)
		}
		// oldOrder := order
		var oldItem OrderItem
		if err := db.DB.Where("order_id = ?", order.Id).First(&oldItem).Error; err != nil {
			t.Error(err)
		}
		// Tweak order item updated_at so it's easier to find out if order item is updated
		// This is also to test if Order.Amount is updated correctly.
		oldItem.Price = -1
		if err := db.DB.Save(&oldItem).Error; err != nil {
			t.Error(err)
		}
		var oldItemCount int
		if err := db.DB.Table("order_items").Where("order_id = ?", order.Id).Count(&oldItemCount).Error; err != nil {
			t.Error(err)
		}

		order.State = c.state
		if c.modified {
			order.To = getTime("2014-11-06 19:00")
		}
		if err := db.DB.Save(order).Error; err != nil {
			t.Error(err)
		}

		var newItem OrderItem
		if err := db.DB.Where("order_id = ?", order.Id).First(&newItem).Error; err != nil {
			t.Error(err)
		}
		var newItemCount int
		if err := db.DB.Table("order_items").Where("order_id = ?", order.Id).Count(&newItemCount).Error; err != nil {
			t.Error(err)
		}

		updated := (oldItem.Price != newItem.Price) || (oldItemCount != newItemCount)
		if got, want := updated, c.updated; got != want {
			t.Errorf("(state = %s modified = %t) updated = %t; want %t", c.state, c.modified, got, want)
		}
		if got, want := order.Amount, c.expectOrderAmount; got != want {
			t.Errorf("order.Amount = %.4f; want %.4f", got, want)
		}
	}
}

func TestParkingDays(t *testing.T) {
	for i, c := range []struct {
		from, to time.Time
		want     int
	}{
		0: {from: getTime("2015-10-11"), to: getTime("2015-10-11"), want: 1},
		1: {from: getTime("2015-10-11 00:00"), to: getTime("2015-10-11 23:59"), want: 1},
		2: {from: getTime("2015-10-28"), to: getTime("2015-11-11"), want: 15},
		3: {from: getTime("2015-11-20 04:00"), to: getTime("2015-11-27 14:15"), want: 8},
		4: {from: getTime("2015-11-20 00:01"), to: getTime("2015-11-21 23:22"), want: 2},
		5: {from: getTime("2015-12-16 04:15"), to: getTime("2016-01-10 14:30"), want: 26},
		6: {from: getTime("2015-11-06 20:00"), to: getTime("2015-11-10 10:00"), want: 5},
		7: {from: getTime("2015-11-06 20:00"), to: getTime("2015-11-10 21:00"), want: 5},
	} {
		if skipCase(i) {
			continue
		}

		order := Order{From: c.from, To: c.to}
		if got, want := order.ParkingDays(), c.want; got != want {
			t.Errorf("order.ParkingDays(from: %s, to: %s) = %d; want %d", c.from, c.to, got, want)
		}
	}
}
