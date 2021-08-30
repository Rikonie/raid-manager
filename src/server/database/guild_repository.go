package database

import (
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"main/models"
)

type GuildRepository struct {
	connectionString string
}

const NOT_TODAY_ID = 87202636

func NewGuildRepository(connectionString string) *GuildRepository {
	return &GuildRepository{connectionString: connectionString}
}

func (gr GuildRepository) GetAll() ([]models.Guild, error) {
	conn, err := sqlx.Connect("pgx", gr.connectionString)
	if err != nil {
		return nil, err
	}
	defer conn.Close()

	var guilds []models.Guild
	err = conn.Select(&guilds, "select * from guilds")
	if err !=nil {
		return nil, err
	}

	return guilds, nil
}

func (gr GuildRepository) GetCurrent() (*models.Guild, error) {
	conn, err := sqlx.Connect("pgx", gr.connectionString)
	if err != nil {
		return nil, err
	}
	defer conn.Close()

	var guild models.Guild
	err = conn.QueryRowx("select * from guilds where id = 87202636").StructScan(&guild)
	if err != nil {
		return nil, err
	}

	return &guild, nil
}

