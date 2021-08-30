package models

type Raider struct {
	Id      int64  `db:"id"`
	Name    string `db:"name"`
	ClassId int64  `db:"classId"`
	Level   int64  `db:"level"`
	Rank    int64  `db:"rank"`
	RaceId  int64  `db:"raceId"`
}
