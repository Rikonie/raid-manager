package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"main/controllers"
	"main/database"
	"net/http"
	"os"
	"time"
)

func main() {
	//Echo instance
	app := echo.New()

	const CONNECTION_STRING = "postgres://raidmanager:raidmanager_pass!@kpakozz96pyc.xyz:5433/raid"

	// Middleware
	app.Use(middleware.Logger())
	app.Use(middleware.Recover())

	//db
	guildmateRepository := database.NewGuildmateRepository(CONNECTION_STRING)
	guildRepository := database.NewGuildRepository(CONNECTION_STRING)
	raiderRepository := database.NewRaiderRepository(CONNECTION_STRING)
	eventRepository := database.NewGuildEventRepository(CONNECTION_STRING)


	//Controllers
	guildController := controllers.NewGuildController(guildRepository)
	guildmateController := controllers.NewGuildmateController(guildmateRepository)
	raiderController := controllers.NewRaiderController(raiderRepository)
	eventController := controllers.NewGuildEventController(eventRepository)
	//updateDbController := controllers.NewUpdateDbController(guildmateRepository)

	// Routes
	app.GET("/", hello)
	app.GET("/guildmates", guildmateController.ReturnGuildmates)
	app.GET("/guildmates/:page", guildmateController.ReturnGuildmatesPage)
	app.GET("/guildmates/:page/:size", guildmateController.ReturnGuildmatesPage)

	app.GET("/raiders", raiderController.ReturnRaiders)
	app.POST("/raiders", raiderController.CreateRaider)
	app.DELETE("/raiders/delete/:id", raiderController.DeleteRaider)

	app.GET("/guilds", guildController.ReturnGuilds)
	app.GET("/guild", guildController.ReturnGuild)

	app.GET("/events", eventController.ReturnEvents)
	app.POST("/events", eventController.CreateEvent)
	//app.GET("/update", updateDbController.UpdateGuildmateFromAPI)

	app.HTTPErrorHandler = CustomHTTPErrorHandler

	app.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"*"},
	}))

	// Start server
	app.Logger.Fatal(app.Start(":8081"))
}

func hello(c echo.Context) error {
	time.Sleep(1 * time.Second)
	return c.String(http.StatusOK, "Hello, World!")
}

func CustomHTTPErrorHandler(err error, c echo.Context) {
	c.JSON(http.StatusInternalServerError, err)
	fmt.Fprintf(os.Stderr, "\nError via request " + c.Path() + " :" , err)
}

