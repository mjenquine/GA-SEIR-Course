class Character {
  constructor ({ name, age, eyes, hair, lovesCats, lovesDogs }) {
    this.name = name;
    this.age = age;
    this.legs = 2;
    this.arms = 2;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats || false ;
    this.lovesDogs = lovesDogs || false;
  }
  greet (otherCharacter) {
    console.log(`hi! ${otherCharacter}`)
  }
  smite () {
    console.log('I smite thee you vile person');
  }
}

const ric = new Character({
  lovesCats : 9,
  eyes: 'Brown',
  name: 'Ric Mershon'
})

console.log(ric)
