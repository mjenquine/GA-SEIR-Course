// ========================================================
//                      PRIME NUMBERS
// ========================================================
// // check if a given number is prime
// const checkPrime = (num) => {
//   // loop loop from 2 to the sq rt of the num
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     // if the num is evenly div by the current loop
//     if (num % i  === 0) {
//       // if this is true it means the number isnt prime
//       return false
//     }
//   }
//   // if the loop never returns false it has to be prime
//   return true;
// }
//
// // console.log(checkPrime(15));
// // console.log(checkPrime(17));
//
// //print all primes within a given range
//
// const printPrimes = (limit) => {
//   // loop from 0 up to the given limit
//   for (let i = 0; i < limit; i++) {
//     // use our checkPrime function to check if the current loop in prime
//     if (checkPrime(i)) {
//       // if it is prime, log the number
//       console.log(i);
//     }
//   }
// }
//
// printPrimes(100);


// ========================================================
//                   ROCK PAPER SCISSORS
// ========================================================

// random move function

const randomMove = () => {
  // define an array of moves
  const moveArray = ['rock', 'paper', 'scissors']

  //generate a random whole number between 0 and our length of the array
  const randomNum = Math.floor(Math.random() * (moveArray.length))
  console.log(randomNum);
  return moveArray[randomNum]

}

// console.log(randomMove());

//Define variables for user and comp move that pull a random move
let computerMove = randomMove();
let userMove = randomMove();

const rockPaperScissors = (computerMove, userMove) => {
  // Log comp move
  console.log('the computer chose', computerMove);
  //log user move
  console.log('the user chose', userMove);

  // Check all possible outcomes of the game
  // Check for tie
  if (computerMove === userMove) {
    console.log('you played the same move, tie!');
    // Check to see all possible outcomes if comp move is rock
  } else if (computerMove === 'rock') {
    if (userMove === 'paper') {
      console.log('paper beats rock, user wins!')
    }
    else if (userMove === 'scissors') {
      console.log('rock beats scissors, computer wins');
    }
    // Check all possible outcomes if comp move is paper
  } else if (computerMove === 'paper') {
    if (userMove === 'rock') {
      console.log('paper beats rock, computer wins!')
    }
    else if (userMove === 'scissors') {
      console.log('rock beats scissors, user wins');
    }
  } else {
    // check all possible outcomes if the user chooses rock
    if (userMove === 'rock') {
      console.log('rock beats scissors, user wins!');
    } else if (userMove === 'paper') {
      console.log('scissors beats paper, computer wins!');
    }
  }
}

rockPaperScissors(computerMove, userMove);
