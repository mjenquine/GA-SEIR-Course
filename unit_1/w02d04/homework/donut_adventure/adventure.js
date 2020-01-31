class Hero {
  constructor (name) {
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
  fight (enemy) {
    console.log('i\'m ready to rumble');
    let arr = Object.keys(this.weapons)
    let randomKey = arr[Math.floor(Math.random() * arr.length)]
    console.log(this.weapons[randomKey]);
    enemy.health -= this.weapons[randomKey]
  }
}
const dougie = new Hero ('Dougie')

class Enemy {
  constructor (name) {
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
  fight (enemy) {
    console.log('i\'m going to flatten you like a slice of pepperoni');
    let arr = Object.keys(this.weapons)
    let randomKey = arr[Math.floor(Math.random() * arr.length)]
    console.log(this.weapons[randomKey]);
    enemy.health -= this.weapons[randomKey]
  }
}
const pizzaRat = new Enemy ('Pizza Rat')
dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()
pizzaRat.fight(dougie)
dougie.fight(pizzaRat)
dougie.announceHealth()
pizzaRat.announceHealth()
