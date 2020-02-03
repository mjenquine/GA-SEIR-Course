const obj = {}

obj.legs = 2
console.log(obj)


class Character {
  constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.name = name;
    this.age = age;
    this.legs = 2;
    this.arms = 2;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  greet (otherCharacter) {
    console.log(`hi! ${otherCharacter}`)
  }
  smite () {
    console.log('I smite thee you vile person');
  }
}

//
const me = new Character('Karolin', 41, 'green', 'copper dark ash blond', true, true);
const you = new Character('Arthur', 32, 'brown', 'dark brown', true, 'sometimes');

console.log(me)
console.log(you)

me.legs = 32;
you.legs = 99;

console.log(me)
console.log(you)
me.greet('Nathanael');
you.greet('Brendan');

class Car {
  constructor(make, model, color, equipment){
    this.make = make;
    this.model = model;
    this.color = color;
    this.wheels = 4;
    this.steeringWheels = 1;
    this.radios = 1;
    this.equipment = equipment
  }
}

class Adventurer {
  constructor(name, height, attack){
    this.name = name;
    this.height = height;
    this.attack = attack
  }
}

const arthur = new Adventurer('Arthur', '6foot2', () => {console.log('smite')})
const nathanael = new Adventurer('Arthur', '6foot', () => {console.log('total destruction')})

arthur.attack()
nathanael.attack()























// psuedocode Step 2 and 3
/* teachers have a :
name___ String,
years of experience ___ Number that is an Integer never negative,
specialty ___ String,
isAwewsome____ Boolean
*/
/*teacher can do :
teach,
drinkCoffee
*/
class Teacher { // in Step 1
  constructor (name, yearsOfExperience, specialty, isAwewsome) {
    // Step 4 write attributes
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.specialty = specialty;
    this.isAwewsome = isAwewsome;
  }
// Step 4 writing methods
  teach (message) {
    console.log(message)
  }
  drinkCoffee () {
    console.log(`I drank ${this.yearsOfExperience} cups of coffee today`)
  }
}
// first step Name my class and then place a constructor method inside of  my class block
// second step is to pseudo code on paper or text editor or in your head what defines a teacher
// step 3 pseudo code the methods that a Class may have
//  step 4 take your pseudocode and apply it to the class

const arthur2 = new Teacher ('Arthur', 15, 'node.js', true)
arthur2.teach('Classes are awesome once you get used to them')
arthur2.drinkCoffee()
console.log(arthur2)
