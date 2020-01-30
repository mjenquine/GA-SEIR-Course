// class Pet {
//   constructor (owner, name){
//     this.owner = owner
//     this.name = name
//   }
//   walk () {
//     console.log('walka walka');
//   }
// }
//
// class Dog extends Pet {
//   constructor (owner, name) {
//     super(owner, name)
//     this.price = 20
//     }
//   bark () {
//     console.log('bark');
//   }
//   chaseTail () {
//     console.log('oh boy oh boy oh boy');
//   }
//   getPrice () {
//     return this.price
//   }
// }
//
// class Cat extends Pet {
//   constructor (owner, name) {
//     super(owner, name)
//     this.price = 10
//   }
//   walk () {
//     console.log('strut strut');
//   }
//   pur () {
//     console.log('purr');
//   }
//   clean () {
//     console.log('cleaning');
//   }
//   getPrice () {
//     return this.price
//   }
// }
//
//
// const sam = new Dog ('Mark', 'Sam')
// sam.price = 500
// console.log(sam);
// console.log(sam.getPrice());
// const woodrow = new Cat ('Mark', 'Woodrow')
// woodrow.owner = "Anthony"
// console.log(woodrow);


class ATM {
  constructor (type, money) {
  this.type = type
  this.money = money
  }
}
