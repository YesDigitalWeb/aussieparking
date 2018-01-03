package paypal

import (
	"errors"
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/theplant/aussie/config"
)

var (
	Gateway  = config.Cfg.Paypal.Gateway
	Partner  = config.Cfg.Paypal.Partner
	Vendor   = config.Cfg.Paypal.Vendor
	User     = config.Cfg.Paypal.User
	Password = config.Cfg.Paypal.Password
)

type Payflow struct {
	Name   string
	Number string
	Month  string
	Year   string
	Amount string
	CVV2   string
}

func Checkout(payflow *Payflow) (url.Values, error) {
	if resp, err := http.PostForm(Gateway,
		url.Values{
			"PARTNER":  {Partner},
			"VENDOR":   {Vendor},
			"USER":     {User},
			"PWD":      {Password},
			"TENDER":   {"C"},
			"ACCT":     {payflow.Number},
			"EXPDATE":  {payflow.Month + payflow.Year},
			"AMT":      {payflow.Amount},
			"TRXTYPE":  {"S"},
			"CURRENCY": {"AUD"},
		}); err == nil {
		defer resp.Body.Close()

		if body, err := ioutil.ReadAll(resp.Body); err == nil {
			if results, err := url.ParseQuery(string(body)); err == nil {
				if result := results.Get("RESULT"); result == "0" {
					return results, nil
				} else {
					return results, errors.New(string(body))
				}
			} else {
				return nil, err
			}
		} else {
			return nil, err
		}
	} else {
		return nil, err
	}
}
