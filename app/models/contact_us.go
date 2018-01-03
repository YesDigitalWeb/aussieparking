package models

import (
	"bytes"
	"fmt"
	"html/template"
	"time"

	"github.com/theplant/aussie/config"
	"github.com/theplant/aussie/lib/scribbler"
)

type ContactUs struct {
	Id        uint64
	Name      string
	Phone     string
	Email     string
	Message   string `sql:"size:65535"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

// TODO: replace scribbler with github.com/go-mail/gomail?
func (cu *ContactUs) AfterSave() error {
	if config.MailAuth == nil {
		return nil
	}

	fmt.Println("send contact us email notification")
	var mail scribbler.Mail
	mail.Subject = "Aussie Parking: New CONTACT US Record"
	mail.From = cu.Email
	mail.To = []string{config.Cfg.Mail.Info}
	var buf bytes.Buffer
	if err := contactUsEmailTmpl.Execute(&buf, cu); err != nil {
		config.ReportError(err)
		return err
	}
	mail.HTML = buf.String()
	err := mail.Send(config.Cfg.Mail.Host+config.Cfg.Mail.Port, config.MailAuth)
	if err != nil {
		config.ReportError(err)
		return err
	}

	return nil
}

var contactUsEmailTmpl = template.Must(template.New("").Parse(`<table>
<tr>
	<th>Name</th>
	<td>{{.Name}}</td>
</tr>
<tr>
	<th>Phone</th>
	<td>{{.Phone}}</td>
</tr>
<tr>
	<th>Email</th>
	<td>{{.Email}}</td>
</tr>
<tr>
	<th>Message</th>
	<td>{{.Message}}</td>
</tr>
</table>`))
