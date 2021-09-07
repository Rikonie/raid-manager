package database

import (
	"fmt"
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"main/models"
	"os"
)

type GuildEventRepository struct {
	connectionString string
}

func NewGuildEventRepository(connectionString string) *GuildEventRepository {
	return &GuildEventRepository{connectionString: connectionString}
}

func (evr GuildEventRepository) GetAll() ([]models.GuildEvent, error) {
	conn, err := sqlx.Connect("pgx", evr.connectionString)
	if err != nil {
		return nil, err
	}
	defer conn.Close()

	var events []models.GuildEvent
	err = conn.Select(&events, "select * from guild_events")
	if err !=nil {
		return nil, err
	}

	return events, nil
}

func (evr GuildEventRepository) Save(event models.GuildEvent)  error {
	conn, err := sqlx.Connect("pgx", evr.connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		return err
	}
	defer conn.Close()

	query := `INSERT INTO guild_events(id, description, date_time_start, date_time_end) VALUES(:id,:description,:date_time_start,:date_time_end)`

	_, er := conn.NamedExec(query, &event)
	if er != nil {
		return er
	}

	return nil
}

func (evr GuildEventRepository) Delete(raiderId string)  error {


	return nil
}
