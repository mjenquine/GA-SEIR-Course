/////////////////////////
//// Part 1
////////////////////////

//4

/////////////////////////
//// Part 2
////////////////////////

// for (var i = 1; i <= 20; i++) {
//   console.log(i);
// }
//
// for (var i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// for (var i = 1; i <= 100; i++) {
//   if ((i % 3 === 0) && (i % 5 === 0)){
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//
// plantee[2] = 5001
// console.log(plantee);
// wolfy[3] = 'Gotham City'
// console.log(wolfy);
// dart.push('Hawkins')
// console.log(dart);
// wolfy[0] = 'Gameboy'
// console.log(wolfy);

// let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
//
// for (let element of turtles) {
//   console.log(element.toUpperCase());
// }

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

favMovies.sort()
//.sort permanently sorts the array in alphabetical order
favMovies.pop()
favMovies.push('Guardians of the Galaxy')
favMovies.reverse()
let firstElement = favMovies.shift()
favMovies.unshift('The Incredibles')
//
// // unshift returns an array with The Incredibles in the first position
favMovies.splice(15, 1, 'Avatar') // splice permanently alters the array
// //I couldn't figure out how to get the element without using index. I tried playing around with //getElementById but could not figure it out
// console.log(favMovies);
let half = favMovies.slice(Math.floor(favMovies.length / 2))
console.log(half);
// // slice does not permanently alter an array
// // slice returns a copy of elements from the original myArray
console.log(favMovies);
console.log(favMovies.indexOf('Fast and Furious'));
//I still have 'fast and furios' it was sliced on line 66 but that did not permanently alter the array - correct?
// we were fine because we were only changing elements within the array not the array itself 
