package models

import (
	"testing"
	"time"
)

func TestDaysFromOrderBeginning(t *testing.T) {
	cases := []struct {
		item OrderItem
		want int
	}{
		{
			item: OrderItem{Day: "2015-08-22", Order: &Order{From: getTime("2015-08-01")}},
			want: 22,
		},
		{
			item: OrderItem{Day: "2015-08-22", Order: &Order{From: getTime("2015-08-01").Add(time.Hour)}},
			want: 22,
		},
		{
			item: OrderItem{Day: "2015-08-01", Order: &Order{From: getTime("2015-08-01")}},
			want: 1,
		},
		{
			item: OrderItem{Day: "2015-08-01", Order: &Order{From: getTime("2015-08-01").Add(time.Hour * 22)}},
			want: 1,
		},
	}

	for _, c := range cases {
		if got, want := c.item.DaysFromOrderBeginning(), c.want; got != want {
			t.Errorf("c.item.DaysFromOrderBeginning() = %d; want %d", got, want)
		}
	}
}
