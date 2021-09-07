package controllers

import (
	"github.com/labstack/echo/v4"
	"main/database"
	"main/models"
	"net/http"
)

type GuildEventController struct {
	repository *database.GuildEventRepository
}

func NewGuildEventController(repository *database.GuildEventRepository) *GuildEventController {
	return &GuildEventController{repository: repository}
}

func (rc GuildEventController) ReturnEvents(c echo.Context) error {
	events, err := rc.repository.GetAll()

	if err == nil {
		c.JSON(http.StatusOK, events)
	}

	return err
}

func (rc GuildEventController) CreateEvent(c echo.Context) error {

	r:=models.GuildEvent{}
	if err := c.Bind(&r); err != nil {
		return err
	}

	err := rc.repository.Save(r)

	if err == nil {
		c.JSON(http.StatusOK, r)
	}

	return err
}
