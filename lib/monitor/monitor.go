// package monitor implements a simple and resuable Client as simple Influx
// based instrumentation tool.
//
// // TODO: add configurable error handling
//
package monitor

import (
	"fmt"
	"log"
	"net/url"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/influxdb/influxdb/client"
)

type Client struct {
	URL      string
	DBName   string
	Username string
	Password string

	*client.Client
}

func (c *Client) Init() {
	if c.URL == "" {
		return
	}

	u, err := url.Parse(c.URL)
	if err != nil {
		log.Println("[Influx DB] Error:", err)
		return
	}

	c.Client, err = client.NewClient(client.Config{
		URL:      *u,
		Username: c.Username,
		Password: c.Password,
	})
	if err != nil {
		log.Println("[Influx DB] Error", err)
		return
	}

	dur, ver, err := c.Client.Ping()
	if err != nil {
		log.Println("[Influx DB] Error:", err)
	} else {
		log.Printf("[Influx DB] Happy as a Hippo! %v, %s\n", dur, ver)
	}
}

func (c *Client) Insert(measurement string, start time.Time, tags map[string]string) func() {
	return func() {
		if c.Client == nil {
			return
		}

		go func() {
			log.Println("[Influx DB] Insert Point")
			if _, err := c.Client.Write(client.BatchPoints{
				Database: c.DBName,
				Points: []client.Point{
					{
						Measurement: measurement,
						Tags:        tags,
						Fields: map[string]interface{}{
							"value": time.Now().Sub(start).Nanoseconds() / (1000 * 1000), // Unit: in Millisecond
						},
						Time: start,
					},
				},
			}); err != nil {
				log.Println("[Influx DB] Error:", err)
			}
		}()
	}
}

func (c *Client) MonitorGinRequest(ctx *gin.Context) {
	defer c.Insert("request", time.Now(), map[string]string{
		"path":           ctx.HandlerName(),
		"request_method": ctx.Request.Method,
		"response_code":  fmt.Sprint(ctx.Writer.Status()),
	})()

	ctx.Next()
}
