package config

import (
	"log"
	"runtime/debug"

	"github.com/gin-gonic/gin"
	"github.com/stvp/rollbar"
)

func initRollbar() {
	rollbar.Token = Cfg.RollbarToken
	rollbar.Environment = Cfg.Env
	if IsProd() && rollbar.Token == "" {
		panic("Error: rollbar token is empty")
	}
}

func ReportError(err error) {
	reportError(err, nil)
}

func ReportRequestError(err error, ctx *gin.Context) {
	reportError(err, ctx)
}

func reportError(err error, ctx *gin.Context) {
	log.Println("Error: ", err)
	debug.PrintStack()
	if rollbar.Token == "" {
		return
	}

	if ctx != nil {
		rollbar.RequestError(rollbar.ERR, ctx.Request, err)
	} else {
		rollbar.Error(rollbar.ERR, err)
	}
}
