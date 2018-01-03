package db

import (
	"fmt"

	"github.com/qor/media_library"

	"github.com/theplant/qor-enterprise/promotion"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/theplant/aussie/config"
)

var DB *gorm.DB
var DraftDB *gorm.DB

func init() {
	var arg = fmt.Sprintf(
		"%s:%s@%s/%s?strict=false&charset=utf8&parseTime=True&loc=Local",
		config.Cfg.DB.User,
		config.Cfg.DB.Password,
		config.Cfg.DB.Host,
		config.Cfg.DB.Name,
	)

	var err error
	if DB, err = gorm.Open("mysql", arg); err != nil {
		panic(fmt.Sprintf("Can't initalize database: %v", err.Error()))
	}
	DB.LogMode(true)

	// for fixing gorm model dependency bug
	promotion.AutoMigrate(DB)

	media_library.RegisterCallbacks(DB)
}
