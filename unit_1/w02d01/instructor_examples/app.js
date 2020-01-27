// console.log('connected!')

// alert('oh hai')

// let answer = prompt('Are you (a)rriving or (l)eaving', 'Arriving or Leaving')

// const greeting = () => {
//   alert('Hi!')
// }
//
// const sayBye = () => {
//   alert('Bye')
// }
// const formatResponse = (response) => {
//   return response[0].toLowerCase()
// }
//
// answer = formatResponse(answer)
//
// if (answer === 'a') {
//   greeting()
// } else if (answer === 'l') {
//   sayBye()
// } else {
//   alert('uh oh something was mistyped')
// }

// let action
//
// do {
//   action = prompt('What do you want to do?', 'Your action')
// } while (action)
//
// console.log(action)

// const func1 = () => {
//   console.log('hello')
// }
//
// const func2 = () => {
//   console.log('oh hai')
//   func1()
// }
//
// func2()


const func1 = () => {
  console.log(1)
  func2() // why can I call this now, even though the definition is below?
  func3()
  console.log('Finished!')
}
const func2 = () => {
  console.log(2)
  func4()
  func6()
}
const func3 = () => {
  console.log(3)
  func5()
}
const func4 = () => {
  console.log(4)
}
const func5 = () => {
  console.log(5)
}
const func6 = () => {
  console.log(6)
}
// func1()


alert('Welcome to Lemon Capitalist')
///////////////////////////////
// Global Variables
///////////////////////////////
let lemons
let money

///////////////////////////////
// Definitions
///////////////////////////////
const start = () => {
  lemons = 0
  money = 20
  // write this later
  askForAction()
}

const showStatus = () => {
  alert(`You have ${lemons} lemons and $${money} money`)
}

const askForAction = () => {
  showStatus()
  let choice = prompt('What do you want to do?', '(b)uy a lemon / (e)at a lemon / (r)estart')
  console.log(choice)
  // make cancel button work
  if (!choice) {
    alert('Ok! No more lemons!')
    return
  }
  // choices b for buy
  // e for eat the lemon
  // r for restart
  // other - for errors
  if (choice === 'b') {
    buyLemon()
  } else if (choice === 'e') {
    eatLemon()
  } else if (choice === 'r') {
    console.log('ok let\'s restart')
    start()
  } else {
    console.log('uh oh something has gone horribly wrong. Let\'s choose a valid choice')
  }
}

const buyLemon = () => {
  lemons++
  money--
  askForAction()
}

const eatLemon = () => {
  if (lemons > 0) {
    lemons--
  } else {
    alert ('hey! no lemons!')
  }
    askForAction()
}

const formatResponse = (response) => {
  return response[0].toLowerCase()
}

///////////////////////////////
// Call at start of game/page load
///////////////////////////////

start()
