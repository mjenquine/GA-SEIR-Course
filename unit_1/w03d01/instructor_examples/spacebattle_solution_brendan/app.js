// Create a ship class with properties and functions ( name, hull, firepower, accuracy, attack function, retreat function)
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  fire(enemy) {
    if (this.accuracy <= randomDec(0,1)) {
      enemy.hull -= this.firepower
      console.log(`You hit ${enemy.name} for ${this.firepower} damage and now ${enemy.name} has ${this.hull} hitpoints left`);
    } else {
      console.log(`You missed ${enemy.name}`);
    }
  }

  retreat(){
    console.log('The universe is doomed you coward!!!');
  }
}

//init USS ship

const uss = new Ship('My Ship', 20, 5, .7);

// console.log(uss);


// A function to generate a whole interger between two values
const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(randomInt(2, 10));

// A function to generate a decimal between two values

const randomDec = (min, max) => {
  let num = Math.random() * (max - min) + min;
  return Math.round(num * 10) / 10;
}

// console.log(randomDec(.5, .9));

// create an empty array of ships
const ships = [];

// function to generate 6 ships with random values
const genShip = () => {
  for (let i = 1; i < 7; i++) {
    let newShip = new Ship(`Alien ship${i}`, randomInt(3,6), randomInt(2,4), randomDec(.6,.8))

    ships.push(newShip);
  }
}

// call our gen function

genShip();

console.log(ships);

// create a battle function

const battle = () => {
  if (ships[0].hull > 0 && uss.hull > 0) {
    uss.fire(ships[0])
    ships[0].fire(uss);
    if (ships[0].hull <= 0) {
      ships.shift();
    } else {
      let choice = prompt("What do you want to do?");
      if (choice.toLowerCase() === 'b' || choice.toLowerCase() === '') {
        // battle();
      } else {
        alert("Coward")
      }
    }
  }
}

// for loop that runs the battle function for each ship in the array

while (uss.hull > 0) {
  battle();
  console.log(ships[0]);
  console.log(uss);
  if (ships.length === 0) {
    alert("You Win!")
  } else if (uss.hull <= 0) {
    alert("You have been destroyed you lose!")
  }
}
