
//let teeth // cost $0 // earnings $1
//let scissors //cost $5 // earnings $5
//let pushMower //cost $25 // earnings $50
//let batteryMower //cost $250 // earnings $100
//let studentTeam // cost $500 // earnings $250
alert('Welcome to my landscaping business')
const tool = ['teeth','scissors','pushMower','batteryMower','studentTeam',]
const pay = [1, 5, 50, 100, 250]
let currentTool = tool[0]
let currentPay = pay[0]
let money = 0
const start = () => {
  money = 0
  currentTool = tool[0]
  askForAction()
}

const showStatus = () => {
  alert(`You have a total of $${money} and your current tool is ${currentTool}` )
}
const formatResponse = (response) => {
  return response[0].toLowerCase()
}
const askForAction = () => {
  showStatus()
  let choice = prompt(`Would you like to mow a client\'s lawn with your ${currentTool}?`, '(y)ou bet / (n)o way')
  if (!choice) {
    alert('Well that\'s not how you build an empire')
    return
  }
  if (choice === 'y'){
    money = money + currentPay
  } else {
    alert('Well that\'s not how you build an empire')
  }
  askForAction()
}
start()

const cutLawn = () => {

}

const takePayment = () => {

}

const buyNewTool = () => {

}
