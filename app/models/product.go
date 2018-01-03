package models

import (
	"errors"
	"fmt"
	"github.com/theplant/aussie/config"

	"github.com/jinzhu/gorm"
	"github.com/theplant/aussie/db"
)

const (
	Clean   = "clean"
	Parking = "parking"

	// parking types
	Indoor     = "indoor"
	Outdoor    = "outdoor"
	UnderCover = "under cover"

	// clean types
	CarTypeSedan       = "Sedan"
	CarType4WD         = "4WD"
	CleanTypeNoWorries = "no worries"
	CleanTypeBonza     = "bonza"
	// CleanTypeHolyMackerel = "holy mackerel" // Abandoned

	// clean states
	CleanStatePending = "pending"
	CleanStateCleaned = "cleaned"
	CleanStateOrdered = "ordered"
)

var (
	ErrProductExisted = errors.New("product existed")

	AllParkingTypes                                  = []string{Indoor, UnderCover, Outdoor}
	AllParkingProducts                               []*Product
	ProductIndoor, ProductOutdoor, ProductUnderCover *Product

	AllCleanProducts    []*Product
	AllCleanProductsMap map[string]map[string]*Product
	AllCarTypes         = []string{CarTypeSedan, CarType4WD}
	// AllCleanTypes       = []string{CleanTypeNoWorries, CleanTypeBonza, CleanTypeHolyMackerel}
	AllCleanTypes = []string{CleanTypeNoWorries, CleanTypeBonza}

	NoWorriesSedanClean, BonzaSedanClean *Product // HolyMackerelSedanClean
	NoWorries4WDClean, Bonza4WDClean     *Product // HolyMackerel4WDClean

	ProductNameLabels = map[string]string{
		Indoor:     "Indoor",
		Outdoor:    "Outdoor",
		UnderCover: "Under Cover",
	}
)

func init() {
	if err := db.DB.Where("type = ?", Parking).Find(&AllParkingProducts).Error; err != nil {
		fmt.Println("Init Parking Products:", err)
		config.ReportError(err)
	}

	for _, p := range AllParkingProducts {
		switch p.Name {
		case Indoor:
			ProductIndoor = p
		case Outdoor:
			ProductOutdoor = p
		case UnderCover:
			ProductUnderCover = p
		}
	}

	var cleanProducts []*Product
	if err := db.DB.Where("type = ?", Clean).Find(&cleanProducts).Error; err != nil {
		fmt.Println("Init Clean Products:", err)
		config.ReportError(err)
	}

	AllCleanProductsMap = map[string]map[string]*Product{
		CarTypeSedan: map[string]*Product{},
		CarType4WD:   map[string]*Product{},
	}
	for _, p := range cleanProducts {
		AllCleanProductsMap[p.CarType][p.Name] = p
	}
	for _, car := range AllCarTypes {
		for _, clean := range AllCleanTypes {
			p, ok := AllCleanProductsMap[car][clean]
			if !ok {
				continue
			}
			AllCleanProducts = append(AllCleanProducts, p)
		}
	}

	for _, p := range AllCleanProducts {
		switch p.Name {
		case CleanTypeNoWorries:
			if p.CarType == CarType4WD {
				NoWorries4WDClean = p
			} else {
				NoWorriesSedanClean = p
			}
		case CleanTypeBonza:
			if p.CarType == CarType4WD {
				Bonza4WDClean = p
			} else {
				BonzaSedanClean = p
			}
			// case CleanTypeHolyMackerel:
			// 	if p.CarType == CarType4WD {
			// 		HolyMackerel4WDClean = p
			// 	} else {
			// 		HolyMackerelSedanClean = p
			// 	}
		}
	}
}

type Product struct {
	Base
	// publish.Status
	Type    string // clean, parking
	CarType string // Sedan, 4WD, All
	Name    string // no worry, bonza, holy mackerel... outdoor, indoor, under cover
	// OneOffPayment bool
}

func (p *Product) BeforeCreate(db *gorm.DB) (err error) {
	if p.Type == Parking {
		if !db.Where("name = ?", p.Name).First(&Product{}).RecordNotFound() {
			return ErrProductExisted
		}
	}

	return
}

func GetProductById(id uint64) *Product {
	for _, p := range AllCleanProducts {
		if p.Id == id {
			return p
		}
	}

	return nil
}

func GetParkingProductByName(name string) *Product {
	switch name {
	case Indoor:
		return ProductIndoor
	case Outdoor:
		return ProductOutdoor
	case UnderCover:
		return ProductUnderCover
	}

	return nil
}

func GetCleanProductById(id uint64) *Product {
	for _, p := range AllCleanProducts {
		if p.Id == id {
			return p
		}
	}

	return nil
}

func (p Product) SchemaIndex() uint64 {
	if p.Id <= uint64(0) {
		return uint64(0)
	}
	return p.Id - uint64(1)
}
