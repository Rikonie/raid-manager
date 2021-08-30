package controllers

import (
	"github.com/labstack/echo/v4"
	"main/database"
	"net/http"
)

type RaiderController struct {
	repository *database.RaidersRepository
}

func NewRaiderController(repository *database.RaidersRepository) *RaiderController {
	return &RaiderController{repository: repository}
}

func (rc RaiderController) ReturnRaiders(c echo.Context) error {
	raiders, err := rc.repository.GetAll()
	if err == nil {
		c.JSON(http.StatusOK, raiders)
	}
	return err
}
