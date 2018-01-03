package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
	"sort"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/jinzhu/now"
	"github.com/qor/admin"
	"github.com/qor/serializable_meta"
	"github.com/theplant/qor-enterprise/promotion"

	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
)

const PromotionKind = "discount"

func RegisterPromotionHandlers(admin *admin.Admin) {
	promotion.RegisterRuleHandler(promotion.RuleHandler{
		Name:     PromotionKind,
		Handler:  matchDiscount,
		Resource: admin.NewResource(&PromotionRule{}),
	})
	promotion.RegisterBenefitHandler(promotion.BenefitHandler{
		Name:     PromotionKind,
		Handler:  retrieveBenefit,
		Resource: admin.NewResource(&PromotionBenefit{}),
	})
}

type PromotionRule struct {
	Start    string // Date: 2014-09-08
	End      string // Date: 2014-09-18
	Weekdays Weekdays
}

type PromotionBenefit struct{ Discounts []Discount }

type Discount struct {
	Days     int
	Products []ProductDiscount
}

type ProductDiscount struct {
	ProductId uint64
	Discount  float64
}

func (pb PromotionBenefit) Len() int               { return len(pb.Discounts) }
func (pb PromotionBenefit) Less(i int, j int) bool { return pb.Discounts[i].Days > pb.Discounts[j].Days }
func (pb PromotionBenefit) Swap(i int, j int) {
	tmp := pb.Discounts[i]
	pb.Discounts[i] = pb.Discounts[j]
	pb.Discounts[j] = tmp
}

func (pb *PromotionBenefit) Scan(src interface{}) error {
	var data []byte
	switch x := src.(type) {
	case string:
		data = []byte(x)
	case []byte:
		data = x
	default:
		return fmt.Errorf("models: unknown PromotionBenefit data source: %T %s", src, src)
	}
	return json.Unmarshal(data, &pb)
}

func (pb PromotionBenefit) Value() (driver.Value, error) {
	data, err := json.Marshal(pb)
	return string(data), err
}

func (pb PromotionBenefit) RetrieveDiscount(productId uint64, days int) float64 {
	sort.Sort(pb)

	for _, discount := range pb.Discounts {
		if days < discount.Days {
			continue
		}

		for _, product := range discount.Products {
			if product.ProductId == productId {
				return product.Discount
			}
		}

		break
	}

	return 0
}

func matchDiscount(_ *gorm.DB, res interface{}, prule *promotion.PromotionRule) bool {
	rule := ToModelRule(prule)

	item := res.(*OrderItem)
	if !item.Order.Editable() && !item.Order.inAdminCreation {
		return item.Order.DiscountId == prule.DiscountID
	}

	date := item.Order.From
	day := date.Format(OrderItemDayFormat)
	match := rule.Start <= day && day <= rule.End && rule.Weekdays.Has(int(date.Weekday()))

	if match && item.Order != nil {
		item.Order.DiscountId = prule.DiscountID
	}

	return match
}

func retrieveBenefit(_ *gorm.DB, res interface{}, pbenefit *promotion.PromotionBenefit) error {
	benefit := ToModelBenefit(pbenefit)

	item := res.(*OrderItem)
	item.Discount = benefit.RetrieveDiscount(item.ProductId, item.DaysFromOrderBeginning())
	return nil
}

func ToModelBenefit(pbenefit *promotion.PromotionBenefit) *PromotionBenefit {
	benefitx := pbenefit.GetSerializableArgument(pbenefit)
	if benefitx == nil {
		config.ReportError(errors.New("failed to retrieve benefit"))
		return nil
	}
	return benefitx.(*PromotionBenefit)
}

func ToModelRule(prule *promotion.PromotionRule) *PromotionRule {
	rulex := prule.GetSerializableArgument(prule)
	if rulex == nil {
		config.ReportError(errors.New("failed to retrieve rule"))
		return nil
	}
	return rulex.(*PromotionRule)
}

// In Aussie Parking, every promotion.PromotionDiscount has one rule and one benefit
func CreateDiscount(rule PromotionRule, benefit PromotionBenefit) (promotion.PromotionDiscount, error) {
	expires, err := time.Parse(OrderItemDayFormat, rule.End)
	if err != nil {
		return promotion.PromotionDiscount{}, err
	}
	var discounts []Discount
	for _, discount := range benefit.Discounts {
		if discount.Days == 0 {
			continue
		}

		var products []ProductDiscount
		for _, p := range discount.Products {
			if p.Discount == 0 {
				continue
			}
			products = append(products, p)
		}

		if len(products) == 0 {
			continue
		}
		discounts = append(discounts, Discount{
			Days:     discount.Days,
			Products: products,
		})
	}
	benefit.Discounts = discounts

	expires = now.New(expires).EndOfDay()

	discount := promotion.PromotionDiscount{
		// Add expiry date here for filtering out old discounts when invoking
		// promotion.Compute
		Expires: &expires,

		Name:           time.Now().Format("2006-01-02 15:04"),
		RequiresCoupon: false,
		Unique:         true,
		Rules:          []*promotion.PromotionRule{ToPromotionRule(rule)},
		Benefits:       []*promotion.PromotionBenefit{ToPromotionBenefit(benefit)},
	}

	return discount, db.DB.Create(&discount).Error
}

func ToPromotionRule(rule PromotionRule) *promotion.PromotionRule {
	prule := &promotion.PromotionRule{
		SerializableMeta: serializable_meta.SerializableMeta{
			Kind: PromotionKind, // Value: EncodePromotionValue(rule),
		},
	}
	prule.SetSerializableArgumentValue(&rule)
	return prule
}

func ToPromotionBenefit(benefit PromotionBenefit) *promotion.PromotionBenefit {
	pbenefit := &promotion.PromotionBenefit{
		SerializableMeta: serializable_meta.SerializableMeta{
			Kind: PromotionKind, // Value: EncodePromotionValue(benefit),
		},
	}
	pbenefit.SetSerializableArgumentValue(&benefit)
	return pbenefit
}

func FindDiscounts(to time.Time) ([]promotion.PromotionDiscount, error) {
	var discounts []promotion.PromotionDiscount
	var now = time.Now()

	// copied from promotion.Compute
	if err := db.DB.Preload("Benefits").Preload("Rules").Where("requires_coupon = ? AND (begins IS NULL OR begins <= ?) AND (expires >= ? OR expires IS NULL)", false, now, now).Order("id desc").Find(&discounts).Error; err != nil && err != gorm.ErrRecordNotFound {
		return discounts, err
	}

	return discounts, nil
}

// getDiscountByDate supposes that the newest discount are ordered before the old ones
// test is covered by TestGetDailyReportsByMonth.
func getBenefitByDate(discounts []promotion.PromotionDiscount, date time.Time) *PromotionBenefit {
	if len(discounts) == 0 {
		return nil
	}

	day := date.Format("2006-01-02")
	for _, d := range discounts {
		for _, prule := range d.Rules {
			// var rule *PromotionRule
			// if DecodePromotionValue(prule.Value, &rule); rule == nil {
			rule := ToModelRule(prule)
			if rule == nil {
				continue
			}

			// can't use matchDiscount() here because logics for order/order
			// items are now different from daily reports.
			// Reference: https://qortex.com/theplant#groups/54a28f348d93e31c3e036c0c/entry/55e41f698d93e35cc603a9a1
			if !(rule.Start <= day && day <= rule.End && rule.Weekdays.Has(int(date.Weekday()))) {
				continue
			}

			for _, pbenefit := range d.Benefits {
				// var b PromotionBenefit
				// DecodePromotionValue(pbenefit.Value, &b)
				return ToModelBenefit(pbenefit)
			}
		}
	}

	return nil
}
