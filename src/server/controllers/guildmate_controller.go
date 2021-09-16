package controllers

import (
	"errors"
	"github.com/labstack/echo/v4"
	"main/database"
	"main/models"
	"net/http"
	"strconv"
)

type GuildmateController struct {
	repository *database.GuildmateRepository
}

func NewGuildmateController(repository *database.GuildmateRepository) *GuildmateController {
	return &GuildmateController{repository: repository}
}

func (gc GuildmateController) ReturnGuildmates(c echo.Context) error {
	guildmates, err := gc.repository.GetAll()
	if err == nil {
		c.JSON(http.StatusOK, guildmates)
	}

	return err
}

func (gc GuildmateController) ReturnGuildmatesPage(c echo.Context) error {
	size := 10
	page := 0
	count := 0

	if i, err := strconv.Atoi(c.Param("page")); err == nil {
		page = i
	}

	if j, err := strconv.Atoi(c.Param("size")); err == nil {
		size = j
	}

	if (size <= 0) || (page < 1) {
		return errors.New("please choose reasonable values of page and size")
	}

	guildmates,count, err := gc.repository.GetPage(size, page)
	if err == nil {

		data:= struct {
			guildmates []models.Guildmate
			count int
		}{
			guildmates: guildmates,
			count: count,
		}

		c.JSON(http.StatusOK, data)
	}

	return err
}
