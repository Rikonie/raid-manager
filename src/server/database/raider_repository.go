package database

import (
	"fmt"
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"log"
	"main/models"
	"os"
)

type RaidersRepository struct {
	connectionString string
	tableName string
}

const (
	RAIDER_COLLECTION_NAME = "raiders"
)

func NewRaidersRepository(connectionString string, tableName string) *RaidersRepository {
	return &RaidersRepository{connectionString: connectionString, tableName: tableName}
}

func (rr RaidersRepository) GetAll() ([]models.Raider, error)  {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close()

	var raiders []models.Raider
	err = conn.Select(&raiders, "select * from guildmates")


	return raiders, err
}

func (rr RaidersRepository) Save( raider models.Raider) ([]models.Raider, error)  {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
	}
	defer conn.Close()

	query := `INSERT INTO guildmates(id, name, classId, level, rank, raceId) VALUES(:id,:name,:classId,:level,:rank,:raceId)`


	_, er := conn.NamedExec(query, &raider)
	if er != nil {
		log.Fatalln(er)
	}

	return []models.Raider{raider}, er
}

