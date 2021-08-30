package controllers

import (
	"github.com/labstack/echo/v4"
	"main/database"
	"main/models"
	"net/http"
)

type UpdateDbController struct {
	raidersRepository *database.RaidersRepository
}

func NewUpdateDbController(repository *database.RaidersRepository) *UpdateDbController {
	return &UpdateDbController{raidersRepository: repository}
}

func (rc UpdateDbController) UpdateRaiders(c echo.Context) error {
	var r = models.Raider{Id: 5, Name: "тестовый", ClassId: 9, Level: 60, Rank: 4, RaceId: 10}
	raiders, err := rc.raidersRepository.Save(r)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}
	c.JSON(http.StatusOK, raiders)

	return nil
}
