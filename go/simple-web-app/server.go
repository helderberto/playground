package main

import (
  "fmt"
  "net/http"
)

func indexHandler(response http.ResponseWriter, request *http.Request) {
  fmt.Fprintf(response, "Home - Web App")
}

func aboutHandler(response http.ResponseWriter, request *http.Request) {
  fmt.Fprintf(response, "About - Web App")
}

func main() {
  http.HandleFunc("/", indexHandler)
  http.HandleFunc("/about/", aboutHandler)
  http.ListenAndServe(":8000", nil)
}
