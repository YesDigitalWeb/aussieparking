package main

import (
	"log"
	"net/http"
	"os"
	"runtime"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config/routes"
)

func init() {
	go models.RunGenDailyReportTask()
}

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	log.SetFlags(log.Lshortfile | log.Ldate | log.Ltime)
	log.SetOutput(os.Stdout)

	log.Println("Listening on :7000")
	if err := http.ListenAndServe(":7000", routes.Mux()); err != nil {
		panic(err)
	}
}
