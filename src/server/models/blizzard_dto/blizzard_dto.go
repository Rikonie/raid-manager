package models

type BlizzDTO_Memeber struct {
	Rank      int64              `json:"rank"`
	Character BlizzDTO_Character `json:"character"`
}

type BlizzDTO_Character struct {
	Id    int64  `json:"id"`
	Level int64  `json:"level"`
	Name  string `json:"name"`
	PlayableRace PlayableRace `json:"playable_race"`
	PlayableClass PlayableClass `json:"playable_class"`
}
type PlayableRace struct {
	Id int64 `json:"id"`
}
type PlayableClass struct {
	Id int64 `json:"id"`
}
