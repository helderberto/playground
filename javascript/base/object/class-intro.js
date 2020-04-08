// ES6 class
class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
    this.name = '';
  }

  hello() {
    console.log(`${this.sound} I'm a ${this.kind}`);
  }

  static info() {
    console.log('This is a class to create animals!');
  }

  get name() {
    console.log(`My name is ${this._name}`);
  }

  set name(newName) {
    this._name = newName;
  }
}

// instances
const dog = new Animal('dog', 'auau');
const cat = new Animal('Robert', 'cat', 'meow');
