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
let alienShipsArray = []
let spaceShipsArray = []


///////////////////////////////////////////////////
//spaceship class
///////////////////////////////////////////////////
class SpaceShip {
  constructor () {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = .7;
  }
  attack (player, enemy) {
    let rng = Math.random();
    if(rng <= this.accuracy){
      enemy.hull -= player.firepower;
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
  }
  attack (player, enemy) {
    let rng = Math.random();
    if(rng <= this.accuracy){
      player.hull -= enemy.firepower;
    }
  }
}


///////////////////////////////////////////////////
//create our ships
///////////////////////////////////////////////////
const buildAlienShipArray = () => {
  for (var i = 1; i <= 6; i++) {
    alienShipsArray.push(alienship = new AlienShip())
  }
}

spaceShipsArray.push(spaceShip = new SpaceShip());
// console.log(spaceShipsArray);
// console.log(alienShipsArray);


///////////////////////////////////////////////////
//This will start the game
///////////////////////////////////////////////////
playGame = () => {
  alert('Welcome Captain. You made it to the flight deck just in time. There seems to be hostile foriegn objects on the radar ahead. There heading in our direction at an alarming rate')
  askForAction(spaceShipsArray[0], alienShipsArray[0])
}
/////////////////////////////////////////////////
//      Question / Response Prompt
/////////////////////////////////////////////////
askForAction = (player, enemy) => {
  let choice = prompt ('Alien droids are approaching fast. What would you like to do?', '(a)ttack / (r)etreat')
  if (!choice) {
    alert('I\'m sorry. Try again')
    return
  }
  if (choice === 'a') {
    player.attack(player, enemy);
    checkHealth(player, enemy)
    //askForAction(player, enemy);
  }
  if (choice === 'r') {
    alert('You can\'t run forever. They\'re too fast')
    askForAction(player, enemy);
  }
  else {
    alert ('You\'d better act fast. They\'re approaching quickly')
    askForAction(player, enemy);
  }
}

///////////////////////////////////////////////////
//     Check Health of Enemy
///////////////////////////////////////////////////

const checkHealth = (player, enemy) => {
  if (enemy.hull <= 0) {
    shiftAlienArray()
    alert('You\'ve destroyed an alien ship')
  }
}

////////////////////////////////////////////////////
//    Shift Alien Array
///////////////////////////////////////////////////

const shiftAlienArray = () => {
  for (var i = 0; i < 1; i++) {
    alienShipsArray.shift()
  }
}

///////////////////////////////////////////////////
//     Check Health of Player
///////////////////////////////////////////////////

const checkHealth = (player, enemy) => {
  if (player.hull <= 0) {
    alert('You\'ve been destroyed by an alien ship!!! Game Over')
    return
  }
}


buildAlienShipArray();
playGame();
