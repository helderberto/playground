package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"
)

// User represents a single user
type User struct {
	Name string
	Time string
}

func main() {
	user := User{"Anonymous", time.Now().Format(time.Stamp)}

	templates := template.Must(template.ParseFiles("templates/base-template.html"))

	http.Handle("/static/",
		http.StripPrefix("/static/",
			http.FileServer(http.Dir("static"))))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if name := r.FormValue("name"); name != "" {
			user.Name = name
		}

		if err := templates.ExecuteTemplate(w, "base-template.html", user); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	fmt.Println("Listening on http://localhost:8080")
	fmt.Println(http.ListenAndServe(":8080", nil))
}
