package main

import (
	"fmt"
	"math"
)

// Will give an error
func main() {
	fmt.Println(math.pi) // => cannot refer to unexported name math.pi
}
