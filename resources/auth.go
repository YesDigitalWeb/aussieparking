package resources

import (
	"net/http"
	"time"

	"github.com/gorilla/sessions"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"

	"github.com/qor/admin"
	"github.com/qor/qor"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
	"github.com/theplant/aussie/lib/tpl"
)

const (
	// IMPORTANT
	// Because gin-session.Get panics when cookie key is updated, when key is updated,
	// we have to change cookie name too.
	AdminCookieName = "aussie-parking-admin"
)

var SessionStore = sessions.NewCookieStore([]byte(config.Cfg.Cookie.AdminKey))

type AdminLoginView struct{ WrongPwOrEmail bool }

type Auth struct{}

func (Auth) LoginURL(c *admin.Context) string  { return "/admin_login" }
func (Auth) LogoutURL(c *admin.Context) string { return "/admin_logout" }

func (Auth) GetCurrentUser(c *admin.Context) qor.CurrentUser {
	session, err := SessionStore.Get(c.Request, AdminCookieName)
	if err != nil {
		config.ReportError(err)
	}
	id := session.Values["admin_user_id"]
	if id == nil {
		return nil
	}
	if loginDate, ok := session.Values["login_date"]; !ok {
		return nil
	} else if loginDate.(string) < time.Now().Add(-time.Hour*24*7).Format("2006-01-02") {
		return nil
	}

	var user models.AdminUser
	if err := db.DB.Find(&user, id).Error; err != nil {
		if err != gorm.ErrRecordNotFound {
			config.ReportError(err)
		}
		return nil
	}

	return user
}

func AdminLoginPage(c *gin.Context) { adminLoginPage(c, AdminLoginView{}) }

func adminLoginPage(c *gin.Context, view AdminLoginView) {
	tmpl := tpl.Template("admin_users/login.tmpl", "layouts/admin.tmpl")
	if err := tmpl.Execute(c.Writer, view); err != nil {
		c.Writer.WriteHeader(http.StatusInternalServerError)
		c.Writer.Write([]byte(err.Error()))
		config.ReportError(err)
	}
}

func AdminLogin(c *gin.Context) {
	var err error
	defer func() {
		if err != nil {
			view := AdminLoginView{WrongPwOrEmail: true}
			adminLoginPage(c, view)

			if err != gorm.ErrRecordNotFound && err != bcrypt.ErrMismatchedHashAndPassword {
				config.ReportError(err)
			}
			return
		}

		http.Redirect(c.Writer, c.Request, "/admin", http.StatusSeeOther)
	}()

	email := c.Request.FormValue("Email")
	password := c.Request.FormValue("Password")

	var user models.AdminUser
	err = db.DB.Where("email = ?", email).First(&user).Error
	if err != nil {
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return
	}

	session, err := SessionStore.Get(c.Request, AdminCookieName)
	if err != nil {
		config.ReportError(err)
	}
	session.Values["admin_user_id"] = user.Id
	session.Values["login_date"] = time.Now().Format("2006-01-02") // Note: SessionStore Config is better!
	if err := session.Save(c.Request, c.Writer); err != nil {
		config.ReportError(err)
	}
}

func AdminLogout(c *gin.Context) {
	session, err := SessionStore.Get(c.Request, AdminCookieName)
	if err != nil {
		config.ReportError(err)
	}
	delete(session.Values, "admin_user_id")
	if err := session.Save(c.Request, c.Writer); err != nil {
		config.ReportError(err)
	}
	http.Redirect(c.Writer, c.Request, "/", http.StatusSeeOther)
}
