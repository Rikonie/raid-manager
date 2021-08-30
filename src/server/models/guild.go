package models

type Guild struct {
	Id      int64  `db:"id" json:"id"`
	Name    string `db:"name" json:"name"`
	RealmId int64  `db:"realm_id" json:"realmId"`
	RealmName   string  `db:"realm_name" json:"realmName"`
	FactionName    string  `db:"faction_name" json:"factionName"`
	FactionType  string  `db:"faction_type" json:"factionType"`
}
