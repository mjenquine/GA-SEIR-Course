// const arr = []
// console.log(arr);


const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const favFoods = ["Tacos", "BBQ", "Sushi"]

//console.log(favFoods[0]);
// this logs index 0

//console.log(satchel[2 * 2 + 1]);
//you can put an expression inside of the brackets

// const grab = 2
// console.log(satchel[grab]);
// a variable can identify an array item

// const grab = 2
// console.log(satchel.length);

// let lastItem = satchel.length - 1
// console.log(satchel[lastItem]);

 //console.log(satchel[satchel.length -1]);

//  satchel[2] = 'glowing orb'
// console.log(satchel);
// replace an item in an array

// const drSeussBooks = ['Cat in the Hat', 'Green Eggs and Ham', 'Grinch',
//               'Thing One', 'Thing Two', 'Cindy Loo Who', 'JoJo McDodd']
// drSeussBooks[0] = 'Not a Book'
// console.log(drSeussBooks);

//console.log(satchel[satchel.length / 2]);
const satchel  = ['chair', 'table', 'candle', 'map', 'magnifying glass', 'rupees', 'Pepto Bismol', 'boomerang']

// const shortArray = ['first', 'middle', 'last']
//  console.log(shortArray[Math.floor(shortArray.length / 2)
//  ]);

// for (let i = 0; i < satchel.length; i++) {
//   console.log('A nimble rogue is trying to steal my: ' + satchel[i]);
// }

// for (let i = 0; i < satchel.length; i += 2) {
//   console.log('Give me your ' + satchel[i], '!!!')
// }

// for (var i = 0; i < satchel.length; i++) {
//   if ((i % 2 === 0) || (i === 5)) {
//     console.log('Throw that ' + satchel[i], '!!!!!');
//   }
// }
// for (var i = 0; i < satchel.length; i++) {
//   if ((i % 2 === 0) && (i % 3 === 0)) {
//     console.log('Throw that ' + satchel[i], '!!!!!');
//   }
// }
// for (var i = 0; i < satchel.length; i++) {
//   if ((i % 2 ===0) && (i % 3 === 0)) {
//     console.log('Eat the ' + satchel[i]);
//   }
// }
//logs 'KitKat bar 3'

const favMovies = ['Jerry McGuire', 'Frozen', 'Terminator 2', 'Snatch', 'Breakfast at Tiffany\'s', 'Little Mermaid', 'Stepbrothers', 'Office Space', 'Cats', 'Finding Nemo', 'Harod & Maude', 'Malificent', 'Les Miserables', 'Star Wars', 'Training Day', 'Slapshot', 'Serenity', 'Shawshank Redemption', 'Troy', 'Bollywood', 'Blade Runner', 'Kill Bill']

favMovies.push('Human Centipede');
console.log(favMovies);

console.log(favMovies.indexOf('Snatch'));

console.log(favMovies.unshift());
