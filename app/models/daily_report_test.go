package models

import (
	"reflect"
	"testing"
	"time"

	"github.com/kr/pretty"
	"github.com/qor/transition"
	"github.com/theplant/aussie/db"
)

func TestGetDailyReportsByMonth(t *testing.T) {
	outdoor := ProductOutdoor

	tables := []interface{}{&OrderItem{}, &DailyReport{}}
	for _, table := range tables {
		db.DB.DropTable(table)
		db.DB.CreateTable(table)
	}
	items := []*OrderItem{
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-01", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-01", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-02", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-03", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: outdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},

		&OrderItem{ProductId: outdoor.Id, Price: 20.0, Day: "2014-11-02", Type: Parking, Transition: transition.Transition{State: "cancelled"}},
	}
	for _, item := range items {
		if item.GetState() == "" {
			item.Transition = transition.Transition{State: "confirmed"}
		}
		if err := db.DB.Create(item).Error; err != nil {
			t.Fatal(err)
		}
	}

	existedReport := DailyReport{
		Day:                getTime("2014-11-03"),
		OutdoorSetPrice:    40,
		OutdoorOccupancy:   30,
		OutdoorBilling:     60,
		OutdoorDropOffRate: 20,
	}
	err := db.DB.Create(&existedReport).Error
	if err != nil {
		t.Fatal(err)
	}

	date := getTime("2014-11-11")
	reports, dailyAverageBilling, totalBilling, err := GetDailyReportsByMonth(date, Outdoor)
	if err != nil {
		t.Error(err)
	}

	if expect := 160.00; totalBilling != expect {
		t.Errorf("expect %.2f got %.2f", expect, totalBilling)
	}
	if expect := 160 / 30.0; dailyAverageBilling != expect {
		t.Errorf("expect %.2f got %.2f", expect, dailyAverageBilling)
	}
	for i, report := range reports {
		t.Log("On", report.Day.Format("2006-01-02"))
		var (
			setPrice     float64
			occupancy    int
			dailyBilling float64
			dropOffRate  float32
			benefit      = testBenefit
		)
		switch i {
		case 0:
			setPrice = 10.0
			occupancy = 2
			dailyBilling = 20.0
			dropOffRate = 100.0
		case 1:
			setPrice = 25.0
			occupancy = 1
			dailyBilling = 10.0
			dropOffRate = 50.0
		case 2:
			setPrice = existedReport.OutdoorSetPrice
			occupancy = existedReport.OutdoorOccupancy
			dailyBilling = existedReport.OutdoorBilling
			dropOffRate = 20.0
			benefit = PromotionBenefit{}
		case 3:
			setPrice = 10.0
			occupancy = 7
			dailyBilling = 70.0
			dropOffRate = 100.0
		case 4:
			setPrice = 10.0
			occupancy = 0
			dailyBilling = 0.0
			// dropOffRate = 20.0
		default:
			// Details see range data initialized in price_manager_test.go:init()
			if report.Day.Weekday() == time.Thursday {
				setPrice = 30.0
			} else {
				setPrice = 40.0
			}

			occupancy = 0
			dailyBilling = 0.0
			// dropOffRate = 0.0

			if i >= 19 {
				benefit = PromotionBenefit{}
			}
		}

		if report.OutdoorSetPrice != setPrice {
			// printutils.PrettyPrint(report)
			t.Errorf("SetPrice: got %.2f; expect %.2f", report.OutdoorSetPrice, setPrice)
		}
		if report.OutdoorOccupancy != occupancy {
			t.Errorf("Occupancy: got %d; expect %d", report.OutdoorOccupancy, occupancy)
		}
		if report.OutdoorBilling != dailyBilling {
			t.Errorf("DailyBilling: got %.2f; expect %.2f", report.OutdoorBilling, dailyBilling)
		}
		if report.OutdoorDropOffRate != dropOffRate {
			t.Errorf("DropOffRate: got %.2f; expect %.2f", report.OutdoorDropOffRate, dropOffRate)
		}
		if !reflect.DeepEqual(report.PromotionBenefit, benefit) {
			t.Errorf("PromotionBenefit: got %#  v; expect %#  v", pretty.Formatter(report.PromotionBenefit), pretty.Formatter(benefit))
		}
	}
}

func TestGenerateDailyReports(t *testing.T) {
	tables := []interface{}{&OrderItem{}, &DailyReport{}}
	for _, table := range tables {
		db.DB.DropTable(table)
		db.DB.CreateTable(table)
	}

	items := []*OrderItem{
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-01", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-01", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-02", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-03", Type: Parking},

		&OrderItem{ProductId: ProductIndoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: ProductIndoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: ProductOutdoor.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
		&OrderItem{ProductId: ProductUnderCover.Id, Price: 10.0, Day: "2014-11-04", Type: Parking},
	}
	for _, item := range items {
		if item.GetState() == "" {
			item.Transition = transition.Transition{State: "confirmed"}
		}
		if err := db.DB.Create(item).Error; err != nil {
			t.Fatal(err)
		}
	}

	report, err := GenerateDailyReports(getTime("2014-11-04"))
	if err != nil {
		t.Error(err)
	}

	if report.Id == 0 {
		t.Error("report id shouldn't be 0")
	}
	if report.IndoorSetPrice != 20 {
		t.Errorf("IndoorSetPrice: got %.2f; expect %.2f", report.IndoorSetPrice, 20.0)
	}
	if report.OutdoorSetPrice != 10 {
		t.Errorf("OutdoorSetPrice: got %.2f; expect %.2f", report.OutdoorSetPrice, 10.0)
	}
	if report.UnderCoverSetPrice != 5 {
		t.Errorf("UnderCoverSetPrice: got %.2f; expect %.2f", report.UnderCoverSetPrice, 5.0)
	}
	if report.IndoorOccupancy != 2 {
		t.Errorf("IndoorOccupancy: got %d; expect %d", report.IndoorOccupancy, 2)
	}
	if report.OutdoorOccupancy != 4 {
		t.Errorf("OutdoorOccupancy: got %d; expect %d", report.OutdoorOccupancy, 4)
	}
	if report.UnderCoverOccupancy != 1 {
		t.Errorf("UnderCoverOccupancy: got %d; expect %d", report.UnderCoverOccupancy, 1)
	}
	if report.IndoorBilling != 20 {
		t.Errorf("IndoorBilling: got %.2f; expect %.2f", report.IndoorBilling, 20.0)
	}
	if report.OutdoorBilling != 40 {
		t.Errorf("OutdoorBilling: got %.2f; expect %.2f", report.OutdoorBilling, 40.0)
	}
	if report.UnderCoverBilling != 10 {
		t.Errorf("UnderCoverBilling: got %.2f; expect %.2f", report.UnderCoverBilling, 10.0)
	}
	if got, want := report.PromotionBenefit, testBenefit; !reflect.DeepEqual(got, want) {
		t.Errorf("PromotionBenefit: got %# v; expect %# v", pretty.Formatter(got), pretty.Formatter(want))
	}
}
