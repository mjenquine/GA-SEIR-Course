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
      alert('Our lasers struck an alien droid')
    } else {
      alert ('Commander, steady those cannons. Your attempt missed the alien vessel')
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
      alert(`We\'re hit. The aliens have depleted our sheilds by ${enemy.firepower}. Our hull can sustain ${player.hull} more damage.`)
    } else {
      alert(`The aliens have attacked,
      but missed our vessel`)
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
  alert('Welcome Captain. You made it to the flight deck just in time. There seems to be hostile foriegn objects on the radar ahead. They\'re heading in our direction at an alarming rate of speed.')
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
    checkEnemyHealth(player, enemy)
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

const checkEnemyHealth = (player, enemy) => {
  if (enemy.hull <= 0) {
    shiftAlienArray()
    alert('You\'ve destroyed an alien ship')
    checkForWin(player, enemy)
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

////////////////////////////////////////////////////
//   Check for Win
////////////////////////////////////////////////////

const checkForWin = (player, enemy) => {
  if (alienShipsArray.length === 0) {
    alert('Captian, you\'ve destroyed all alien vessels. You\'ve saved the fleet!!!')
    alert('Game Over')
    return
  } else {
    alert(`There\'s ${alienShipsArray.length} more alien ships on the radar. We need to reload the sonic blast canon`)
    enemy.attack(player, enemy)
    checkPlayerHealth(player, enemy)
  }
}

///////////////////////////////////////////////////
//     Check Health of Player
///////////////////////////////////////////////////

const checkPlayerHealth = (player, enemy) => {
  if (player.hull <= 12) {
    alert('We\'re sustaining too much damage act fast captain or the entire federation faces annihilation')
    askForAction(player, enemy)
    } else if (player.hull <= 0) {
        alert('You\'ve been destroyed by an alien ship!!! Game Over')
        return
        } else {
            askForAction(player, enemy)
            }
}


///////////////////////////////////////////////////
////          Enemy Attack Function
///////////////////////////////////////////////////

const enemyAttack = (player, enemy) => {
  enemy.attack(player, enemy)
  prompt('Captain, an alien vessel is within it\'s weapon range!!!! We\'re about to take fire')
  checkPlayerHealth(player, enemy)
}

///////////////////////////////////////////////////
////
///////////////////////////////////////////////////


buildAlienShipArray();
playGame();

//While working in groups Eduardo and I mob coded the class functions and value randomizer. After class break and finding that we should not code together we did not produce any other like code.
