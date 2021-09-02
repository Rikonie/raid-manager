package database

import (
	"fmt"
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"main/models"
	"os"
)

type RaiderRepository struct {
	connectionString string
}

func NewRaiderRepository(connectionString string) *RaiderRepository {
	return &RaiderRepository{connectionString: connectionString}
}

func (rr RaiderRepository) GetAll() ([]models.Raider, error) {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		return nil, err
	}
	defer conn.Close()

	var raiders []models.Raider
	err = conn.Select(&raiders, "select * from raiders")
	if err !=nil {
		return nil, err
	}

	return raiders, nil
}

func (rr RaiderRepository) Save(raider models.Raider)  error {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		return err
	}
	defer conn.Close()

	query := `INSERT INTO raiders(id, name, class_id, level, rank, race_id) VALUES(:id,:name,:class_id,:level,:rank,:race_id)`

	_, er := conn.NamedExec(query, &raider)
	if er != nil {
		return er
	}

	return nil
}
