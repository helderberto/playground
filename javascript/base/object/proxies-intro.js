let obj = {
  name: 'Helder',
  age: 26,
}

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log(target); // => { name: "Helder", age: 26 }
    console.log('Alguém está pedindo a idade');
    console.log(target[name]); // => "Helder"
  },
  set(target, name, value) {
    console.log('Alguém está mudando o nome');
    target[name] = value.toUpperCase(); // => "HELDER"
  }
});
