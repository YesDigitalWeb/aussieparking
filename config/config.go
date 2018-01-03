package config

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/smtp"
	"os"
	"path"
	"regexp"
	"strings"

	"github.com/gin-gonic/gin"
)

type Config struct {
	Env string

	HTTPS bool
	Host  string

	Mail struct {
		// Admin is used in payment receipt, and other server emails
		// Bookings is used in booking notification
		// Info is used in Contact Us
		Admin, Bookings, Info string // admin email accounts

		TestRecipient string // test to email address

		Host, Port         string
		Username, Password string
	}

	MailChimpAPIKey   string
	MailChimpListName string

	DB struct {
		Name     string
		Host     string
		User     string
		Password string
	}

	Paypal struct {
		Gateway  string
		Partner  string
		Vendor   string
		User     string
		Password string
	}

	RollbarToken string

	// IMPORTANT
	// Because gin-session.Get panics when cookie key is updated, when key is updated,
	// we have to change cookie name too.
	Cookie struct {
		UserKey  string
		AdminKey string
	}
}

var (
	Root     = os.Getenv("GOPATH") + "/src/github.com/theplant/aussie"
	Cfg      Config
	MailAuth smtp.Auth
)

func init() {
	if path := strings.TrimSpace(os.Getenv("WEB_ROOT")); path != "" {
		Root = path
	}

	Cfg.Env = strings.TrimSpace(os.Getenv("WEB_ENV"))
	if Cfg.Env == "" {
		if testEnv, _ := regexp.MatchString("/_test/", os.Args[0]); testEnv {
			Cfg.Env = "test"
		} else if Cfg.Env = os.Getenv("WEB_ENV"); Cfg.Env == "" {
			Cfg.Env = "local"
		}
	}

	envFile, err := ioutil.ReadFile(path.Join(Root, fmt.Sprintf("config/%s.json", Cfg.Env)))
	if err != nil {
		panic(err)
	}
	if err := json.Unmarshal(envFile, &Cfg); err != nil {
		panic(err)
	}

	if Cfg.Mail.Port == "" {
		Cfg.Mail.Port = ":25"
	}
	if Cfg.Mail.Host != "" {
		MailAuth = smtp.PlainAuth("aussie", Cfg.Mail.Username, Cfg.Mail.Password, Cfg.Mail.Host)
	}

	if !IsLocal() {
		gin.SetMode(gin.ReleaseMode)
	}

	initRollbar()
}

func IsLocal() bool {
	return Cfg.Env == "local"
}

func IsTestEnv() bool {
	return Cfg.Env == "test"
}

func IsDev() bool {
	return Cfg.Env == "dev"
}

func IsProd() bool {
	return Cfg.Env == "prod"
}

// FullURL prefix url with scheme and site domain name.
// Should pass in url with a leading /.
func FullURL(urls ...string) string {
	scheme := "http"
	if Cfg.HTTPS {
		scheme = "https"
	}
	var url string
	if len(urls) > 0 {
		url = urls[0]
	}
	return fmt.Sprintf("%s://%s%s", scheme, Cfg.Host, url)
}
