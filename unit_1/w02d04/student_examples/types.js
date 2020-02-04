class Character {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  classyGreeting (otherClassyCharacter) {
    console.log('Howdy ' + otherClassyCharacter.name + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  smite () {
    console.log('i smited thee.');
  }
}

// step 1 define the name of your new class and extend the class you want to inherit from
class Hobbit extends Character {
  constructor (name, age, eyes, hair){
    super(name, age, eyes, hair)

    this.skills = ['theivery', 'speed', 'willpower'];
  }
  steal () {
    console.log('Let\'s get away!');
  }
  greet (otherCharacter) {
    console.log('hello ' + otherCharacter + '!');
  }
}

class Elf extends Character {
  constructor (name, age, eyes, hair){
    super(name, age, eyes, hair)
    this.language = 'Elfin'
  }
  attack () {
    console.log('Dodge this stone!');
  }
}

class Warrior extends Character {
  constructor (name, age, eyes, hair) {
    super(name, age, eyes, hair)
    this.armor = 'Kevlar'
  }
  attack () {
    console.log('Warrior dash');
  }
}

const frodo = new Hobbit ('Frodo', 30, 'brown', 'black')
const frida = new Elf ('Frida', 87, 'Orange', 'Green')
const skull = new Warrior ('Skull', 45, 'blue', 'black')

console.log(skull);
frida.attack()
















console.log(frodo);
frodo.smite()
frodo.steal()
frodo.greet('Evan')




























//  const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
// console.log(hobbit);
