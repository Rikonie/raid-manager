package main

import (
	"encoding/json"
	"fmt"
	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
	"html"
	"log"
	"net/http"
	"os"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	http.HandleFunc("/hi", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hi")
	})

	http.HandleFunc("/raiders", returnRaiders)

	log.Fatal(http.ListenAndServe(":8081", nil))

}

func returnRaiders(w http.ResponseWriter, r *http.Request) {
	raiders := getRaiders()
	json.NewEncoder(w).Encode(raiders)
}

func getRaiders() []Raider {
	// urlExample := "postgres://username:password@localhost:5432/database_name"
	conn, err := sqlx.Connect("pgx", "postgres://raidmanager:raidmanager_pass!@kpakozz96pyc.xyz:5433/raid")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close()

	var raiders []Raider
	err = conn.Select(&raiders, "select * from guildmates")
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}

	return raiders
}

type Raider struct {
	Name    string `db:"name"`
	Id      int64  `db:"id"`
	ClassId int64  `db:"classId"`
	Level   int64  `db:"level"`
	Rank    int64  `db:"rank"`
	RaceId  int64  `db:"raceId"`
}
