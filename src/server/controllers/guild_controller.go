package controllers

import (
	"github.com/labstack/echo/v4"
	"main/database"
	"net/http"
)

type GuildController struct {
	repository *database.GuildRepository
}

func NewGuildController(repository *database.GuildRepository) *GuildController {
	return &GuildController{repository: repository}
}

func (gc GuildController) ReturnGuild(c echo.Context) error {
	g, err := gc.repository.GetCurrent()
	if err == nil {
		c.JSON(http.StatusOK, g)
	}

	return err
}

func (gc GuildController) ReturnGuilds(c echo.Context) error {
	g, err := gc.repository.GetAll()
	if err == nil {
		c.JSON(http.StatusOK, g)
	}

	return err
}
