package models

import (
	"html/template"
	"time"

	"github.com/theplant/aussie/config"
)

var orderEmailTmpls = template.Must(template.New("mails").Funcs(template.FuncMap{
	"fmt_product_name": func(name string) string {
		return ProductNameLabels[name]
	},
	"full_url": config.FullURL,
	"now":      func() time.Time { return time.Now() },
}).Parse(`
{{define "bookings"}}
	<html>
	<body>
		<div style="border: 0.7em solid #573; border-radius: 2em; font-family: verdana; padding: 1em;">
			<img src="{{full_url}}/img/logo.png">
			<div style="display: block; margin: 2em 0 3em 0; text-align: justify; font-family: arial, verdana, tahoma; color: black;">
				<br>
				<p>Dear {{.Profile.FirstName}},</p>
				<p>Thank you for choosing Aussie Parking. Your booking is now confirmed.</p>
				<p>Please review your booking details below and contact us via tel 07 5599 3331 or email bookings@aussieparking.com.au as soon as possible if you need to make any changes.</p>

				<h3>YOUR DETAILS:</h3>
				<p>
					Name:    {{.Profile.FullName}}<br>
					Phone:    {{.Profile.Phone}}<br>
					Email:    {{.User.Email}}
				</p>

				<h3>BOOKING DETAILS:</h3>
				<p>
					Parking Type:      {{fmt_product_name .ParkingProductName}}<br>
					Date of departure:  {{.From.Format "02/01/2006 15:04"}}<br>
					Date of arrival:    {{.To.Format "02/01/2006 15:04"}}<br>
					Number of passengers: {{.PeopleNum}}<br>
					Flight reference:    {{.ReturnFlight}}<br>
					Rego no:    {{.CarRego}}<br>
					Make:    {{.CarMake}}<br>
					Model:    {{.CarModel}}
				</p>
				<p>Comments: {{.Note}}</p>

				<p>The cost of parking for the dates selected above is ${{.FormatedAmount}}.</p>
				<p>Our cancellation policy and other service agreement terms are outlined in our <a href="{{full_url}}/terms-and-conditions">Terms and Conditions</a>.</p>

				<h3>OUR LOCATION:</h3>
				<p>Our office is located at 56 Ourimbah Road Tweed Heads NSW 2485. Our shuttle bus will transfer you to and from the Gold Coast Airport.</p>
				<p>
					Please visit this link:
					<a href="{{full_url}}/AussieAirportParking-Ourinmbah-Directions.pdf">{{full_url}}/AussieAirportParking-Ourinmbah-Directions.pdf</a>
					to download a PDF map and directions to Aussie Parking.
				</p>

				<p style="color: red;">*Please arrive at our office at least 15 minutes before the time you wish to be at the airport.</p>
				<p style="color: red;">**Please also note that Aussie Parking operates to QLD time (NOT Daylight Savings time).</p>

				<p>Thank you for your booking and we looking forward to seeing you.</p>

				<p>
					Aussie Parking  |  07 5599-3331  |  56 Ourimbah Road<br>
					bookings@aussieparking.com.au  |  www.aussieparking.com.au
				</p>
			</div>
		</div>
	</body>
	</html>
{{end}}

{{define "payment"}}
	<html>
	<body>
		<div style="border: 0.7em solid #573; border-radius: 2em; font-family: verdana; padding: 1em;">
			<img src="{{full_url}}/img/logo.png">
			<div style="display: block; margin: 2em 0 3em 0; text-align: justify; font-family: arial, verdana, tahoma; color: black;">
				<br>
				<h3>TAX INVOICE - AUSSIE PARKING</h3>

				<p>
					56 Ourimbah Road<br/>
					Tweed Heads NSW 2485<br/>
					www.aussieparking.com.au<br/>
					07 5599 3331 ABN: 30 155 163 063
				</p>

				<p>{{now.Format "02/01/2006"}}</p>

				<p>Dear {{.Profile.FirstName}},</p>
				<p>Thank you for your payment of ${{.FormatedAmount}} (incl. GST).</p>
				<p>Our cancellation policy and other service agreement terms are outlined in our <a href="{{full_url}}/terms-and-conditions">Terms and Conditions</a>.</p>
				<p>We look forward to welcoming you at our facilities of Ourimbah Road, and our team is available by phone, or email, should you have questions or need additional information.</p>

				<p>
					Aussie Parking  |  07 5599-3331  |  56 Ourimbah Road<br>
					bookings@aussieparking.com.au  |  www.aussieparking.com.au
				</p>
			</div>
		</div>
	</body>
	</html>
{{end}}

{{define "paymnet_admin"}}
	<html>
	<body>
		<div style="border: 0.7em solid #777; border-radius: 2em; font-family: verdana; padding: 1em;">
			<img src="{{full_url}}/img/logo.png">
			<div style="display: block; margin: 2em 0 3em 0; text-align: justify; font-family: arial, verdana, tahoma; color: black;">
				<br>
				<h3>AN ONLINE PAYMENT HAS BEEN RECEIVED</h3>
				<p>Dear Admin,<p>
				<p>Your client {{.Profile.FullName}}</p>
				<p>has just paid their booking, amounting to: {{.FormatedAmount}} AUD$</p>
				<p>Using the online form.</p>
				<p>
					Best Regards,<br>
					Aussie Parking  |  07 5599-3331  |  56 Ourimbah Road<br>
					bookings@aussieparking.com.au  |  www.aussieparking.com.au
				</p>
			</div>
		</div>
	</body>
	</html>
{{end}}

{{define "bookings_admin"}}
	<html>
	<body>
		<div style="border: 0.7em solid #777; border-radius: 2em; font-family: verdana; padding: 1em;">
			<img src="{{full_url}}/img/logo.png">
			<div style="display: block; margin: 2em 0 3em 0; text-align: justify; font-family: arial, verdana, tahoma; color: black;">
				<br>
				<h3>NEW BOOKING RECEIVED</h3>
				<p>Dear Aussie Airport Parking Team,<p>
				<p>The following booking has just been made from the Aussie Airport Parking website.</p>
				<p>
					Name: {{.Profile.FullName}}<br>
					Email: {{.User.Email}}<br>
					Phone: {{.Profile.Phone}}<br>
					Departure Date: {{.From.Format "02/01/2006 15:04"}}<br>
					Pick up Date: {{.To.Format "02/01/2006 15:04"}}<br>
					Indoor/Under Cover/Outdoor: {{fmt_product_name .ParkingProductName}}<br>
					Comments: {{.Note}}<br>
					Days: {{.ParkingDays}}<br>
					Total: ${{.FormatedAmount}}<br>
					Payment: {{.PaymentType}}<br>
					No of people: {{.PeopleNum}}<br>
					Flight no: {{.ReturnFlight}}<br>
					Rego no: {{.CarRego}}<br>
					Make: {{.CarMake}}<br>
					Model: {{.CarModel}}<br>
				</p>
				<p>
					Best Regards,<br>
					Aussie Parking  |  07 5599-3331  |  56 Ourimbah Road<br>
					bookings@aussieparking.com.au  |  www.aussieparking.com.au
				</p>
			</div>
		</div>
	</body>
	</html>
{{end}}
`))
