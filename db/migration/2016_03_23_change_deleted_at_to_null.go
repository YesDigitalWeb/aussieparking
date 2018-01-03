// +build ignore

package main

import (
	"github.com/theplant/aussie/db"
)

func main() {
	sqls := []string{
		`update admin_users set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update benefit_records set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		// `update contact_us set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update daily_reports set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update notes set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update order_items set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update orders set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update products set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update profiles set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update promotion_benefits set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update promotion_coupons set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update promotion_discounts set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update promotion_rules set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		// `update publish_events set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update range_products set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update range_products_draft set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update ranges set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update ranges_draft set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update state_change_logs set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
		`update users set deleted_at = NULL where deleted_at = "0000-00-00 00:00:00"`,
	}
	for _, sql := range sqls {
		if err := db.DB.Exec(sql).Error; err != nil {
			panic(err)
		}
	}
}
