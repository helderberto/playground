package hello

import "fmt"

const helloPrefix = "Hello, "

// Hello will print Hello + name
func Hello(name string) string {
	if name == "" {
		name = "World"
	}
	return helloPrefix + name
}

func main() {
	fmt.Println(Hello("world"))
}
