# Refactor This Code to Use Classes

```javascript
//  Global Variables
const goodGuys = document.getElementById('good-guys')
const badGuys = document.getElementById('bad-guys')
let turns = 0
let attackCounter = 0
let currentOpponent
const buttonsSection = document.querySelector('.buttons')
const mainViewBox = document.getElementById('main-view-box')
const themeSong = document.getElementById('theme-song')
const nextLevel = document.getElementById('next-level')
let gameMessage = document.getElementById('game-message')
let attackButton = document.getElementById('attack-buttons')
//  Constructor Functions for Enemies and Players
const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  let newEnemy = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newEnemy
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  let newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newPlayer
}

//  CreatePlayers

const playerSummer = createPlayer('Summer', 250, 400, 250)
const playerRick = createPlayer('Rick', 500, 250, 800)
const playerMorty = createPlayer('Morty', 180, 200, 900)

//  Create Level 1 enemy

const weirdAlien = createEnemy('Weird Alien', 1400, 100, 600)

//  Create Level 2 enemy

const gromflamite = createEnemy('Gromflamite', 3500, 200, 600)

//  Create Level 3 enemy

const general = createEnemy('General', 3800, 250, 600)

//  Create Level 4 enemies

const evilRick = createEnemy('Evil Rick', 500, 250, 800)
const evilMorty = createEnemy('Evil Morty', 4500, 250, 9999)

//  Create Level  5 enemy

const evilJerry = createEnemy('Evil Jerry', 5000, 300, 300)

// Function Applied when Summer or Rick Does Their Attack
const attack = (attackName, playerName, drain, enemyLevel) => {
  let opponent
  let selectedPlayer
  if (playerName === 'rick') {
    playerRick.stamina -= drain
    selectedPlayer = playerRick
  } else if (playerName === 'summer') {
    playerSummer.stamina -= drain
    selectedPlayer = playerSummer
  }
  if (selectedPlayer.stamina <= 1){
    gameMessage.innerText = `Cant Attack Not Enough Stamina, ask Morty For Help`
    return;
  }
  let playerAttack = determineAttack(selectedPlayer.power, drain)
  switch (enemyLevel) {
    case 'l1':
      opponent = weirdAlien
      break
    case 'l2':
      opponent = gromflamite
      break
    case 'l3':
      opponent = general
      break
    case 'l4':
        opponent = evilMorty
      break
    case 'l5':
      opponent = evilJerry
      break
    default:
      opponent = weirdAlien
  }
  goodGuys.style.animation = 'goodguyattack 3s'
  opponent.health -= playerAttack
  gameMessage.innerText = `${playerName} used ${attackName} on the Enemy and dealt ${playerAttack} damage ${opponent.name} has ${opponent.health} health`
  attackButton.classList.toggle = 'invisible'
  printToScreen(opponent)
  if (isRoundOver(opponent.health)) {
    nextLevel.disabled = false
  } else {
    setTimeout(() => {
      let opponentAttack = determineAttack(opponent.power, 0)
      selectedPlayer.health -= opponentAttack
      opponent.stamina -= opponentAttack / 4
      badGuys.style.animation = 'shakeboard 3s'
      gameMessage.innerText = `${opponent.name} attacked ${playerName} and dealt ${opponentAttack} damage to ${playerName}. ${playerName} has ${selectedPlayer.health} health remaining`
      printToScreen(currentOpponent)
      attackButton.classList.toggle = 'invisible'
      isGameOver(playerRick.health, playerMorty.health, playerSummer.health)
    }, 3500)
  }
  setTimeout(() => {
    gameMessage.innerText = `Its our turn To Attack or Heal`
  }, 6500)
  isRoundOver(opponent.health)
}

const heal = (message, target, drain) => {
  let selectedPlayer
  if (target === 'rick') {
    playerMorty.stamina -= drain
    playerMorty.health -= 5
    selectedPlayer = playerRick
    printToScreen(currentOpponent)
  } else if (target === 'summer') {
    playerMorty.stamina -= drain
    playerMorty.health -= 5
    selectedPlayer = playerSummer
    printToScreen(currentOpponent)
  } else if (target === 'all') {
    playerMorty.stamina -= drain
    playerSummer.stamina += 500
    playerRick.stamina += 500
    playerRick.health += 300
    playerSummer.health += 200
    playerMorty.health += 100
    gameMessage.innerText = `${message}`
    printToScreen(currentOpponent)
    return
  }
  let playerAttack = determineAttack(selectedPlayer.power, drain)
  selectedPlayer.health += playerAttack
  gameMessage.innerText = `${message}`
  printToScreen(currentOpponent)
  gameMessage.innerText = `Its still our turn To Attack`
}

// Function that determines the strength of the Attack or Mortys Heal

const determineAttack = (power, drain) => {
  return Math.floor((Math.random() * power) + drain)
}
// Function that Check's to see if you lost
const isGameOver = (health1, health2, health3) => {
  if ((health1 <= 0) && health2 <= 0 && health3 <= 0) {
    gameMessage.innerText = `Game Over Try Again. Press the Restart Button`
    mainViewBox.remove()
    return true
    // Need to disable buttons and enable restart button and reset health
  } else {
    return false
  }
}
const isRoundOver = (health) => {
  if (health <= 0 || isNaN(health)) {
    gameMessage.innerText = `Awesome advance to next stage and continue your adventure Waba luba dub dub. Press the next level button`
    mainViewBox.remove()
    nextLevel.classList.remove('disabled')
    nextLevel.classList.remove('invisible')
    return true
    // Need to enable button to move to next stage
  } else {
    return false
  }
}

const printToScreen = (opponent) => {
  const rickStats = document.getElementById('rick-stats')
  const summerStats = document.getElementById('summer-stats')
  const mortyStats = document.getElementById('morty-stats')
  const enemyStats = document.getElementById('enemy-stats')
  rickStats.innerText = `Rick Health:${playerRick.health} Stamina:${playerRick.stamina}`
  summerStats.innerText = `Summer Health:${playerSummer.health} Stamina:${playerSummer.stamina}`
  mortyStats.innerText = `Morty Health:${playerMorty.health} Stamina:${playerMorty.stamina}`
  enemyStats.innerText = `${opponent.name} Health:${opponent.health} Stamina:${opponent.stamina}`
  attackCounter++
}
const startButton = document.getElementById('start-button')
const getLevel = (level) => {
  let opponent
  switch (level) {
    case 'l1':
      opponent = weirdAlien
      break
    case 'l2':
      opponent = gromflamite
      break
    case 'l3':
      opponent = general
      break
    case 'l4':
      if (turns % 2) {
        opponent = evilRick
      } else {
        opponent = evilMorty
      }
      break
    case 'l5':
      opponent = evilJerry
      break
    default:
      opponent = weirdAlien
  }
  mainViewBox.classList.toggle('invisible')
  buttonsSection.classList.toggle('invisible')
  printToScreen(opponent)
  themeSong.play()
  startButton.remove()
  currentOpponent = opponent
}

```
