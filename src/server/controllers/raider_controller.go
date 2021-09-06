package controllers

import (
	"github.com/labstack/echo/v4"
	"main/database"
	"main/models"
	"net/http"
)

type RaiderController struct {
	repository *database.RaiderRepository
}

func NewRaiderController(repository *database.RaiderRepository) *RaiderController {
	return &RaiderController{repository: repository}
}

func (rc RaiderController) ReturnRaiders(c echo.Context) error {
	guildmates, err := rc.repository.GetAll()

	if err == nil {
		c.JSON(http.StatusOK, guildmates)
	}

	return err
}

func (rc RaiderController) CreateRaider(c echo.Context) error {

	r:=models.Raider{}
	if err := c.Bind(&r); err != nil {
		return err
	}

	err := rc.repository.Save(r)

	if err == nil {
		c.JSON(http.StatusOK, r)
	}

	return err
}

func (rc RaiderController) DeleteRaider(c echo.Context) error {

	raiderId:=c.Param("id")

	err := rc.repository.Delete(raiderId)

	if err == nil {
		c.JSON(http.StatusOK, raiderId)
	}

	return err
}
