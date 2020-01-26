//////////////////////////////////////////
///////////// Verbal Questions
//////////////////////////////////////////

//1. A paramater is an input that modifies the behavior of a function. An argument is the value of the paramater specicified when the function is invoked
//2. The main purpose of Return is to use the function return value like you would use a variable value. Consoe.log is a function that will write the argument value on the console

//////////////////////////////////////////
///////////// Palindrome
//////////////////////////////////////////

// const checkPalindrome = (str) => {
//   return str.toLowerCase() == str.split('').reverse().join('').toLowerCase()
// }
// console.log(checkPalindrome('Radar'));
// console.log(checkPalindrome('Borscht'));

//////////////////////////////////////////
///////////// Sum Array
//////////////////////////////////////////

// const sumArray = (arr) => {
//   let sum = 0
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

//////////////////////////////////////////
///////////// Prime Numbers
//////////////////////////////////////////

// const checkPrime = (number) => {
//   if (number === 2) {
//     return true
//   }
//   else {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//   }
//   return true
// }
// const printPrimes = (num) => {
//   for (var i = 2; i <= num ; i++) {
//     checkPrime(i)
//     if (checkPrime(i) === true) {
//       console.log(i);
//     }
//   }
// }
// printPrimes(100)

//////////////////////////////////////////
///////////// Rock Paper Scissors
//////////////////////////////////////////

let arr = ['Rock', 'Paper', 'Scissors']

const randomMove = () => {
  return arr[Math.floor(arr.length * Math.random())]
}

let computersMove = randomMove()
let usersMove = randomMove()

const rockPaperScissors = (computersMove, usersMove) => {
  if (usersMove === 'Rock' && computersMove === 'Scissors') {
    console.log(`User chose rock. Computer chose scissors. You Win`);
  }
  else if (usersMove === 'Scissors' && computersMove === 'Paper') {
    console.log(`User chose rock. Computer chose scissors. You Win`);
  }
  else if (usersMove === 'Paper' && computersMove === 'Rock') {
    console.log(`User chose rock. Computer chose scissors. You Win`);
  }
  else if (usersMove === 'Rock' && computersMove === 'Paper') {
    console.log(`User chose rock. Computer chose scissors. You Win`);
  }
  else if (usersMove === 'Paper' && computersMove === 'Scissors') {
    console.log(`User chose rock. Computer chose scissors. You Win`);
  }
  else if (usersMove === 'Scissors' && computersMove === 'Rock') {
    console.log(`User chose rock. Computer chose scissors. You Win`);
  }
  else {
    console.log('Error');
  }
}
rockPaperScissors()
