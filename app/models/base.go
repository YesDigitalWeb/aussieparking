package models

import "time"

type Base struct {
	Id        uint64
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time
}
