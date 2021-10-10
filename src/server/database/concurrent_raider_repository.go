package database

import (
	"main/models"

	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
)

type ConcurrentRaiderRepository struct {
	db sqlx.DB
}

func NewConcurrentRaiderRepository(database sqlx.DB) *ConcurrentRaiderRepository {
	database.SetMaxIdleConns(20)
	database.SetMaxOpenConns(200)
	return &ConcurrentRaiderRepository{db: database}
}

func (crr ConcurrentRaiderRepository) GetAll() ([]models.Raider, error) {

	var raiders []models.Raider
	err := crr.db.Select(&raiders, "select * from raiders")
	if err != nil {
		return nil, err
	}

	return raiders, nil
}
