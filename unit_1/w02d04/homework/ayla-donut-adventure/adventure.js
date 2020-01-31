// console.log('dougie the donut');
// =============================

// =============== create a hero class ===============
class Hero {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories'];
    }

    randomInt(array){
        // return Math.floor(Math.random() * this.catchPhrases.length);
        return Math.floor(Math.random() * array.length);
    }

    talkSass(){
        // console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
        console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`);
    }

    announceHealth(){
        console.log(`${this.name}'s current health is ${this.health}'`);
    }

    fight(enemy){
        console.log(`${this.name} says: I\'m ready to rumble!`);
        // create an array of the weapon names (keys from this.weapons)
        const weaponOptions = Object.keys(this.weapons);
        // select a random weapon from that array
        const selectWeapon = weaponOptions[this.randomInt(weaponOptions)]
        // log the selected weapon and it's hitpoints
        console.log(`${this.name} used ${selectWeapon} for ${this.weapons[selectWeapon]} hitpoints`);

        // subtract hitpoints from enemy's health
        enemy.health -= this.weapons[selectWeapon];
    }
}

// =============== instantiate our hero: Dougie the Donut ===============
const dougie = new Hero('Dougie');
// console.log(dougie);

// =============== create an enemy class ===============
class Enemy {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        };
        this.catchPhrases = ['i\'m youtube famous','i\'m more dangerous than an uncovered sewer'];
    }

    randomInt(array){
        // return Math.floor(Math.random() * this.catchPhrases.length);
        return Math.floor(Math.random() * array.length);
    }

    talkSmack(){
        // console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
        console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`);
    }

    announceHealth(){
        console.log(`${this.name}'s current health is ${this.health}'`);
    }

    fight(enemy){
        console.log(`${this.name} says: i\'m gonna flatten you like a slice of pepperoni!`);
        // create an array of the weapon names (keys from this.weapons)
        const weaponOptions = Object.keys(this.weapons);
        // select a random weapon from that array
        const selectWeapon = weaponOptions[this.randomInt(weaponOptions)]
        // log the selected weapon and it's hitpoints
        console.log(`${this.name} used ${selectWeapon} for ${this.weapons[selectWeapon]} hitpoints`);

        // subtract hitpoints from enemy's health
        enemy.health -= this.weapons[selectWeapon];

    }
}

// =============== instantiate our enemy: Pizza Rat ===============
const pizzaRat = new Enemy('Pizza Rat');
// console.log(pizzaRat);

// =============== write the story of Dougie and Pizza Rat ===============

// have dougie talkSass
dougie.talkSass();

// have pizz rat talkSmack
pizzaRat.talkSmack();

// have dougie announceHealth
dougie.announceHealth();

// have pizza rat announceHealth
pizzaRat.announceHealth();

//=============== fight ===============
dougie.fight(pizzaRat);
pizzaRat.announceHealth();

pizzaRat.fight(dougie);
dougie.announceHealth();
