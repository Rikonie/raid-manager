package database

import (
	"fmt"
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"log"
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

func (rr RaiderRepository) Delete(raiderId string)  error {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		return err
	}
	defer conn.Close()

	query := `Delete from raiders where id =$1`

	_, er := conn.Exec(query, raiderId)
	if er != nil {
		return er
	}

	return nil
}

func (rr RaiderRepository) GetPage(size int, page int) ([]models.Raider, int, error) {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	count:= 0;
	if err != nil {
		return nil, count, err
	}
	defer conn.Close()

	offset := size * (page - 1)
	list := []models.Raider{}

	SQL := `SELECT * FROM "raiders" ORDER BY "id" LIMIT $2 OFFSET $1`

	rows, err := conn.Queryx(SQL, offset, size)
	if err != nil {
		log.Println(err)
		return nil, count, err
	}
	for rows.Next() {
		g :=models.Raider{}
		err = rows.StructScan(&g)
		if err != nil {
			log.Println(err)
			return nil, count, err
		}
		list = append(list, g)

	}

	countSql := `select count(*) from raiders`
	err = conn.Get(&count,countSql)

	return list, count,  nil
}
