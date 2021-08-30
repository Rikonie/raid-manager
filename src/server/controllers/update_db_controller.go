package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/labstack/echo/v4"
	"main/database"
	"main/models"
	blizzdto "main/models/blizzard_dto"
	"net/http"
)

type UpdateDbController struct {
	guildmateRepository *database.GuildmateRepository
}

func NewUpdateDbController(repository *database.GuildmateRepository) *UpdateDbController {
	return &UpdateDbController{guildmateRepository: repository}
}

func (uc UpdateDbController) UpdateGuildmate(c echo.Context) error {
	var r = models.Guildmate{Id: 5, Name: "тестовый", ClassId: 9, Level: 60, Rank: 4, RaceId: 10}
	raiders, err := uc.guildmateRepository.Save(r)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}
	c.JSON(http.StatusOK, raiders)

	return nil
}

func (uc UpdateDbController) UpdateGuildmateFromAPI(c echo.Context) error {

	resp, err := http.Get("http://localhost:3000/members")
	if err != nil {
		fmt.Println(err)
		return nil
	}

	var js string
	defer resp.Body.Close()
	for true {

		bs := make([]byte, 1014)
		n, err := resp.Body.Read(bs)
		js = js + string(bs[:n])

		if n == 0 || err != nil {
			break
		}
	}

	var members []blizzdto.BlizzDTO_Memeber

	json.Unmarshal([]byte(js), &members)
	/*for _, s := range members {
		rc.guildmateRepository.Save(
			models.Guildmate{
				Id: s.Character.Id,
				Name: s.Character.Name,
				Rank: s.Rank,
				RaceId: s.Character.PlayableRace.Id,
				Level: s.Character.Level,
				ClassId: s.Character.PlayableClass.Id,
			})
	}*/

	c.JSON(http.StatusOK, members)
	return nil
}
