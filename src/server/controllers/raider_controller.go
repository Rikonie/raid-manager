package controllers

import (
	"errors"
	"github.com/labstack/echo/v4"
	"main/database"
	"main/models"
	"net/http"
	"strconv"
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

func (rc RaiderController) ReturnRaidersPage(c echo.Context) error {
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

	raiders, count, err := rc.repository.GetPage(size, page)
	if err == nil {

		data:= struct {
			Raiders []models.Raider `json:"raiders"`
			Count int `json:"count"`
		}{
			Raiders: raiders ,
			Count: count,
		}

		c.JSON(http.StatusOK, data)
	}

	return err
}
