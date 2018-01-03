package scribbler

import (
	"crypto/md5"
	"crypto/tls"
	"encoding/base64"
	"fmt"
	"net"
	"net/smtp"
	"net/textproto"
	"strconv"
	"strings"
	"time"
)

type Mail struct {
	From      string
	FromName  string
	To        []string
	Subject   string
	HTML      string
	PlainText string
	Header    map[string]string
	// boundary  string

	// Attachments []Attachment
}

// type Attachment struct {
// 	Name   string
// 	Header map[string]string
// 	Body   io.Reader
// }

func (m Mail) Send(addr string, auth smtp.Auth) (err error) {
	c, err := smtp.Dial(addr)
	if err != nil {
		return err
	}
	defer c.Close()
	if ok, _ := c.Extension("STARTTLS"); ok {
		name, _, _ := net.SplitHostPort(addr)
		config := &tls.Config{ServerName: name}
		if err = c.StartTLS(config); err != nil {
			return err
		}
	}
	if auth != nil {
		if need, _ := c.Extension("AUTH"); need {
			if err = c.Auth(auth); err != nil {
				return err
			}
		}
	}
	if err = c.Mail(m.From); err != nil {
		return err
	}
	for _, addr := range m.To {
		if err = c.Rcpt(addr); err != nil {
			return err
		}
	}
	w, err := c.Data()
	if err != nil {
		return err
	}

	if _, err = w.Write([]byte(m.GenBody())); err != nil {
		return err
	}

	if err = w.Close(); err != nil {
		return err
	}
	return c.Quit()
}

func (m Mail) GenBody() (body string) {
	boundary := genBoundary()
	if m.Header == nil {
		m.Header = make(map[string]string)
	}
	if m.FromName != "" {
		m.Header["From"] = fmt.Sprintf("%s <%s>", m.FromName, m.From)
	} else {
		m.Header["From"] = m.From
	}
	m.Header["To"] = strings.Join(m.To, ", ")
	m.Header["Subject"] = mimeEncode(m.Subject)
	m.Header["MIME-Version"] = "1.0"
	m.Header["Content-Transfer-Encoding"] = "base64"
	m.Header["Content-Type"] = `multipart/alternative; boundary="` + boundary + `"`

	body += encodeHeader(m.Header) + "\r\n"

	if m.PlainText != "" {
		h := make(map[string]string)
		h["Content-Type"] = "text/plain; charset=UTF-8"
		h["Content-Transfer-Encoding"] = "base64"
		body += "--" + boundary + "\r\n"
		body += encodeHeader(h) + "\r\n"
		body += base64.StdEncoding.EncodeToString([]byte(m.PlainText)) + "\r\n"
	}

	if m.HTML != "" {
		h := make(map[string]string)
		h["Content-Type"] = "text/html; charset=UTF-8"
		h["Content-Transfer-Encoding"] = "base64"
		body += "--" + boundary + "\r\n"
		body += encodeHeader(h) + "\r\n"
		body += base64.StdEncoding.EncodeToString([]byte(m.HTML)) + "\r\n"
	}

	body += "--" + boundary + "--"

	return
}

func mimeEncode(src string) string {
	return fmt.Sprintf("=?utf-8?B?%s?=", base64.StdEncoding.EncodeToString([]byte(src)))
}

func genBoundary() string {
	return fmt.Sprintf("%x", md5.Sum([]byte(strconv.FormatInt(time.Now().UnixNano(), 10))))
}

func encodeHeader(h map[string]string) (header string) {
	for k, v := range h {
		header += fmt.Sprintf("%s: %s\r\n", textproto.CanonicalMIMEHeaderKey(k), v)
	}

	return
}
