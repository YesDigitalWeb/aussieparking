package models

import (
	"sort"
	"strings"
)

type ordersByCheckInOutTime []*Order

func (os ordersByCheckInOutTime) Len() int      { return len(os) }
func (os ordersByCheckInOutTime) Swap(i, j int) { os[i], os[j] = os[j], os[i] }
func (os ordersByCheckInOutTime) Less(i, j int) bool {
	_, itime, _ := os[i].CheckInOutRaw("time")
	_, jtime, _ := os[j].CheckInOutRaw("time")
	return itime.Before(jtime)
}

// SortOrdersForCheckInsOutsToday sinks checked in/out orders to the bottom of
// the list.
func SortOrdersForCheckInsOutsToday(orders []*Order) {
	sort.Sort(ordersByCheckInOutTime(orders))

	// sink checked-in/outs
	var ups, downs []*Order
	for _, o := range orders {
		if strings.HasPrefix(o.InOut(), "Checked") {
			downs = append(downs, o)
			continue
		}

		ups = append(ups, o)
	}

	for i, o := range append(ups, downs...) {
		orders[i] = o
	}
	return
}

type ordersByDate struct {
	orders []*Order
	date   string
}

func (os ordersByDate) Len() int      { return len(os.orders) }
func (os ordersByDate) Swap(i, j int) { os.orders[i], os.orders[j] = os.orders[j], os.orders[i] }
func (os ordersByDate) Less(i, j int) bool {
	itime := os.orders[i].BookingListInOut("time", os.date)
	jtime := os.orders[j].BookingListInOut("time", os.date)
	return itime < jtime
}

func SortOrdersForBookingList(orders []*Order, date string) {
	sort.Sort(ordersByDate{orders: orders, date: date})
}
