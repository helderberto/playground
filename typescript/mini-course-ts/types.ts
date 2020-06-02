// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, binary)
let total: number
total = 20.3

// array (type[])
let items: number[]
items = [1, 2, 3]

let values: Array<number> // generic
values = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
  white = '#fff',
  black = '000'
}

// any (anything) isn't cool
let coisa: any
coisa = true
coisa = 'string'
coisa = [1]

// void (empty) there is no return
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined
let text: Bla
text = 'test'

// never - will never return
function error(): never {
  throw new Error('error');
}

// object
let cart: object
cart = {
  key: 'fi'
}

// Type Inferece
let message2 = "mensagem definida" // type: string
// message2 = 2 causes error

window.addEventListener('click', e => {
  console.log(e.target)
  // console.log(e.foo) don't exists foo in an event will cause error
});
