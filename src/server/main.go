package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"main/controllers"
	"main/database"
	"net/http"
)

func main() {
	//Echo instance
	app := echo.New()

	// Middleware
	app.Use(middleware.Logger())
	app.Use(middleware.Recover())

	//db
	raidersRepository:= database.NewRaidersRepository( "postgres://raidmanager:raidmanager_pass!@kpakozz96pyc.xyz:5433/raid","raiders")

	//Controllers
	raiderController := controllers.NewRaiderController(raidersRepository)
	updateDbController := controllers.NewUpdateDbController(raidersRepository)

	// Routes
	app.GET("/", hello)
	app.GET("/raiders", raiderController.ReturnRaiders)
	app.GET("/update", updateDbController.UpdateRaiders)

	// Start server
	app.Logger.Fatal(app.Start(":8081"))
}

func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
