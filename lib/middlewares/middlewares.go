package middlewares

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/theplant/aussie/app/controllers"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/db"
	"github.com/theplant/aussie/resources"
)

func HandleError(c *gin.Context) {
	c.Next()
	if len(c.Errors) > 0 {
		log.Println(c.Errors.String())
		c.String(http.StatusInternalServerError, c.Errors.String())
	}
}

func HomeViewLayout(c *gin.Context) {
	c.Set("HomeView", controllers.HomeView{
		Title: "Aussie Parking",
	})
}

func AdminAuth(c *gin.Context) {
	var user models.AdminUser
	defer func() {
		if user.Role != "admin" && user.Role != "staff" {
			c.AbortWithStatus(http.StatusMethodNotAllowed)
			c.Writer.Write([]byte("Permission denied"))
		}
	}()

	session, err := resources.SessionStore.Get(c.Request, resources.AdminCookieName)
	if err != nil {
		config.ReportError(err)
	}
	id := session.Values["admin_user_id"]
	if id == nil {
		return
	}

	if err := db.DB.Find(&user, id).Error; err != nil {
		if err != gorm.ErrRecordNotFound {
			config.ReportError(err)
		}
		return
	}
}
