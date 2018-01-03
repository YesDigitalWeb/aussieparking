package resources

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/qor/media_library"

	"github.com/jinzhu/gorm"
	"github.com/jinzhu/now"
	"github.com/qor/admin"
	"github.com/qor/publish"
	"github.com/qor/qor"
	"github.com/qor/qor/resource"
	"github.com/qor/roles"

	"github.com/theplant/aussie/app/models"
	"github.com/theplant/aussie/db"
)

var (
	Admin *admin.Admin
	Range *admin.Resource
	// PublishDB *gorm.DB
	PublishDB *publish.Publish
	During    = func(begin time.Time, end time.Time, typ string) func(db *gorm.DB) *gorm.DB {
		return func(db *gorm.DB) *gorm.DB {
			switch typ {
			case "checkin":
				return db.Where("(`from` >= ? AND `from` <= ?)", begin, end)
			case "checkout":
				return db.Where("`to` >= ? AND `to` <= ?", begin, end)
			case "all":
				fallthrough
			default:
				return db.Where("((`from` >= ? AND `from` <= ?) OR (`to` >= ? AND `to` <= ?))", begin, end, begin, end)
			}
		}
	}

	Search = func(keyword string) func(db *gorm.DB) *gorm.DB {
		return func(db *gorm.DB) *gorm.DB {
			columns := []string{"orders.paypal_ref", "orders.car_rego", "orders.car_make", "orders.car_model", "users.email", "profiles.first_name", "profiles.last_name", "profiles.phone"}
			keywords := []interface{}{}
			sqls := []string{}
			for _, column := range columns {
				sqls = append(sqls, fmt.Sprintf("%s LIKE ?", column))
				keywords = append(keywords, `%%`+keyword+`%%`)
			}
			sql := strings.Join(sqls, " OR ")

			return db.Joins("left join users on users.id = orders.user_id left join profiles on profiles.id = orders.profile_id").Where(sql, keywords...)
		}
	}
)

const (
	RoleAdmin = "admin"
	RoleStaff = "staff"
	RoleSEO   = "seo-agency"
)

func init() {
	db.DraftDB = db.DB
	Admin = admin.New(&qor.Config{DB: db.DB})
	Admin.RegisterMetaConfigor("datetime", func(meta *admin.Meta) {
		if meta.FormattedValuer != nil {
			return
		}
		meta.SetFormattedValuer(func(value interface{}, context *qor.Context) interface{} {
			switch date := meta.GetValuer()(value, context).(type) {
			case *time.Time:
				if date == nil {
					return ""
				}
				if date.IsZero() {
					return ""
				}
				return date.Format(time.RFC3339)
			case time.Time:
				if date.IsZero() {
					return ""
				}
				return date.Format(time.RFC3339)
			default:
				return date
			}
		})
	})

	Admin.SetAuth(&Auth{})

	models.RegisterPromotionHandlers(Admin)

	for _, r := range []string{RoleAdmin, RoleStaff, RoleSEO} {
		role := r
		roles.Register(role, func(req *http.Request, currentUser interface{}) bool {
			if currentUser == nil {
				return false
			}
			return currentUser.(models.AdminUser).Role == role
		})
	}

	// Range
	Range = Admin.AddResource(
		&models.Range{},
		&admin.Config{
			Name:       "PriceChange",
			Permission: roles.Allow(roles.CRUD, RoleAdmin).Allow(roles.Read, RoleStaff),
		},
	)
	Range.IndexAttrs("Id", "Start", "End", "Weekdays", "UpdatedAt", "SpecialTimeSince")
	Range.Meta(&admin.Meta{Name: "Start", Valuer: func(value interface{}, context *qor.Context) interface{} {
		return value.(*models.Range).Start.Format("2006-01-02 15:04")
	}})

	Range.Meta(&admin.Meta{Name: "End", Valuer: func(value interface{}, context *qor.Context) interface{} {
		return value.(*models.Range).End.Format("2006-01-02 15:04")
	}})

	Range.Meta(&admin.Meta{Name: "UpdatedAt", Valuer: func(value interface{}, context *qor.Context) interface{} {
		return value.(*models.Range).UpdatedAt.Format("2006-01-02 15:04")
	}})

	// RangeProduct
	// RangeProduct := Admin.AddResource(&models.RangeProduct{}, nil)
	// RangeProduct.IndexAttrs("Id", "Price", "SpecialPrice", "Product.Name", "Product.CarType")

	// Note
	Note := Admin.AddResource(
		&models.Note{},
		&admin.Config{
			Name:       "note",
			Permission: roles.Allow(roles.CRUD, RoleAdmin).Allow(roles.Read, RoleStaff),
		},
	)
	Note.Meta(&admin.Meta{Name: "OrderId"})
	Note.Meta(&admin.Meta{Name: "UserId"})
	Note.Meta(&admin.Meta{
		Name: "Explanation", Type: "string",
		Valuer: func(v interface{}, c *qor.Context) interface{} { return "" },
		Setter: func(res interface{}, metaValue *resource.MetaValue, context *qor.Context) {
			note := res.(*models.Note)
			if e, ok := metaValue.Value.(string); ok && e != "" {
				note.Note = note.Note + "\n\n" + e
			}
		},
	})

	// Order Configurations
	//
	// Can't use Qor permission here because of Order resource is also used
	// by controllers.Book for json decoding, adding permission here break it.
	// Permission is handled manually in template and routes.handleAdminAccess
	//
	// 		&admin.Config{Permission: roles.Allow(roles.CRUD, RoleAdmin).Allow(roles.CRUD, RoleStaff)}
	//
	order := Admin.AddResource(&models.Order{})
	order.FindManyHandler = func(result interface{}, c *qor.Context) (err error) {
		if _, ok := c.GetDB().Get("qor:getting_total_count"); ok {
			return
		}
		// For json request of table "Check In/Out Today". FuncMap scope call is not included here.
		isCheckInOutTable := c.Request != nil && c.Request.URL.Query().Get("scopes") == "Checkins & Checkouts Today"

		scope := c.GetDB()
		if isCheckInOutTable {
			scope = checkInOutTodayOrders(scope, nil)
		}
		scope = scope.Select("orders.*").
			Set("gorm:order_by_primary_key", "ASC").
			Preload("Notes", "state NOT IN (?)", []string{"new", "ready"}).
			Preload("Profile").
			Preload("User")

		// clear limit and offset for dashboard tables
		query := c.Request.URL.Query()
		qscope, path := query.Get("scopes"), c.Request.URL.Path
		isDashboardTableRequest := (path == "/admin" || path == "/admin/orders.json") && qscope != "all" && qscope != "checkout" && qscope != "checkin"
		isBookingListWithDate := query.Get("current_date") != "" || path == "/admin/orders"
		if isDashboardTableRequest || isBookingListWithDate {
			scope = scope.Limit(-1).Offset(-1).Order("`from`")
		}
		err = scope.Find(result).Error
		if err != nil {
			return
		}

		if orders, ok := result.(*[]*models.Order); ok {
			if isCheckInOutTable {
				models.SortOrdersForCheckInsOutsToday(*orders)
				result = orders
			} else if !isDashboardTableRequest {
				// i.e. booking list requests
				models.SortOrdersForBookingList(*orders, query.Get("current_date"))
				result = orders
			}
		}

		return
	}

	order.IndexAttrs(
		"Id",
		"Due", "CallingTime",
		"IsLateCheckInOut",
		"InOutTime", "In/Out", "From", "To",
		"BookingListInOutTime", "BookingListIn/Out",
		"Wash", "State", "Cleaning",
		"Profile.FirstName", "Profile.LastName",
		"TagNo",
		"Location", "ParkingProductName", "DetailingType",
		"CarRego", "CarMake", "CarModel",
		"PeopleNum", "ReturnFlight",
		"Days",
		"PaymentType",
		"Notes",
	)
	orderAttrs := []string{
		"Id",
		"From", "To",
		"BookingListInOutTime", "BookingListIn/Out",
		"Wash", "State", "Cleaning",
		"Profile.FirstName", "Profile.LastName", "Profile.Phone", "User.Email",
		"Amount", "Notes",
		"CarRego", "CarMake", "CarModel",
		"ReturnFlight", "PeopleNum",
		"Location", "ParkingProductName", "PaymentType",
		"PriceBreakdown", "PaypalRef",
		"CleanProductId",
		"Note", "Notes",
	}
	order.EditAttrs(orderAttrs)
	order.ShowAttrs(orderAttrs)

	for key, value := range map[string]string{
		"Profile.FirstName": "First Name",
		"Profile.LastName":  "Family Name",
		"Profile.Phone":     "Phone",
		"User.Email":        "Email",
		"CarRego":           "Rego",
		"CarMake":           "Make",
		"CarModel":          "Model",
		"PeopleNum":         "People",
		"ReturnFlight":      "Flight No.",
		"PaymentType":       "Payment",
		"From":              "Check-In",
		"To":                "Check-Out",
	} {
		order.Meta(&admin.Meta{Name: key, Label: value})
	}

	order.Meta(&admin.Meta{Name: "State"})
	order.Meta(&admin.Meta{Name: "ParkingProductName", Label: "Location", Type: "select_one", Collection: models.AllParkingTypes})
	order.Meta(&admin.Meta{
		Name:  "Location",
		Label: "Location",
		Type:  "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return models.ProductNameLabels[value.(*models.Order).ParkingProductName]
		},
	})
	order.Meta(&admin.Meta{Name: "PriceBreakdown", Type: "PriceBreakdown", Valuer: func(orderx interface{}, context *qor.Context) interface{} {
		return models.GenPriceBreakdown(context.GetDB(), *orderx.(*models.Order))
	}})
	order.Meta(&admin.Meta{Name: "Notes", Valuer: func(order interface{}, context *qor.Context) interface{} {
		if notes := order.(*models.Order).Notes; len(notes) > 0 {
			return notes
		} else {
			context.GetDB().Model(order).Where("state NOT IN (?)", []string{"new", "ready"}).Related(&notes)
			return notes
		}
	}})
	order.Meta(&admin.Meta{
		Name: "Days",
		Type: "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).ParkingDays()
		},
	})
	order.Meta(&admin.Meta{
		Name:  "InOutTime",
		Label: "Time",
		Type:  "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).CheckInOutTime()
		},
	})
	order.Meta(&admin.Meta{
		Name:  "CallingTime",
		Label: "Time",
		Type:  "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).From.Format("15:04")
		},
	})
	order.Meta(&admin.Meta{
		Name: "In/Out",
		Type: "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).InOut()
		},
	})
	order.Meta(&admin.Meta{
		Name:  "BookingListIn/Out",
		Label: "In/Out",
		Type:  "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).BookingListInOut("text", c.Request.URL.Query().Get("current_date"))
		},
	})
	order.Meta(&admin.Meta{
		Name:  "BookingListInOutTime",
		Label: "Time",
		Type:  "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).BookingListInOut("time", c.Request.URL.Query().Get("current_date"))
		},
	})
	order.Meta(&admin.Meta{
		Name: "Due",
		Type: "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			return value.(*models.Order).Due()
		},
	})
	order.Meta(&admin.Meta{
		Name: "DetailingType",
		Type: "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			order := value.(*models.Order)
			switch order.CleanProductId {
			case models.NoWorries4WDClean.Id, models.NoWorriesSedanClean.Id:
				return models.CleanTypeNoWorries
				// case models.Bonza4WDClean.Id, models.BonzaSedanClean.Id:
				// 	return models.CleanTypeBonza
			}

			return ""
		},
	})
	order.Meta(&admin.Meta{
		Name:   "TagNo",
		Label:  "Tag No",
		Type:   "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} { return "" },
	})
	order.Meta(&admin.Meta{
		Name:   "IsLateCheckInOut",
		Type:   "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} { return value.(*models.Order).IsLateCheckInOut() },
	})
	order.Meta(&admin.Meta{
		Name: "Wash",
		Type: "string",
		Valuer: func(value interface{}, c *qor.Context) interface{} {
			p := models.GetCleanProductById(value.(*models.Order).CleanProductId)
			if p == nil {
				return ""
			}
			switch p.Name {
			case models.CleanTypeNoWorries:
				return "NW"
			case models.CleanTypeBonza:
				return "B"
			}
			return p.Name
		},
	})

	// These scopes are used in dashboard
	// IMPORTANT:
	// 	Changing scope name should be careful and through because it's also used
	// 	in javascript for data refreshing.
	order.Scope(&admin.Scope{
		Name:   "Checkins & Checkouts Today",
		Handle: checkInOutTodayOrders,
	})
	order.Scope(&admin.Scope{
		Name:   "Car Detailing (Internal) For Checkout Due Tomorrow",
		Handle: internalCarDetailingOrders,
	})
	order.Scope(&admin.Scope{
		Name:   "Car Detailing (Outsourced)",
		Handle: outsourcedCarDetailingOrders,
	})
	order.Scope(&admin.Scope{
		Name:   "Calling List (Unconfirmed Bookings)",
		Handle: unconfirmedDueTomorrowOrders,
	})

	order.Scope(&admin.Scope{Name: "default", Handle: func(db *gorm.DB, context *qor.Context) *gorm.DB {
		db = db.Where("state NOT IN (?)", []string{"new", "ready"})
		if context.Request != nil {
			dateStr := context.Request.Form.Get("current_date")
			scope := context.Request.Form.Get("scopes")

			if keyword := context.Request.Form.Get("keyword"); keyword != "" {
				db = db.Scopes(Search(keyword))
			}

			if date, err := now.Parse(dateStr); err == nil {
				date := now.New(date)
				db = db.Scopes(During(date.BeginningOfDay(), date.EndOfDay(), scope))
			}

			if context.Request.URL.Path == "/admin/orders" && context.Request.URL.RawQuery == "" {
				date := now.New(time.Now())
				db = db.Scopes(During(date.BeginningOfDay(), date.EndOfDay(), scope))
			}
		}
		return db
	}, Default: true})

	actions := map[string]string{
		"confirm":   "confirmed",
		"cancel":    "cancelled",
		"paid":      "paid",
		"check_in":  "check-in",
		"check_out": "check-out",

		// clean state
		"clean":       models.CleanStateCleaned,
		"order_clean": models.CleanStateOrdered,
	}

	for keyx, valuex := range actions {
		key, value := keyx, valuex
		order.Action(&admin.Action{
			Name: key,
			Handle: func(arg *admin.ActionArgument) (err error) {
				for _, orderx := range arg.FindSelectedRecords() {
					order := orderx.(*models.Order)
					if key == "Clean" {
						order.Cleaning = value
						order.CleanedAt = time.Now()
					} else if key == "OrderClean" {
						order.Cleaning = value
						order.CleaningOrderedAt = time.Now()
					} else {
						order.SetState(value)
					}
					err = arg.Context.GetDB().Save(&order).Error
					if err != nil {
						return
					}
				}

				return
			},
		})
	}

	adminUser := Admin.AddResource(
		&models.AdminUser{},
		&admin.Config{
			Name:       "AdminUser",
			Permission: roles.Allow(roles.CRUD, RoleAdmin).Allow(roles.Read, RoleStaff),
		},
	)
	adminUser.IndexAttrs("Name", "Email", "FmtedRole")
	adminUser.EditAttrs("Id", "Name", "Email", "Role", "Password", "ConfirmedPassword")
	adminUser.NewAttrs("Id", "Name", "Email", "Role", "Password", "ConfirmedPassword")
	adminUser.Meta(&admin.Meta{
		Name: "Password",
		Type: "password",
	})
	adminUser.Meta(&admin.Meta{
		Name: "ConfirmedPassword",
		Type: "password",
	})
	adminUser.Meta(&admin.Meta{
		Name:       "Role",
		Type:       "select_one",
		Collection: [][]string{{RoleAdmin, "Admin"}, {RoleStaff, "Staff"}, {RoleSEO, "SEO Agency"}},
	})
	adminUser.Meta(&admin.Meta{
		Name:  "FmtedRole",
		Label: "Role",
		Type:  "string",
		Valuer: func(x interface{}, c *qor.Context) interface{} {
			switch x.(*models.AdminUser).Role {
			case RoleAdmin:
				return "Admin"
			case RoleStaff:
				return "Staff"
			case RoleSEO:
				return "SEO Agency"
			}
			return ""
		},
	})

	article := Admin.AddResource(&models.Article{})
	article.IndexAttrs("Id", "Title", "Keywords", "Slug")

	richEditorAssetManager := Admin.AddResource(&media_library.AssetManager{}, &admin.Config{Invisible: true})
	article.Meta(&admin.Meta{Name: "Abstract", Type: "rich_editor", Resource: richEditorAssetManager})
	article.Meta(&admin.Meta{Name: "Content", Type: "rich_editor", Resource: richEditorAssetManager})
	article.Meta(&admin.Meta{Name: "WelcomeText", Type: "rich_editor", Resource: richEditorAssetManager})
}
