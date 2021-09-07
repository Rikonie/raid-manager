package models


type GuildEvent struct {
	Id      int64  `db:"id" json:"id"`
	Description    string `db:"description" json:"description"`
	DateTimeStart int64  `db:"date_time_start" json:"dateTimeStart"`
	DateTimeEnd   int64  `db:"date_time_end" json:"dateTimeEnd"`
}
