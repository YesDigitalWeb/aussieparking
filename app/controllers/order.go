package controllers

import (
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/now"
	"github.com/qor/qor"
	"github.com/tommy351/gin-sessions"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
	"github.com/theplant/aussie/lib/paypal"
	"github.com/theplant/aussie/lib/tpl"
	"github.com/theplant/aussie/resources"
)

func GetCurrentOrder(c *gin.Context) (order models.Order) {
	session := sessions.Get(c)
	orderIdFromSession := session.Get("order_id")
	if orderIdFromSession != nil && !db.DB.First(&order, orderIdFromSession).RecordNotFound() {
		db.DB.Model(&order).Related(&order.Profile)
		db.DB.Model(&order).Related(&order.User)
	}
	return
}

func Book(c *gin.Context) {
	order := GetCurrentOrder(c)
	if !order.Editable() {
		order = models.Order{}
	}

	oldState := order.State
	orderResource := resources.Admin.GetResource("orders")
	if err := orderResource.Decode(resources.Admin.NewContext(c.Writer, c.Request).Context, &order); err != nil {
		if qerr, ok := err.(qor.Errors); !ok || qerr.HasError() {
			reportOrderError(c, order, err)
		}
	}
	order.State = oldState // Thou shall not change my state!

	var withProfile bool
	if val := c.Request.URL.Query()["with_profile"]; len(val) > 0 {
		withProfile = val[0] == "true"
	}

	if err := order.Validate(withProfile); err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}

	if err := db.DB.Save(&order).Error; err == nil {
		session := sessions.Get(c)
		session.Set("order_id", order.Id)
		if err := session.Save(); err != nil {
			reportOrderError(c, order, err)
		}

		c.JSON(http.StatusAccepted, map[string]interface{}{
			"Id":             order.Id,
			"PaymentType":    order.PaymentType,
			"Amount":         order.PaypalAmount(),
			"OnSiteAmount":   order.Amount,
			"CleanProductId": order.CleanProductId,
			"Days":           order.ParkingDays(),
		})
	} else if err == models.ErrNotEnoughSlots {
		c.JSON(http.StatusNotAcceptable, map[string]interface{}{"error": err.Error()})
	} else {
		c.Error(err)
		reportOrderError(c, order, err)
	}
}

func Confirm(c *gin.Context) {
	var order = GetCurrentOrder(c)
	tx := db.DB.Begin()
	models.OrderStateMachine.Trigger("ready", &order, tx)
	if err := tx.Save(&order).Error; err == nil && tx.Commit().Error == nil {
		c.JSON(http.StatusOK, map[string]interface{}{"Id": order.Id, "Amount": order.Amount, "PaypalAmount": order.PaypalAmount()})
	} else {
		tx.Rollback()
		c.Error(err)
		reportOrderError(c, order, err)
	}
}

//
// Result Values Based On Alternate Generation Methods
// https://developer.paypal.com/docs/classic/payflow/integration-guide/#result-values-for-testing
func PayWithPaypal(c *gin.Context) {
	var order = GetCurrentOrder(c)
	if order.GetState() == "ready" {
		var payflow paypal.Payflow
		if err := c.Bind(&payflow); err != nil {
			c.JSON(http.StatusNotAcceptable, err)
			reportOrderError(c, order, err)
			return
		}
		payflow.Amount = fmt.Sprintf("%.2f", order.PaypalAmount())
		if results, err := paypal.Checkout(&payflow); err == nil {
			tx := db.DB.Begin()
			change := order.Amount - order.PaypalAmount()
			order.PaypalRef = results.Get("PNREF")
			order.DiscountValue -= change
			order.PaypalResponse = results.Encode()
			if err := tx.Save(&order).Error; err != nil {
				reportOrderError(c, order, err)
			}

			go order.SendEmailNotifications(true, true, true, true)
			if err := models.OrderStateMachine.Trigger("paypal_paid", &order, tx); err != nil {
				reportOrderError(c, order, err)
			}
			if err := tx.Save(&order).Error; err == nil && tx.Commit().Error == nil {
				c.JSON(http.StatusOK, order)
				return
			} else {
				tx.Rollback()
				reportOrderError(c, order, err)
			}
		} else {
			if results != nil {
				c.JSON(http.StatusNotAcceptable, map[string]string{"error": results.Get("RESPMSG")})
			} else {
				c.JSON(http.StatusNotAcceptable, err)
			}
			reportOrderError(c, order, fmt.Errorf("payflow(%s): %s", payflow.Amount, err))
		}
	} else {
		c.JSON(http.StatusNotAcceptable, errors.New("wrong state"))
	}
	return
}

func reportOrderError(c *gin.Context, order models.Order, err error) {
	err = fmt.Errorf("order (%d): %s", order.Id, err)
	if c != nil {
		config.ReportRequestError(err, c)
	} else {
		config.ReportError(err)
	}
}

func PayOnSite(c *gin.Context) {
	var order = GetCurrentOrder(c)
	if order.GetState() == "ready" {
		tx := db.DB.Begin()
		if err := models.OrderStateMachine.Trigger("pay_on_site", &order, tx); err != nil {
			reportOrderError(c, order, err)
		}
		if err := tx.Save(&order).Error; err == nil && tx.Commit().Error == nil {
			go order.SendEmailNotifications(true, true, true, true)
			c.JSON(http.StatusOK, map[string]interface{}{"OK": "OK"})
		} else {
			c.JSON(http.StatusExpectationFailed, map[string]interface{}{"Error": err})
			reportOrderError(c, order, err)
		}
	} else {
		c.JSON(http.StatusExpectationFailed, map[string]interface{}{"Error": "order's state is wrong"})
	}
}

func ThankYou(c *gin.Context) {
	var order = GetCurrentOrder(c)

	if order.Editable() || order.Id == 0 {
		c.Redirect(http.StatusSeeOther, "/")
	} else {
		// clean order id from session
		session := sessions.Get(c)
		session.Delete("order_id")
		if err := session.Save(); err != nil {
			c.Error(err)
			reportOrderError(c, order, err)
			return
		}
		view := c.MustGet("HomeView").(HomeView)
		view.Page = "ThankYou"
		view.CurrentOrder = &order
		tmpl := tpl.Template("orders/thank_you.tmpl")
		if err := tmpl.Execute(c.Writer, view); err != nil {
			c.Error(err)
			reportOrderError(c, order, err)
		}
	}
}

func GetCleanRangeProducts(c *gin.Context) {
	var err error
	defer func() {
		if err != nil {
			config.ReportRequestError(err, c)
		}
	}()

	date, err := time.Parse("2006-01-02", c.Params.ByName("date"))
	if err != nil {
		c.Error(err)
		return
	}
	data, err := models.GetCleanRangeProductsByDate(date)
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(http.StatusAccepted, data)
}

func GetBookingStats(c *gin.Context) {
	var err error
	defer func() {
		if err != nil {
			config.ReportRequestError(err, c)
		}
	}()

	date, err := now.Parse(c.Params.ByName("date"))
	if err != nil {
		c.Error(err)
		return
	}

	in, out, avail, err := models.GetBookingStats(date)
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(http.StatusAccepted, map[string]int{
		"CheckIns":   in,
		"CheckOuts":  out,
		"Availables": avail,
	})
}

func ChangeBooking(c *gin.Context) {
	order := GetCurrentOrder(c)
	if err := models.OrderStateMachine.Trigger("change_booking", &order, db.DB); err != nil {
		c.Error(err)
		reportOrderError(c, order, err)
		return
	}
}
