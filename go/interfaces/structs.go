package main

import "fmt"

const uSixTeenBitMax float64 = 65535
const kmhMultiple float64 = 1.60934

type Car struct {
  gasPedal uint16 // min 0 - max 65535
  brakePedal uint16
  steeringWheel int16 // -32k - + 32k
  topSpeedKmh float64
}

// Add method kmh to struct Car
func (c *Car) kmh() float64 {
  return float64(c.gasPedal) * (c.topSpeedKmh/uSixTeenBitMax)
}

// Add method mph to struct Car
func (c *Car) mph() float64 {
  return float64(c.gasPedal) * (c.topSpeedKmh/uSixTeenBitMax/kmhMultiple)
}

func (c *Car) newTopSteep(newSpeed float64) {
  c.topSpeedKmh = newSpeed
}

func main() {
  newCar := Car{gasPedal: 65000,
              brakePedal: 0,
              steeringWheel: 12561,
              topSpeedKmh: 225.0}

  fmt.Println(newCar.gasPedal) // 65000
  fmt.Println(newCar.brakePedal) // 0
  fmt.Println(newCar.steeringWheel) // 12561
  fmt.Println(newCar.topSpeedKmh) // 225.0

  fmt.Println(newCar.kmh()) // 223.16319523918517
  fmt.Println(newCar.mph()) // 138.6675253452876
  newCar.newTopSteep(500)
  fmt.Println(newCar.kmh()) // 495.9182116426337
  fmt.Println(newCar.mph()) // 308.15005632286136
}
