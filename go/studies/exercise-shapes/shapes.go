package shapes

import "math"

const perimeterFactor = 2
const triangleFactor = 0.5

type Shape interface {
	Area() float64
}

// Rectangle represents a single rectangle
type Rectangle struct {
	Width  float64
	Height float64
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

// Circle represents a single circle
type Circle struct {
	Radius float64
}

func (c Circle) Area() float64 {
	return math.Pi * c.Radius * c.Radius
}

type Triangle struct {
	Base   float64
	Height float64
}

func (c Triangle) Area() float64 {
	return (c.Base * c.Height) * triangleFactor
}

// Perimeter will receive Rectangle{Width, Height} and calculate with multiple by factor
func Perimeter(rectangle Rectangle) float64 {
	return (rectangle.Width + rectangle.Height) * perimeterFactor
}

// Area will receive Rectangle{Width, Height} and multiply sides
func Area(rectangle Rectangle) float64 {
	return rectangle.Width * rectangle.Height
}
