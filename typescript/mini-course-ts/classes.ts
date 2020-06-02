abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log('-------GET------');
    return this.level;
  }

  set setLevel(newLevel: number) {
    this.level = newLevel;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`)
  }
}

const helder = new CharAccount('Helder', 27, 'helderburato', 100);
console.log(helder);
helder.logDetails();
helder.logCharDetails();

console.log(helder.getLevel);
helder.setLevel = 80;
console.log(helder.getLevel);
