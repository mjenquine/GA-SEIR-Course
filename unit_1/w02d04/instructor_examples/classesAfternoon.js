// class Character {
//   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     if (hair !== undefined && hair !== null){
//     this.hair = hair;
//     }
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//   }
//   greet (otherCharacter) {
//     console.log('hi ' + otherCharacter + '!');
//   }
//   classyGreeting (otherClassyCharacter) {
//     console.log('Howdy ' + otherClassyCharacter.name + '!');
//   }
//   setHair (hairColor) {
//     this.hair = hairColor;
//   }
//   smite () {
//     console.log('i smited thee.');
//   }
//
// }
//
// // Step1 define the name of your new class and extend the class you want to inherit from
// // Step 2 we added any additional attributes and/or methods that we want our child Class to have in addition to what the parent had
// class Hobbit extends Character {
//   constructor (name, age, eyes) {
//       super(name, age, eyes);
//       this.skills = ['thievery', 'speed', 'willpower']
//   }
//
//   steal () {
//     console.log('lets get away');
//   }
//   greet (otherCharacter) {
//     console.log(`Hello ${otherCharacter}`)
//   }
// }
//
// const frodo = new Hobbit ('Frodo', 30, 'brown')
//
// console.log(frodo)
// frodo.smite();
// frodo.steal();
// frodo.greet('Evan');


// Factories
class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}

class Factory {
  // constructor that will set all of our object attributes below
  // it accepts one param that  is company
  // it initialize an empty array
  constructor (company) {
    this.company = company;
    // we will be storing our Cars in this array called this Cars
    this.cars = [];
  }
  generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar (index) {
    return this.cars[index];
  }
}

const tesla = new Factory('Tesla');

tesla.generateCar();
console.log(tesla);
tesla.generateCar();
console.log(tesla)
tesla.generateCar();
console.log(tesla)

const bernierMotors = new Factory('Bernier Motors')

bernierMotors.generateCar()
console.log(bernierMotors)
console.log(bernierMotors.findCar(0))







// function mahdav (param){
//   console.log(param)
//   if (param === 7){
//     console.log('cristi sent 7')
//   }
//   return param
// }
//
// function cristi () {
//   const argument = 7;
//   mahdav (argument);
// }























// end
