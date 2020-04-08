// class
function Animal(kind, sound) {
  // constructor
  this.kind = kind;
  this.sound = sound;
}

// method
Animal.prototype.hello = function() {
  console.log(`${this.sound} I'm a ${this.kind}`);
}

// instances
const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'meow');
