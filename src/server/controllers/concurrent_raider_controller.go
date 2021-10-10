package controllers

import (
	"main/database"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ConcurrentRaiderController struct {
	repository *database.ConcurrentRaiderRepository
}

func NewConcurrentRaiderController(repository *database.ConcurrentRaiderRepository) *ConcurrentRaiderController {
	return &ConcurrentRaiderController{repository: repository}
}

func (rc ConcurrentRaiderController) ReturnRaiders(c echo.Context) error {
	guildmates, err := rc.repository.GetAll()

	if err == nil {
		c.JSON(http.StatusOK, guildmates)
	}

	return err
}
