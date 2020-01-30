// =======================================
//       TOOLS + PLAYER OBJECTS
// =======================================

// toolbox
const tools = [
  {
    name: 'teeth',
    wage: 1,
    cost: 0
  },
  {
    name: 'scissors',
    wage: 5,
    cost: 5
  },
  {
    name: 'an old-timey push lawnmower',
    wage: 50,
    cost: 35
  },
  {
    name: 'a battery-powered lawnmower',
    wage: 100,
    cost: 250
  },
  {
    name: 'a starving team of students',
    wage: 250,
    cost: 500
  },
]

// player
let player = {
  currentTool: tools.shift(),
  bankAccount: 0
}

// =======================================
//       START METHOD
// =======================================

const startGame = () => {
  alert('Cut lawns, make money.')
  showStatus()
  askForAction()
}

// =======================================
//       GAME METHODS
// =======================================

// show current status
const showStatus = () => {
  alert(`Current tool: ${player.currentTool.name}// Currently in the bank $${player.bankAccount}`)
}

//cut grass
const cutGrass = () => {
  // increase players bank account
  player.bankAccount += player.currentTool.wage

  //alert the player of their action
  alert(`Lets get to work! You cut the grass with ${player.currentTool.name} $${player.currentTool.wage} today!`)

  //check if the win condtion is met
  checkWin()
}

// buying a tool

const buyTool = () => {
  // check if they can afford the tool or not
  if (player.bankAccount >= tools[0].cost) {
    // decrement bank by tool cost
    player.bankAccount -= tools[0].cost

    //set the players tool to the next tool
    player.currentTool = tools.shift()

    //alert the user of their action
    alert(`You just bought ${player.currentTool.name} for $${player.currentTool.cost}`)
    showStatus()
    askForAction()
  } else {
    alert(`You cant afford ${tools[0].name} yet! Keep working!`)
    askForAction()
  }
}

// ask the user for an action
const askForAction = () => {
  //init playerChoice variable
  let playerChoice

  //ask for input
  //if more tools are still avalible
  if (tools.length > 0) {
    playerChoice = prompt(`What do you want to do? // Next tool is: ${tools[0].name} ($${tools[0].cost}) // Your bank account: $${player.bankAccount}`, "landscape / buy new tool")
  } else {
    playerChoice = prompt(`No more tools left, just keep working until you make $1000`, "landscape")
  }
  // move to the next method depending on user input
  if (playerChoice.toLowerCase() === 'landscape') {
    cutGrass()
  } else if (playerChoice.toLowerCase() === 'buy new tool' && tools.length > 0) {
    buyTool()
  } else {
    alert('That option is not available, please try again!')
    askForAction()
  }
}

// check if the win conditions are met
const checkWin = () => {
  // if player meets win conditions
  if (player.bankAccount >= 1000 && player.currentTool.name === 'a starving team of students') {
    alert('You win!')
  } else {
    // else continue the game
    showStatus()
    askForAction()
  }
}

// =======================================
//       RUN GAME
// =======================================

startGame()
