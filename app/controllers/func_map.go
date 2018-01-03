package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"time"

	"github.com/qor/admin"
	"github.com/qor/qor"
	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/lib/tpl"
	"github.com/theplant/aussie/resources"
)

func init() {
	initFrontEndFuncMaps()

	initAdminFuncMaps()
}

func initFrontEndFuncMaps() {
	tpl.DefaultFuncMap["to_html"] = func(text string) template.HTML { return template.HTML(text) }
	tpl.DefaultFuncMap["asset_path"] = config.AssetPath
	tpl.DefaultFuncMap["array"] = genArray
	tpl.DefaultFuncMap["two_digit_current_year"] = func() int {
		year := time.Now().Year()
		return year % 2000
	}
	tpl.DefaultFuncMap["to_html"] = func(cnt string) template.HTML { return template.HTML(cnt) }
}

func initAdminFuncMaps() {
	resources.Admin.RegisterFuncMap("all_clean_products", func() (ps []*models.Product) {
		return models.AllCleanProducts
	})
	resources.Admin.RegisterFuncMap("to_json", func(data interface{}) string {
		dataStr, err := json.Marshal(data)
		if err != nil {
			fmt.Println(err)
		}
		return string(dataStr)
	})
	resources.Admin.RegisterFuncMap("tomorrow", func() time.Time { return time.Now().Add(time.Hour * 24) })

	file, err := ioutil.ReadFile(config.Root + "/app/views/shared/_time_selector.tmpl")
	if err != nil {
		panic(err)
	}
	timeSel := template.Must(template.New("time_selector").Parse(string(file)))
	resources.Admin.RegisterFuncMap("time_selector", func(name string) (template.HTML, error) {
		var data = HomeView{}.TimeSelectorValue(name, "")
		var buf bytes.Buffer
		err := timeSel.Execute(&buf, data)
		return template.HTML(buf.String()), err
	})

	resources.Admin.RegisterFuncMap("get_order_table_result", func(c *admin.Context) (result interface{}, err error) {
		scope, ok := c.Result.(string)
		if !ok {
			return c.Result, nil
		}

		result, err = c.NewResourceContext("order").Scope(scope).FindMany()
		if err != nil {
			return
		}

		if scope != "Checkins & Checkouts Today" {
			return
		}

		orders := result.(*[]*models.Order)
		models.SortOrdersForCheckInsOutsToday(*orders)

		return orders, err
	})

	resources.Admin.RegisterFuncMap("times", times)
	resources.Admin.RegisterFuncMap("asset_path", config.AssetPath)
	resources.Admin.RegisterFuncMap("is_admin_or_staff", func(user qor.CurrentUser) bool {
		role := user.(models.AdminUser).Role
		return role == resources.RoleAdmin || role == resources.RoleStaff
	})
}

func times(num int) []int {
	r := make([]int, num)
	for i := 0; i < num; i++ {
		r[i] = i + 1
	}
	return r
}

func genArray(begin, count, step int) []int {
	arr := make([]int, count)
	for i := 0; i < count; i++ {
		arr[i] = begin
		begin += step
	}
	return arr
}
