// console.log('hooray arrays!')

const arr = []

const satchel  = ['chair', 'table', 'candle', 'map', 'magnifying glass', 'rupees', 'Pepto Bismol', 'boomerang']

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const favFoods = ['pineapple', 'raisins', 'mayonaise']

// console.log(favFoods)

// console.log(satchel[0])
// console.log(satchel[1])
// console.log(satchel[2 * 2 + 1])

const index = 2
// console.log(satchel[index])
// console.log(satchel[8])

// get last element in array
let lastItem = satchel.length - 1
// console.log(satchel[lastItem])
//
// console.log(satchel[satchel.length -1])

satchel[2] = 'glowing orb'

// console.log(satchel)

// console.log(satchel[satchel.length / 2])

const shortArray = ['first', 'middle', 'last']

// console.log(
//   shortArray[
//     Math.floor(shortArray.length / 2)
//   ]
// )

// console.log(shortArray[Math.floor(shortArray.length / 2)])

// for (let i = 0; i < satchel.length; i++) {
//   console.log('A nimble rogue is trying to steal my: ' + satchel[i] + '!!!')
// }

// for (let i = 0; i < satchel.length; i += 2) {
//   console.log('A nimble rouge is trying to steal my:', satchel[i] , '!!!')
// }

// for (var i = 0; i < satchel.length; i++) {
//   if (i % 2 === 0) {
//     console.log('A lovely fairy has enchanted my', satchel[i])
//   }
// }
//
// for (let i = 0; i < satchel.length; i++) {
//   if ((i === 5) || (i % 2 === 0)) {
//     console.log('A sneaky elf has set fire to my ' + satchel[i])
//   }
// }

// for (let i = 0; i < satchel.length; i++) {
//   if ( i % 2 === 0 && i % 3 === 0) {
//     console.log('I have discovered a mysterious engraving on my ' + satchel[i])
//   }
// }
const pairs = [['Harold', 'Kumar'], ['Laurel', 'Hardy']]

// console.log(pairs[1][0])
// console.log(pairs[0][1])

pairs[0][1] = 'Maude'

// console.log(pairs)

// const confectioneries = [
//   ['Pecan Snickers', 'Dude, Sweet Chocolate Salami'],
//   ['Lindt truffles', 'Easter egg',
//     ['kitkat bar 1', 'kitkat bar 2', 'kitkat bar 3', 'kitkat bar 4'
//     ]
//   ]
// ]
//
// console.log(confectioneries[1][2][2])


const favMovies = ['Jerry McGuire', 'Frozen', 'Terminator 2', 'Snatch', 'Breakfast at Tiffany\'s', 'Little Mermaid', 'Stepbrothers', 'Office Space', 'Cats', 'Finding Nemo', 'Harod & Maude', 'Malificent', 'Les Miserables', 'Star Wars', 'Training Day', 'Slapshot', 'Serenity', 'Shawshank Redemption', 'Troy', 'Bollywood', 'Blade Runner', 'Kill Bill']

console.log(favMovies.length)
