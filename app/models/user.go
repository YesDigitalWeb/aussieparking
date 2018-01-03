package models

type User struct {
	Base
	Email string
}

type Profile struct {
	Base
	FirstName string
	LastName  string
	Phone     string
	// User      User
	// UserId    uint64
}

func (p Profile) FullName() string {
	return p.FirstName + " " + p.LastName
}
