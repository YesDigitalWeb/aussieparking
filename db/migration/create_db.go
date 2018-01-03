// +build ignore

package main

import (
	"fmt"
	"os/exec"

	"github.com/theplant/aussie/config"
)

func main() {
	// db := "aussie_parking"
	// if os.Getenv("WEB_ENV") == "test" {
	// 	db += "_test"
	// }
	{
		output, err := exec.Command("sh", "-c", fmt.Sprintf(`mysql -u %s -p -e "drop database %s"`, config.Cfg.DB.User, config.Cfg.DB.Name)).CombinedOutput()
		if err != nil {
			fmt.Print(string(output))
		}
	}
	{
		output, err := exec.Command("sh", "-c", fmt.Sprintf(`mysql -u %s -p -e "create database %s"`, config.Cfg.DB.User, config.Cfg.DB.Name)).CombinedOutput()
		if err != nil {
			fmt.Println(string(output))
			panic(err)
		}
	}
}
