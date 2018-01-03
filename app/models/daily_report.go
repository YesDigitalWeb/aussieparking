package models

import (
	"log"
	"runtime/debug"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/jinzhu/now"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
	"github.com/theplant/qor-enterprise/promotion"
)

type DailyReport struct {
	Base

	IndoorSetPrice     float64
	OutdoorSetPrice    float64
	UnderCoverSetPrice float64

	IndoorOccupancy     int
	OutdoorOccupancy    int
	UnderCoverOccupancy int

	IndoorBilling     float64
	OutdoorBilling    float64
	UnderCoverBilling float64

	IndoorDropOffRate     float32
	OutdoorDropOffRate    float32
	UnderCoverDropOffRate float32

	DiscountId       uint64
	PromotionBenefit PromotionBenefit `sql:"type:text"`

	Day time.Time `sql:"type:date"`
}

// orderItems should include all items apart from deleted ones
func NewDailyReport(day time.Time, ranges []Range, discounts []promotion.PromotionDiscount, orderItems []OrderItem) (report DailyReport) {
	var (
		indoorOcc, outdoorOcc, underCoverOcc       int
		indoorTotal, outdoorTotal, underCoverTotal int
		dayString                                  = day.Format("2006-01-02")
	)

	// calculate occurrences and total of respective products
	for _, item := range orderItems {
		if item.Day == dayString {
			switch item.ProductId {
			case ProductIndoor.Id:
				if item.IsBooked() {
					report.IndoorBilling += item.Amount()
					indoorOcc++
				}
				indoorTotal++
			case ProductOutdoor.Id:
				if item.IsBooked() {
					report.OutdoorBilling += item.Amount()
					outdoorOcc++
				}
				outdoorTotal++
			case ProductUnderCover.Id:
				if item.IsBooked() {
					report.UnderCoverBilling += item.Amount()
					underCoverOcc++
				}
				underCoverTotal++
			}
		}
	}

	report.Day = now.New(day).BeginningOfDay()
	report.IndoorOccupancy = indoorOcc
	report.OutdoorOccupancy = outdoorOcc
	report.UnderCoverOccupancy = underCoverOcc

	if indoorTotal != 0 {
		report.IndoorDropOffRate = float32(indoorOcc) / float32(indoorTotal) * 100.0
	}
	if outdoorTotal != 0 {
		report.OutdoorDropOffRate = float32(outdoorOcc) / float32(outdoorTotal) * 100.0
	}
	if underCoverTotal != 0 {
		report.UnderCoverDropOffRate = float32(underCoverOcc) / float32(underCoverTotal) * 100.0
	}

	// assign SetPrice
	for _, rp := range getRangeByDate(ranges, day).RangeProducts {
		switch rp.ProductId {
		case ProductIndoor.Id:
			report.IndoorSetPrice = rp.Price
		case ProductOutdoor.Id:
			report.OutdoorSetPrice = rp.Price
		case ProductUnderCover.Id:
			report.UnderCoverSetPrice = rp.Price
		}
	}

	// assign PromotionBenefit
	if benefit := getBenefitByDate(discounts, day); benefit != nil {
		report.PromotionBenefit = *benefit
	}

	return
}

func GetDailyReportsByMonth(date time.Time, parkingType string) (reports []DailyReport, dailyAverageBilling, totalBilling float64, err error) {
	var (
		existedReports []DailyReport
		orderItems     []OrderItem
		ranges         []Range
		discounts      []promotion.PromotionDiscount
		productId      uint64

		beginningOfMonth = now.New(now.New(date).BeginningOfMonth()).BeginningOfDay()
		endOfMonth       = now.New(now.New(date).EndOfMonth()).EndOfDay()
	)

	switch parkingType {
	case Indoor:
		productId = ProductIndoor.Id
	case Outdoor:
		productId = ProductOutdoor.Id
	case UnderCover:
		productId = ProductUnderCover.Id
	}

	if err = db.DB.Where("day >= ? and day <= ?", beginningOfMonth.Format("2006-01-02"), endOfMonth.Format("2006-01-02")).Order("day").Find(&existedReports).Error; err != nil && err != gorm.ErrRecordNotFound {
		debug.PrintStack()
		return
	}

	if endOfMonth.Day() > len(existedReports) {
		scope := db.DB.Where("product_id = ? and day >= ? and day <= ?", productId, beginningOfMonth.Format("2006-01-02"), endOfMonth.Format("2006-01-02")).Order("day")
		if err = scope.Find(&orderItems).Error; err != nil && err != gorm.ErrRecordNotFound {
			debug.PrintStack()
			return
		}
		if ranges, err = FindRanges(beginningOfMonth, endOfMonth); err != nil && err != gorm.ErrRecordNotFound {
			debug.PrintStack()
			return
		}
		if discounts, err = FindDiscounts(beginningOfMonth); err != nil && err != gorm.ErrRecordNotFound {
			debug.PrintStack()
			return
		}
		err = nil // clean gorm.ErrRecordNotFound error
	}

	existedReportsMap := map[string]DailyReport{}
	for _, report := range existedReports {
		existedReportsMap[report.Day.Format("2006-01-02")] = report
	}

	mlen := endOfMonth.Day()
	for i := 0; i < mlen; i++ {
		var (
			day       = beginningOfMonth.Add(time.Hour * 24 * time.Duration(i))
			dayString = day.Format("2006-01-02")
			report    DailyReport
		)
		if r, ok := existedReportsMap[dayString]; ok {
			report = r
		} else {
			report = NewDailyReport(day, ranges, discounts, orderItems)
		}

		switch parkingType {
		case Indoor:
			totalBilling += report.IndoorBilling
		case Outdoor:
			totalBilling += report.OutdoorBilling
		case UnderCover:
			totalBilling += report.UnderCoverBilling
		}
		reports = append(reports, report)
	}

	dailyAverageBilling = totalBilling / float64(mlen)

	return
}

func GenerateDailyReports(date time.Time) (report DailyReport, err error) {
	date = now.New(date).BeginningOfDay()
	day := date.Format("2006-01-02")
	log.Println("start generating daily report", day)
	now := time.Now()
	defer func() {
		took := time.Now().Sub(now).Nanoseconds() / int64(time.Millisecond)
		log.Printf("finished generating daily report (took %dms)\n", took)
	}()

	if err = db.DB.Where("day = ?", date).First(&report).Error; err == nil {
		log.Printf("GenerateDailyReports: report on %s already generated\n", day)
		return
	} else if err != gorm.ErrRecordNotFound {
		log.Println("GenerateDailyReports error:", err)
		return
	}

	ranges, err := FindRanges(date, date)
	if err != nil {
		debug.PrintStack()
		return
	}
	discounts, err := FindDiscounts(date)
	if err != nil && err != gorm.ErrRecordNotFound {
		debug.PrintStack()
		return
	}
	var orderItems []OrderItem
	scope := db.DB.Where("day = ?", day)
	if err = scope.Find(&orderItems).Error; err != nil && err != gorm.ErrRecordNotFound {
		debug.PrintStack()
		return
	}

	report = NewDailyReport(date, ranges, discounts, orderItems)
	err = db.DB.Create(&report).Error

	return
}

func RunGenDailyReportTask() {
	log.Println("start RunGenDailyReportTask")
	date := now.New(time.Now()).EndOfDay()
	duration := date.Sub(time.Now().Add(-10 * time.Second))
	// duration = time.Second * 2
	time.AfterFunc(duration, func() {
		if _, err := GenerateDailyReports(date); err != nil {
			config.ReportError(err)
		}
		go RunGenDailyReportTask()
	})
}
