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

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
// favMovies.sort()
// //.sort permanently sorts the array in alphabetical order
// favMovies.pop()
// favMovies.push('Guardians of the Galaxy')
// favMovies.reverse()
// let firstElement = favMovies.shift()
// favMovies.unshift('The Incredibles')
// //
// // // unshift returns an array with The Incredibles in the first position
// favMovies.splice(15, 1, 'Avatar') // splice permanently alters the array
// // //I couldn't figure out how to get the element without using index. I tried playing around with //getElementById but could not figure it out
// // console.log(favMovies);
// let half = favMovies.slice(Math.floor(favMovies.length / 2))
// console.log(half);
// // // slice does not permanently alter an array
// // // slice returns a copy of elements from the original myArray
// console.log(favMovies);
// console.log(favMovies.indexOf('Fast and Furious'));
// //I still have 'fast and furios' it was sliced on line 66 but that did not permanently alter the array - correct?
// // we were fine because we were only changing elements within the array not the array itself
//
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",["Lucinda", "Jacc", "Neff", "Snoop"],["Petunia", ["Baked Goods", "Waldo"]]];
// whereIsWaldo.splice([1][0], 1)
// console.log(whereIsWaldo);
// whereIsWaldo[1][2] = 'No One'
// console.log(whereIsWaldo);
// console.log(whereIsWaldo[2][1][1]);

// let kittyTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...']
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     meow = kittyTalk[Math.floor(Math.random() * kittyTalk.length)]
//     console.log(meow);
//   } else {
//     console.log(i);
//   }
// }
/// with this I get an undefined 20% of the time. I'll reach out to someone for a 1 on 1 in the Am

// // meow = kittyTalk[Math.round(Math.random() * kittyTalk.length)]
// // console.log(meow);
///above I'm just testing my meow before entering it into the for loop

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

median = nums.sort()
//median = Math.floor(sorted.lenght /2)
console.log(Math.floor(median[median.length / 2]))


// median = nums[nums.length / 2]
// console.log(median);
//


// Expected output:
// => 15
