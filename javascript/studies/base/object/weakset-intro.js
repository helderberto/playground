let obj1 = {
  name: 'Helder',
  age: 26,
}

let obj2 = {
  name: 'Paula',
  age: 32,
}

// WeakSet only accepts objects
let ws = new WeakSet([obj1, obj2])

ws.add({ name: 'Panda', age: 2 })

ws.delete(obj1)
