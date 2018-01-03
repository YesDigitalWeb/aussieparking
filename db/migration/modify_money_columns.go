// +build ignore

package main

import (
	"github.com/theplant/aussie/db"
)

func main() {
	// decimal(19,4) DEFAULT 0
	sqls := []string{
		`ALTER TABLE orders MODIFY COLUMN amount decimal(19, 4)`,
		`ALTER TABLE orders MODIFY COLUMN discount_value decimal(19, 4)`,

		`ALTER TABLE range_products MODIFY COLUMN price decimal(19, 4)`,
		`ALTER TABLE range_products MODIFY COLUMN special_price decimal(19, 4)`,

		`ALTER TABLE order_items MODIFY COLUMN price decimal(19, 4)`,
		`ALTER TABLE order_items MODIFY COLUMN special_price decimal(19, 4)`,
	}

	for _, sql := range sqls {
		if err := db.DB.Exec(sql).Error; err != nil {
			panic(err)
		}
	}
}
