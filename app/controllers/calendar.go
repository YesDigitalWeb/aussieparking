package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"runtime/debug"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/qor/admin"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
)

func Calendar(c *admin.Context) {
	tmplData := struct {
		AllParkingProducts  []*models.Product
		AllCleanProductsMap map[string]map[string]*models.Product
		DataTypes           []string
		AllCarTypes         []string
		AllCleanTypes       []string
	}{
		AllParkingProducts:  models.AllParkingProducts,
		DataTypes:           models.AllParkingTypes,
		AllCleanProductsMap: models.AllCleanProductsMap,
		AllCarTypes:         models.AllCarTypes,
		AllCleanTypes:       models.AllCleanTypes,
	}
	c.Execute("calendar", tmplData)
}

//
// https://qortex.com/theplant/#groups/54a28f348d93e31c3e036c0c/entry/556e9eba8d93e30909000e75
//
// In this case, his intention is to only to update the pricing of the No
// Worries detailing option, not set all prices to 0.
//
// Exception: If the Set Special Rates button is checked and the values
// are set to nil, set all Special Rates value to nil for the given time period.
//
func CreateRange(c *admin.Context) {
	if c.CurrentUser == nil && c.CurrentUser.(models.AdminUser).Role != "admin" {
		c.Writer.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	start, err := time.Parse("2006-01-02", c.Request.FormValue("Start"))
	if err != nil {
		RenderError(err, http.StatusBadRequest, c)
		return
	}
	end, err := time.Parse("2006-01-02", c.Request.FormValue("End"))
	if err != nil {
		RenderError(err, http.StatusBadRequest, c)
		return
	}

	var weekdays []int
	arr := strings.Join(c.Request.Form["weekdays"], ",")
	if err := json.Unmarshal([]byte("["+arr+"]"), &weekdays); err != nil {
		RenderError(err, http.StatusBadRequest, c)
		return
	}

	ranges, err := models.FindRanges(start, end)
	if err != nil && err != gorm.ErrRecordNotFound {
		RenderError(err, http.StatusBadRequest, c)
		return
	}

	var newRanges []models.Range
	if len(ranges) > 0 {
		var lastRange, currentRange models.Range
		newStart := start
		end = end.Add(time.Hour * 24)
		for i, currentDate := 0, start; end.After(currentDate); i++ {
			lastRange = currentRange
			currentRange = models.Ranges(ranges).GetRangeByDate(currentDate)
			if i == 0 {
				lastRange = currentRange
			}

			if i > 0 && lastRange.Id != currentRange.Id {
				newrp, err := assignNewRange(lastRange, c.Request, newStart, currentDate.Add(-1*time.Hour*24), weekdays)
				if err != nil {
					RenderError(err, http.StatusBadRequest, c)
					return
				}
				newRanges = append(newRanges, newrp)
				newStart = currentDate
			}

			currentDate = currentDate.Add(time.Hour * 24)
		}

		newrp, err := assignNewRange(lastRange, c.Request, newStart, end.Add(-time.Hour*24), weekdays)
		if err != nil {
			RenderError(err, http.StatusBadRequest, c)
			return
		}
		newRanges = append(newRanges, newrp)
	} else {
		var r models.Range
		if err := c.Request.ParseForm(); err != nil {
			panic(err)
		}
		if err := defaultFormDecoder.Decode(&r, c.Request.Form); err != nil {
			panic(err)
		}
		r.Start = start
		r.End = end
		r.Weekdays = weekdays
		newRanges = append(newRanges, r)
	}

	for _, r := range newRanges {
		if err := r.Validate(); err != nil {
			RenderError(err, http.StatusBadRequest, c)
			return
		}
		if err := c.GetDB().Save(&r).Error; err != nil {
			RenderError(err, http.StatusBadRequest, c)
			return
		}
	}

	c.Writer.Header()["Content-Type"] = []string{"application/json"}
	c.Writer.Write([]byte(`{"done": true}`))
}

// assignNewRange will assign default vaules from old ranges when according
// form value is empty string "".
//
// Note: can't use default schema here.
func assignNewRange(r models.Range, req *http.Request, start, end time.Time, weekdays []int) (newRange models.Range, err error) {
	newRange.Start = start
	newRange.End = end
	newRange.Weekdays = weekdays

	if req.FormValue("SpecialRateChecked") == "true" {
		newRange.SpecialTimeSince = req.FormValue("SpecialTimeSince")
	} else {
		newRange.SpecialTimeSince = r.SpecialTimeSince
	}

	for _, rp := range r.RangeProducts {
		var newrp models.RangeProduct
		newrp.ProductId = rp.ProductId
		price := strings.TrimSpace(req.FormValue(fmt.Sprintf("RangeProducts.%d.Price", rp.ProductId-1)))
		if price != "" {
			var pricef float64
			if pricef, err = strconv.ParseFloat(price, 64); err != nil {
				return
			}
			newrp.Price = pricef
		} else {
			newrp.Price = rp.Price
		}
		specialPrice := strings.TrimSpace(req.FormValue(fmt.Sprintf("RangeProducts.%d.SpecialPrice", rp.ProductId-1)))
		var specialPricef float64
		if specialPrice != "" {
			if specialPricef, err = strconv.ParseFloat(specialPrice, 64); err != nil {
				return
			}
		}
		if req.FormValue("SpecialRateChecked") == "true" {
			newrp.SpecialPrice = specialPricef
		} else {
			newrp.SpecialPrice = rp.SpecialPrice
		}

		newRange.RangeProducts = append(newRange.RangeProducts, newrp)
	}

	return
}

func GetDailyReportsByMonth(c *gin.Context) {
	month := time.Now()
	var err error
	if monthstr := c.Params.ByName("month"); monthstr != "" {
		if month, err = time.Parse("2006-01", monthstr); err != nil {
			c.Error(err)
			return
		}
	}

	cv := struct {
		DailyAverage              float64
		TotalBilling              float64
		Reports                   []models.DailyReport
		IndoorSlotAvailablity     int
		OutdoorSlotAvailablity    int
		UnderCoverSlotAvailablity int
		Products                  map[string]*models.Product
	}{
		IndoorSlotAvailablity:     models.IndoorSlotAvailablity,
		OutdoorSlotAvailablity:    models.OutdoorSlotAvailablity,
		UnderCoverSlotAvailablity: models.UnderCoverSlotAvailablity,
		Products:                  map[string]*models.Product{},
	}
	cv.Reports, cv.DailyAverage, cv.TotalBilling, err = models.GetDailyReportsByMonth(month, c.Params.ByName("type"))
	if err != nil {
		c.Error(err)
		return
	}

	for _, p := range models.AllParkingProducts {
		cv.Products[p.Name] = p
	}

	c.JSON(http.StatusAccepted, cv)
}

func MonthlyBookings(c *gin.Context) {
	thisYears, lastYears, err := models.GetMonthlyBookings()
	if err != nil {
		c.Error(err)
	}
	c.JSON(http.StatusAccepted, map[string][12]int{
		"ThisYear": thisYears,
		"LastYear": lastYears,
	})
}

func RenderError(err error, code int, context *admin.Context) {
	stacks := append([]byte(err.Error()+"\n"), debug.Stack()...)
	data := struct {
		Code int
		Body string
	}{
		Code: code,
		Body: string(bytes.Replace(stacks, []byte("\n"), []byte("<br>"), -1)),
	}
	context.Writer.WriteHeader(data.Code)
	context.Execute("error", data)
	config.ReportError(err)
}

// TODO: support default value here as assignNewRange does
func CreateDiscount(c *admin.Context) {
	var data struct {
		models.PromotionRule
		models.PromotionBenefit
	}
	if err := c.Request.ParseForm(); err != nil {
		RenderError(err, http.StatusBadRequest, c)
		return
	}
	if err := defaultFormDecoder.Decode(&data, c.Request.Form); err != nil {
		RenderError(err, http.StatusBadRequest, c)
		return
	}

	if _, err := models.CreateDiscount(data.PromotionRule, data.PromotionBenefit); err != nil {
		RenderError(err, http.StatusBadRequest, c)
		return
	}

	c.Writer.Header()["Content-Type"] = []string{"application/json"}
	c.Writer.Write([]byte(`{"done": true}`))
}
