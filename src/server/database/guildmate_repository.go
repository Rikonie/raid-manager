package database

import (
	"fmt"
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"log"
	"main/models"
	"os"
)

type GuildmateRepository struct {
	connectionString string
}

func NewGuildmateRepository(connectionString string) *GuildmateRepository {
	return &GuildmateRepository{connectionString: connectionString}
}

func (rr GuildmateRepository) GetAll() ([]models.Guildmate, error) {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		return nil, err
	}
	defer conn.Close()

	var guildmates []models.Guildmate
	err = conn.Select(&guildmates, "select * from guildmates")
	if err !=nil {
		return nil, err
	}

	return guildmates, nil
}

func (rr GuildmateRepository) GetPage(size int, page int) ([]models.Guildmate, int, error) {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	count:= 0;
	if err != nil {
		return nil, count, err
	}
	defer conn.Close()

	offset := size * (page - 1)
	list:= []models.Guildmate{}

	SQL := `SELECT * FROM "guildmates" ORDER BY "id" LIMIT $2 OFFSET $1`

	rows, err := conn.Queryx(SQL, offset, size)
	if err != nil {
		log.Println(err)
		return nil, count, err
	}
	for rows.Next() {
		g :=models.Guildmate{}
		err = rows.StructScan(&g)
		if err != nil {
			log.Println(err)
			return nil, count, err
		}
		list = append(list, g)

	}

	countSql := `select count(*) from guildmates`
	err = conn.Get(&count,countSql)

	return list, count,  nil
}

func (rr GuildmateRepository) Save(guildmate models.Guildmate) ([]models.Guildmate, error) {
	conn, err := sqlx.Connect("pgx", rr.connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
	}
	defer conn.Close()

	query := `INSERT INTO guildmates(id, name, class_id, level, rank, race_id) VALUES(:id,:name,:class_id,:level,:rank,:race_id)`

	_, er := conn.NamedExec(query, &guildmate)
	if er != nil {
		return nil,er
	}

	return []models.Guildmate{guildmate}, er
}
