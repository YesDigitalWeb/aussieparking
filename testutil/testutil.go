package testutil

import (
	"flag"

	"github.com/bom-d-van/sidekick"
	"github.com/qor/transition"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
	"github.com/theplant/qor-enterprise/promotion"
)

func init() {
	flag.Parse()
	db.DB.LogMode(sidekick.Debug)
}

func ResetDB() {
	tables := []interface{}{
		&models.RangeProduct{},
		&models.Range{},

		&transition.StateChangeLog{},
		&promotion.PromotionDiscount{},
		&promotion.PromotionRule{},
		&promotion.PromotionBenefit{},
		&promotion.BenefitRecord{},
	}
	for _, t := range tables {
		if err := db.DB.DropTableIfExists(t).CreateTable(t).Error; err != nil {
			panic(err)
		}
	}
	// if err := db.DB.Exec("delete from range_products_draft").Error; err != nil {
	// 	panic(err)
	// }
	// if err := db.DB.Exec("delete from ranges_draft").Error; err != nil {
	// 	panic(err)
	// }
}
