package models

import (
	"testing"

	"github.com/theplant/aussie/db"
)

func TestSaveNote(t *testing.T) {
	for _, c := range []struct {
		note          Note
		amount        float64
		discountValue float64
	}{
		{
			note:          Note{ChangedAmount: 10},
			amount:        133,
			discountValue: 3,
		},
		{
			note:          Note{ChangedAmount: -10},
			amount:        113,
			discountValue: -17,
		},
	} {
		order := Order{
			From:               getTime("2014-11-02 16:00"),
			To:                 getTime("2014-11-05 19:00"),
			ParkingProductName: ProductIndoor.Name,
			DiscountValue:      -7,
		}
		if err := db.DB.Create(&order).Error; err != nil {
			t.Error(err)
		}

		c.note.OrderId = order.Id
		if err := db.DB.Save(&c.note).Error; err != nil {
			t.Error(err)
		}

		var updatedOrder Order
		if err := db.DB.Find(&updatedOrder, order.Id).Error; err != nil {
			t.Error(err)
		}
		if got, want := updatedOrder.Amount, c.amount; got != want {
			t.Errorf("updatedOrder.Amount = %.4f; want %.4f", got, want)
		}
		if got, want := updatedOrder.DiscountValue, c.discountValue; got != want {
			t.Errorf("updatedOrder.DiscountValue = %.4f; want %.4f", got, want)
		}
	}
}
