///////////////////////////////////////////////////
//randomizes our alien values
///////////////////////////////////////////////////
const rng = (arr) => {
  let rng = Math.floor(Math.random() * arr.length)
  return arr[rng];
}
///////////////////////////////////////////////////
//these arrays are full of ships
///////////////////////////////////////////////////
let alienShips = []
let spaceShips = []
///////////////////////////////////////////////////
//spaceship class
///////////////////////////////////////////////////
class SpaceShip {
  constructor () {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7;
    this.enemy = alienShips[0]
  }
  attack (alienship) {
    let rng = Math.random();
    if(rng <= this.accuracy){
      alienship.hull -= this.firepower;
    }
  }
}
///////////////////////////////////////////////////
//alienship class
///////////////////////////////////////////////////
class AlienShip {
  constructor () {
    this.hull = rng([3, 4, 5, 6]);
    this.firepower = rng([2, 3, 4]);
    this.accuracy = rng([.6, .7, .8]);
    this.enemy = spaceShips[0]
  }
  attack (spacheShip) {
    let rng = Math.random();
    if(rng <= this.accuracy){
      spacheShip.hull -= this.firepower;
    }
  }
}
///////////////////////////////////////////////////
//create our ships
///////////////////////////////////////////////////
alienShips.push(alienShip1 = new AlienShip());
alienShips.push(alienShip2 = new AlienShip());
alienShips.push(alienShip3 = new AlienShip());
alienShips.push(alienShip4 = new AlienShip());
alienShips.push(alienShip5 = new AlienShip());
alienShips.push(alienShip6 = new AlienShip());
spaceShips.push(spaceShip = new SpaceShip());
console.log(spaceShip);
console.log(alienShips);
///////////////////////////////////////////////////
//This will start the game
///////////////////////////////////////////////////
playGame = () => {

}
///////////////////////////////////////////////////
//Question / Response Prompt
///////////////////////////////////////////////////
askForAction = (enemyName) => {
  let choice = prompt ('Alien droids are approaching fast. What would you like to do?', '(a)ttack / (r)etreat')
  if (!choice) {
    alert('I\'m sorry. Try again')
    return
  }
  if (choice === 'a') {
    attack(enemyName)
    console.log();
    askForAction(enemyName);
  }
  if (choice === 'r') {
    alert('You can\'t run forever. They\'re too fast')
    askForAction();
  }
  else {
    alert ('You\'d better act fast. They\'re approaching quickly')
    askForAction();
  }
}
///////////////////////////////////////////////////
//
///////////////////////////////////////////////////

//
// askForAction(alienShip1)
// console.log(alienShip1);

















// console.log(alienShip1);
// console.log(alienShip2);
// console.log(alienShip3);
// console.log(alienShip4);
// console.log(alienShip5);
// console.log(alienShip6);
// console.log(spaceShip);
//
//
// spaceShip.attack(alienShip1);
// alienShip1.attack(spaceShip)
