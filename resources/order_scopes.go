package resources

import (
	"time"

	"github.com/jinzhu/gorm"
	"github.com/jinzhu/now"
	"github.com/qor/qor"
	"github.com/theplant/aussie/app/models"
)

// should not use context in checkInOutTodayOrders.
// order.FindManyHandler pass an nil context to this function.
func checkInOutTodayOrders(db *gorm.DB, context *qor.Context) *gorm.DB {
	today := now.New(time.Now())
	return db.Scopes(During(today.BeginningOfDay(), today.EndOfDay(), "all")).Or(
		"state in (?) AND `from` < ?",
		[]string{models.OrderStateConfirmed, models.OrderStatePaypalPaid},
		today.BeginningOfDay(),
	).Or(
		"state = ? AND `to` <= ?",
		models.OrderStateCheckIn,
		today.EndOfDay(),
	)
}

func internalCarDetailingOrders(db *gorm.DB, context *qor.Context) *gorm.DB {
	today := now.New(time.Now())
	tomorrow := now.New(time.Now().Add(24 * time.Hour))
	return db.Where(
		"((`to` >= ? AND `to` <= ? AND cleaning = ?) OR cleaned_at = ?) AND clean_product_id in (?) AND state != ?",
		today.BeginningOfDay(),
		tomorrow.EndOfDay(),
		models.CleanStatePending,
		time.Now().Format("2006-01-02"),
		// []uint64{models.NoWorries4WDClean.Id, models.NoWorriesSedanClean.Id, models.Bonza4WDClean.Id, models.BonzaSedanClean.Id},
		[]uint64{models.NoWorries4WDClean.Id, models.NoWorriesSedanClean.Id},
		"pay_on_site",
	).Order("cleaning desc")
}

func outsourcedCarDetailingOrders(db *gorm.DB, context *qor.Context) *gorm.DB {
	today := now.New(time.Now())
	tomorrow := now.New(time.Now().Add(24 * time.Hour))
	now := time.Now().Format("2006-01-02")
	return db.Where(
		"((`to` >= ? AND `to` <= ? AND cleaning = ?) OR cleaning = ? OR ordered_at = ? OR cleaned_at = ?) AND clean_product_id in (?) AND state != (?)",
		today.BeginningOfDay(),
		tomorrow.EndOfDay(),
		models.CleanStateOrdered,
		models.CleanStatePending,
		now,
		now,
		[]uint64{models.Bonza4WDClean.Id, models.BonzaSedanClean.Id},
		"pay_on_site",
	).Order("cleaning desc, `to`")
}

func unconfirmedDueTomorrowOrders(db *gorm.DB, context *qor.Context) *gorm.DB {
	tomorrow := now.New(time.Now().Add(24 * time.Hour))
	return db.Scopes(During(tomorrow.BeginningOfDay(), tomorrow.EndOfDay(), "all")).
		Where("state IN (?)", []string{"pay_on_site", "confirmed"}).
		Order("state desc")
}
