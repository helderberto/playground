class Animal {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`I'm ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name);

    this.sound = sound;
  }

  bark() {
    console.log(`${this.sound} I'm ${this.name}`);
  }
}

class Elephant extends Animal {
  constructor(name) {
    super(name);

    this._weight = 0;
  }

  get weight() {
    console.log(`I'm ${this.name} and my weight is ${this._weight}kg`);
  }

  set weight(newWeight) {
    this._weight = newWeight;
  }
}

const elephant = new Elephant('Dumbo');
const dog = new Dog('Panda', 'au au');
