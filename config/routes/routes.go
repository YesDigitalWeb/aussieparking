package routes

import (
	"net/http"
	"os"
	"path"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/context"
	"github.com/qor/admin"
	"github.com/theplant/aussie/app/controllers"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/lib/middlewares"
	"github.com/theplant/aussie/resources"
	"github.com/tommy351/gin-sessions"
)

var sessionStore = sessions.NewCookieStore([]byte(config.Cfg.Cookie.UserKey))

func Mux() *http.ServeMux {
	gin.SetMode(gin.ReleaseMode)
	engine := gin.Default()
	engine.Use(
		middlewares.HandleError,

		// IMPORTANT
		// Because gin-session.Get panics when cookie key is updated, when key is updated,
		// we have to change cookie name too.
		sessions.Middleware("aussie-parking", sessionStore),
	)

	engine.StaticFile("AussieAirportParking-Ourinmbah-Directions.pdf", "public/AussieAirportParking-Ourinmbah-Directions.pdf")

	home := engine.Group("/", middlewares.HomeViewLayout)
	home.GET("/", controllers.Index)

	engine.POST("/order", controllers.Book)
	engine.POST("/order/confirm", controllers.Confirm)
	engine.POST("/order/pay_on_site", controllers.PayOnSite)
	engine.POST("/order/pay_with_paypal", controllers.PayWithPaypal)
	engine.POST("/order/change_booking", controllers.ChangeBooking)

	home.GET("/thank_you", controllers.ThankYou)

	home.GET("/car_dealing", controllers.CarDealing)
	home.GET("/location", controllers.Location)
	home.GET("/about_us", controllers.AboutUs)
	home.GET("/contact_us", controllers.ContactUs)
	home.GET("/terms-and-conditions", controllers.TermsAndConditions)
	engine.POST("/contact_us", controllers.SendContactUsMessage)

	engine.GET("/clean_range_products/:date", controllers.GetCleanRangeProducts)

	// Require Admin Auth
	adminAuth := engine.Group("/", middlewares.AdminAuth)
	adminAuth.GET("/order/stat/:date", controllers.GetBookingStats)
	adminAuth.GET("/calendar_monthly_bookings", controllers.MonthlyBookings)
	adminAuth.GET("/calendar/:type/:month", controllers.GetDailyReportsByMonth)

	engine.GET("/admin_login", resources.AdminLoginPage)
	engine.POST("/admin_login", resources.AdminLogin)
	engine.GET("/admin_logout", resources.AdminLogout)

	home.GET("/articles", controllers.ActicleList)
	home.GET("/articles/:slug", controllers.GetActicle)

	var mux = http.NewServeMux()
	mux.Handle("/", engine)

	qorRouter := resources.Admin.GetRouter()

	qorRouter.Use(&admin.Middleware{
		Name: "CleanGorillaContext",
		Handler: func(c *admin.Context, m *admin.Middleware) {
			defer context.Clear(c.Request)
			m.Next(c)
		},
	})

	// Temporally redirect default admin landing page to Booking List
	qorRouter.Use(&admin.Middleware{Name: "AdminAccess", Handler: handleAdminAccess})

	qorRouter.Get("/calendar", controllers.Calendar)
	qorRouter.Post("/range", controllers.CreateRange)
	qorRouter.Post("/discount", controllers.CreateDiscount)
	resources.Admin.MountTo("/admin", mux)

	mux.Handle("/js/", SecureFileServer(http.Dir("public")))
	mux.Handle("/css/", SecureFileServer(http.Dir("public")))
	mux.Handle("/img/", SecureFileServer(http.Dir("public")))
	mux.Handle("/fonts/", SecureFileServer(http.Dir("public")))

	mux.Handle("/system/", SecureFileServer(http.Dir("public")))

	return mux
}

func handleAdminAccess(c *admin.Context, m *admin.Middleware) {
	user := c.CurrentUser.(models.AdminUser)

	// disable default admin landing page because of requirement changes
	if contains([]string{"/admin", "/admin/", "/admin/order"}, c.Request.URL.Path) {
		dest := "/admin/orders"
		if user.Role == resources.RoleSEO {
			dest = "/admin/articles"
		}
		http.Redirect(c.Writer, c.Request, dest, http.StatusTemporaryRedirect)
		return
	}

	if c.Request.Method == "POST" {
		if contains([]string{"/admin/calendar", "/admin/range", "/admin/discount"}, c.Request.URL.Path) &&
			user.Role != resources.RoleAdmin {
			c.Writer.WriteHeader(http.StatusNotFound)
			return
		}
	}

	if strings.HasPrefix(c.Request.URL.Path, "/admin/orders") && user.Role == resources.RoleSEO {
		c.Writer.WriteHeader(http.StatusNotFound)
		return
	}

	m.Next(c)
}

func contains(strs []string, str string) bool {
	for _, s := range strs {
		if s == str {
			return true
		}
	}
	return false
}

func SecureFileServer(dir http.Dir) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		p := path.Join(string(dir), r.URL.Path)
		if f, err := os.Stat(p); err == nil && !f.IsDir() {
			http.ServeFile(w, r, p)
			return
		}

		http.NotFound(w, r)
	})
}
