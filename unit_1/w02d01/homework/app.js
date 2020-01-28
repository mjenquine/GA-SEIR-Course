
//let teeth // cost $0 // earnings $1
//let scissors //cost $5 // earnings $5
//let pushMower //cost $25 // earnings $50
//let batteryMower //cost $250 // earnings $100
//let studentTeam // cost $500 // earnings $250
const tool = {
  name: 'teeth',
  pay: 1
}
const showStatus = () => {
  alert(`You have a total of $${money} and your current tool is ${tool.name}` )
}
const formatResponse = (response) => {
  return response[0].toLowerCase()
}
alert('Welcome to my landscaping business')
const toolShop = ['teeth','scissors','pushMower','batteryMower','studentTeam',]
const pay = [1, 5, 50, 100, 250]
let currentTool = tool.name
let currentPay = tool.pay
let money = 0

const start = () => {
  // money = 0
  // currentTool = tool.name
  askForAction()
}

const askForAction = () => {
  showStatus()
  let choice = prompt(`Would you like to mow a client\'s lawn with your ${tool.name}?`, '(y)ou bet / (n)o way')
  if (!choice) {
    alert('Well that\'s not how you build an empire')
    return
  }
  if (choice === 'y'){
    money = money + tool.pay
  } else {
    alert('Well that\'s not how you build an empire')
  }
  checkMoneyBalance()
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

const checkMoneyBalance = () => {
  if (tool.name === 'teeth') {
      if (money < 5) {
        askForAction()
      }
      else if (money >= 5) {
        alert('Congratulations! You\'ve earned enough money to upgrade your tools');

        let choice = prompt(`Would you like to buy a ${toolShop[1]}?`, '(y)es / (n)o')
        if (!choice) {
          alert('Bad idea')
          return
        }
        choice = formatResponse(choice)
        if (choice === 'y') {
          money = money - 5
          tool.pay = 5
          tool.name = 'scissors'
          console.log(tool);
          alert('Good Choice');
          askForAction()
        } else if (choice === 'n') {
          alert('You must gain efficiency')
          askForAction()
        }
        }
        }
  else if (tool.name === 'scissors') {
      if (money < 25) {
        askForAction()
      }
      else if (money >= 25) {
        alert('Congratulations! You\'ve earned enough money to upgrade your tools');

        let choice = prompt(`Would you like to buy a ${toolShop[2]}?`, '(y)es / (n)o')
        if (!choice) {
          alert('Bad idea')
          return
        }
        choice = formatResponse(choice)
        if (choice === 'y') {
          money = money - 25
          tool.pay = 50
          tool.name = 'pushMower'
          console.log(tool);
          alert('Good Choice');
          askForAction()
        } else if (choice === 'n') {
          alert('You must gain efficiency')
          askForAction()
        }
        }
        }
  else if (tool.name === 'pushMower') {
      if (money < 250) {
        askForAction()
      }
      else if (money >= 250) {
        alert('Congratulations! You\'ve earned enough money to upgrade your tools');

        let choice = prompt(`Would you like to buy a ${toolShop[3]}?`, '(y)es / (n)o')
        if (!choice) {
          alert('Bad idea')
          return
        }
        choice = formatResponse(choice)
        if (choice === 'y') {
          money = money - 250
          tool.pay = 100
          tool.name = 'batteryMower'
          console.log(tool);
          alert('Good Choice');
          askForAction()
        } else if (choice === 'n') {
          alert('You must gain efficiency')
          askForAction()
        }
        }
        }
  else if (tool.name === 'batteryMower') {
      if (money < 500) {
        askForAction()
      }
      else if (money >= 500) {
        alert('Congratulations! You\'ve earned enough money to upgrade your tools');

        let choice = prompt(`Would you like to buy a ${toolShop[4]}?`, '(y)es / (n)o')
        if (!choice) {
          alert('Bad idea')
          return
        }
        choice = formatResponse(choice)
        if (choice === 'y') {
          money = money - 500
          tool.pay = 250
          tool.name = 'studentTeam'
          console.log(tool);
          alert('Good Choice');
          askForAction()
        } else if (choice === 'n') {
          alert('You must gain efficiency')
          askForAction()
        }
      }
    }
  else {
    if (tool.name === 'studentTeam' && money >= 1000) {
      alert('Congratulations. You have won!')
    }
    else {
      askForAction()
    }
  }
}
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//
// const checkMoneyBalance = () => {
//   if (tool.name === 'scissors' || 'pushMower' || 'batteryMower' || 'studentTeam') {
//     checkMoneyBalance2()
//   }
//   else if (money < 5) {
//     askForAction()
//   }
//   else if (money >= 5) {
//     alert('Congratulations! You\'ve earned enough money to upgrade your tools');
//
//     let choice = prompt(`Would you like to buy a ${toolShop[1]}?`, '(y)es / (n)o')
//     if (!choice) {
//     alert('Bad idea')
//     return
//     }
//     choice = formatResponse(choice)
//     if (choice === 'y') {
//     money = money - 5
//     tool.pay = 5
//     tool.name = 'scissors'
//     console.log(tool);
//     alert('Good Choice');
//     askForAction()
//     } else if (choice === 'n') {
//     alert('You must gain efficiency')
//     askForAction()
//   }
// }
// }
//
// const checkMoneyBalance2 = () => {
//   if (tool.name === 'pushMower' || 'batteryMower' || 'studentTeam') {
//     checkMoneyBalance3()
//   }
//   else if (money < 25) {
//     askForAction()
//   }
//   else if (money >= 25) {
//     alert('Congratulations! You\'ve earned enough money to upgrade your tools');
//
//     let choice = prompt(`Would you like to buy a ${toolShop[2]}?`, '(y)es / (n)o')
//     if (!choice) {
//     alert('Bad idea')
//     return
//     }
//     choice = formatResponse(choice)
//     if (choice === 'y') {
//     money = money - 25
//     tool.pay = 50
//     tool.name = 'pushMower'
//     console.log(tool);
//     alert('Good Choice');
//     askForAction()
//     } else if (choice === 'n') {
//     alert('You must gain efficiency')
//     askForAction()
//   }
// }
// }
//
// const checkMoneyBalance3 = () => {
//   if (tool.name === 'batteryMower' || 'studentTeam') {
//     checkMoneyBalance4()
//   }
//   else if (money < 250) {
//     askForAction()
//   }
//   else if (money >= 250) {
//     alert('Congratulations! You\'ve earned enough money to upgrade your tools');
//
//     let choice = prompt(`Would you like to buy a ${toolShop[3]}?`, '(y)es / (n)o')
//     if (!choice) {
//     alert('Bad idea')
//     return
//     }
//     choice = formatResponse(choice)
//     if (choice === 'y') {
//     money = money - 250
//     tool.pay = 100
//     tool.name = 'batteryMower'
//     console.log(tool);
//     alert('Good Choice');
//     askForAction()
//     } else if (choice === 'n') {
//     alert('You must gain efficiency')
//     askForAction()
//   }
// }
// }
// const checkMoneyBalance4 = () => {
//   if (tool.name === 'studentTeam' && money === 1000 ) {
//     alert("You Win!")
//   }
//   else if (money < 500) {
//     askForAction()
//     console.log('we are in student team land');
//   }
//   else if (money >= 500) {
//     alert('Congratulations! You\'ve earned enough money to upgrade your tools');
//
//     let choice = prompt(`Would you like to buy a ${toolShop[4]}?`, '(y)es / (n)o')
//     if (!choice) {
//     alert('Bad idea')
//     return
//     }
//     choice = formatResponse(choice)
//     if (choice === 'y') {
//     money = money - 500
//     tool.pay = 250
//     tool.name = 'studentTeam'
//     console.log(tool);
//     alert('Good Choice');
//     askForAction()
//     } else if (choice === 'n') {
//     alert('You must gain efficiency')
//     askForAction()
//   }
// }
// }
//
//
/////////////////////////////////////////////
/////////////////////////////////////////////
//
//
//









      // let choice = prompt('Would you like to purchase a rusty scissors for $5?', '(y)es / (n)o')
      // } if (!choice) {
      //     alert('You entered an incorrect response')
      //     return
      // }
      //   choice = formatResponse(choice)
      //   if (choice === 'y'){
      //     money = money - 5
      //     tool.name = 'rusty scissors'
      //     tool.pay = 5
      //     alert(`Congratulations! You now own a ${tool.name} and your rate of pay has increased to ${tool.pay}`)
      // } if (choice === 'n') {
      //     alert('You should really upgrade your hardware for greater lawn mowing efficiency')
      // }
  // else if (money < 5) {
  //   askForAction()
  // }

start()







const cutLawn = () => {

}

const takePayment = () => {

}

const upgradeTool = () => {

}
