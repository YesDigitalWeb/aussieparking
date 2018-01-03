package models

import "html/template"

type Article struct {
	Base
	Slug            string `gorm:"unique_index"`
	Keywords        string
	MetaTitle       string
	MetaDescription string `sql:"type:text"`

	Title       string
	Abstract    string `sql:"type:text"`
	WelcomeText string `sql:"type:text"`
	Content     string `sql:"type:text"`
}

func (a Article) GetAbstract() template.HTML {
	var abs string
	if a.Abstract != "" {
		abs = a.Abstract
	} else {
		abs = a.Content
		if len(abs) > 320 {
			abs = abs[:320]
		}
	}

	return template.HTML(abs)
}
