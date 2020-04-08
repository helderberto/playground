let obj1 = {
  name: 'Panda',
  age: 2,
}

let obj2 = {
  name: 'Pantufa',
  age: 0.6,
}

let wm = new WeakMap()

wm.set(obj1, 'Info da Panda')
wm.set(obj2, 'Info da Pantufa')
