class Hero {
  constructor (name, ) {
    this.name = name
    this.health = 100
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories']
  }
  talkSass () {
    console.log(this.catchPhrases[Math.floor(this.catchPhrases.length * Math.random())]);
  }
  announceHealth () {
    console.log(this.health);
  }
  fight () {
    console.log('i\'m ready to rumble');
  }
}
const dougie = new Hero ('Dougie')
// dougie.talkSass()
// dougie.announceHealth()
// dougie.fight()

class Enemy {
  constructor (name, ) {
    this.name = name
    this.health = 100
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    }
    this.catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']
  }
  talkSmack () {
    console.log(this.catchPhrases[Math.floor(this.catchPhrases.length * Math.random())]);
  }
  announceHealth () {
    console.log(this.health);
  }
  fight () {
    console.log('i\'m going to flatten you like a slice of pepperoni');
  }
}
const pizzaRat = new Enemy ('Pizza Rat')
console.log(pizzaRat);
pizzaRat.talkSmack()
pizzaRat.announceHealth()
pizzaRat.fight()
