package models

import (
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/jinzhu/gorm"
)

type AdminUser struct {
	Base
	Name              string
	Email             string `sql:"unique"`
	Password          string
	Role              string
	ConfirmedPassword string `sql:"-"`
}

func (a *AdminUser) BeforeSave(db *gorm.DB) (err error) {
	if a.ConfirmedPassword == "" {
		return
	}

	if a.ConfirmedPassword != a.Password {
		return errors.New("confirmed password is not the same as password")
	}

	pw, err := bcrypt.GenerateFromPassword([]byte(a.Password), 0)
	if err != nil {
		return
	}
	a.Password = string(pw)
	a.ConfirmedPassword = ""

	return
}

func (a AdminUser) DisplayName() string {
	return a.Name
}
