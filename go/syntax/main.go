package main

// Multiple packages
import (
  "fmt"
  "math/rand"
)

func foo() {
  fmt.Println("Hello")
}

// Considered init method in a class
func main() {
  fmt.Println("A number from 1-100", rand.Intn(100));
  foo()
}
