class Hamster {
  constructor (owner, name) {
    this.owner = owner
    this.name = name
    this.price = 15
  }
  wheelRun () {
    console.log('squeek squeek');
  }
  eatFood () {
    console.log('nibble nibble');
  }
  getPrice () {
    return this.price
  }
}
const gus = new Hamster ('Timmy', 'Gus')
// console.log(gus);
// gus.wheelRun();
// gus.eatFood();
// console.log(gus.getPrice());

class Person {
  constructor (name) {
    this.name = name
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
  }
  getName () {
    return this.name
  }
  getAge () {
    return this.age
  }
  getWeight () {
    return this.weight
  }
  greet () {
    console.log(`Hello ${this.weight}`); //need to find the name that goes in here
  }
  eat () {
    this.weight++
    this.mood++
  }
  exercise () {
    this.weight--
  }
  ageUp () {
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount += 10
  }
  buyHamster (hamsterName) {
    this.hamsters.push(hamsterName)
    this.mood += 10
    this.bankAccount -= hamsterName.price
  }
}
const timmy = new Person ('Timmy')

for (let i = 0; i < 5; i++) {
  timmy.ageUp()
}
for (let i = 0; i < 5; i++) {
  timmy.eat()
}
for (let i = 0; i < 5; i++) {
  timmy.exercise()
}
for (let i = 0; i < 9; i++) {
  timmy.ageUp()
}
timmy.buyHamster(gus);
for (let i = 0; i < 15; i++) {
  timmy.ageUp()
}
for (let i = 0; i < 2; i++) {
  timmy.eat()
}
for (let i = 0; i < 2; i++) {
  timmy.exercise()
}
console.log(timmy);
