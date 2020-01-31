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
