package models

type Raider struct {
	Id      int64  `db:"id" json:"id"`
	Name    string `db:"name" json:"name"`
	ClassId int64  `db:"class_id" json:"classId"`
	Level   int64  `db:"level" json:"level"`
	Rank    int64  `db:"rank" json:"rank"`
	RaceId  int64  `db:"race_id" json:"raceId"`
}
