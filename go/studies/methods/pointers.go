package main

import "fmt"

func main(){
  x := 15
  a := &x           // memory address

  fmt.Println(a)
  fmt.Println(*a)   // 15
  *a = 5
  fmt.Println(x)    // 5
  *a = *a**a
  fmt.Println(x)    // 25
  fmt.Println(*a)   // 25
}
