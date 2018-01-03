package controllers

import (
	"errors"
	"html/template"
	"net/http"
	"reflect"
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/schema"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
	"github.com/theplant/aussie/lib/tpl"
)

var defaultFormDecoder = schema.NewDecoder()

func init() {
	defaultFormDecoder.IgnoreUnknownKeys(true)
	defaultFormDecoder.RegisterConverter(time.Now(), func(layout string) reflect.Value {
		if layout != "" {
			t, err := time.Parse(models.OrderItemDayFormat, layout)
			if err == nil {
				return reflect.ValueOf(t)
			}
		}
		return reflect.Value{}
	})
}

type HomeView struct {
	CurrentOrder *models.Order
	Page         string
	Tomorrow     time.Time

	CleanRangeProducts map[string]models.RangeProduct

	Data interface{}

	Title       string
	WelcomeText template.HTML
	Meta        struct {
		Desc     string
		Keywords string
	}
}

func (h HomeView) TimeSelectorValue(name string, value string) map[string]interface{} {
	return map[string]interface{}{
		"Name":  name,
		"Value": value,
	}
}

func Index(c *gin.Context) {
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "BOOKINGS"

	renderWithBookingTop(c, view, "home/index.tmpl")
}

func renderWithBookingTop(c *gin.Context, view HomeView, tmplName string) {
	view.Tomorrow = time.Now().Add(time.Hour * 24)

	// only reuse editable order updated within 24 hours
	if order := GetCurrentOrder(c); (order.Editable() || order.GetState() == models.OrderStateReady) && order.UpdatedAt.After(time.Now().Add(-24*time.Hour)) {
		view.CurrentOrder = &order
	}

	tmpl := tpl.Template(tmplName).Funcs(template.FuncMap{
		"now": func() time.Time { return time.Now() },
	})
	if err := tmpl.Execute(c.Writer, view); err != nil {
		c.Error(err)
	}
}

func ContactUs(c *gin.Context) {
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "CONTACT US"
	err := tpl.Template("home/contact_us.tmpl").Execute(c.Writer, view)
	if err != nil {
		c.Error(err)
	}
}

func TermsAndConditions(c *gin.Context) {
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "Terms and Conditions"
	err := tpl.Template("home/terms_and_conditions.tmpl").Execute(c.Writer, view)
	if err != nil {
		c.Error(err)
	}
}

func Location(c *gin.Context) {
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "LOCATION"
	err := tpl.Template("home/location.tmpl").Execute(c.Writer, view)
	if err != nil {
		c.Error(err)
	}
}

func CarDealing(c *gin.Context) {
	var err error
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "CAR DETAILING"
	view.CleanRangeProducts, err = models.GetCleanRangeProductsByDate(time.Now())
	if err != nil {
		c.Error(err)
		return
	}
	err = tpl.Template("home/car_dealing.tmpl").Execute(c.Writer, view)
	if err != nil {
		c.Error(err)
	}
}

func AboutUs(c *gin.Context) {
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "ABOUT US"
	err := tpl.Template("home/about_us.tmpl").Execute(c.Writer, view)
	if err != nil {
		c.Error(err)
	}
}

func SendContactUsMessage(c *gin.Context) {
	if err := c.Request.ParseForm(); err != nil {
		c.Error(err)
		return
	}

	var cu models.ContactUs
	if err := defaultFormDecoder.Decode(&cu, c.Request.Form); err != nil {
		c.Error(err)
		return
	}
	if cu.Message == "" || cu.Name == "" || cu.Phone == "" {
		c.Error(errors.New("contains empty fields"))
		return
	} else if !govalidator.IsEmail(cu.Email) {
		c.Error(errors.New("email address is illegal"))
		return
	}

	if err := db.DB.Create(&cu).Error; err != nil {
		return
	}

	c.Redirect(http.StatusSeeOther, "/contact_us")
}

func ActicleList(c *gin.Context) {
	var articles []models.Article
	if err := db.DB.Find(&articles).Error; err != nil {
		c.Error(err)
		return
	}
	view := c.MustGet("HomeView").(HomeView)
	view.Page = "Articles"
	view.Data = articles
	if err := tpl.Template("articles/index.tmpl").Execute(c.Writer, view); err != nil {
		c.Error(err)
	}
}

func GetActicle(c *gin.Context) {
	var article models.Article
	if err := db.DB.Where("slug = ?", c.Params.ByName("slug")).Find(&article).Error; err != nil {
		c.Error(err)
		return
	}
	view := c.MustGet("HomeView").(HomeView)
	view.Title = article.MetaTitle
	view.WelcomeText = template.HTML(article.WelcomeText)
	view.Meta.Keywords = article.Keywords
	view.Meta.Desc = article.MetaDescription
	view.Data = article
	renderWithBookingTop(c, view, "articles/show.tmpl")
}
