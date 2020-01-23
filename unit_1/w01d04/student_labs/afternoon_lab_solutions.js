// let quotes = ['Hello World', 'Houston, we have a problem', 'Batter up']
//
// const randomThings = [1, 10, 'Hello', true]
// console.log(randomThings[0]);
// randomThings[2] = "World"
// console.log(randomThings);

// const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
//
// ourClass[2]
// ourClass[2] = 'Octocat'
// ourClass.push('Cloud City')
// console.log(ourClass);
//
// const myArray = [5 ,10 ,500, 20]
// myArray.push('Egon')
// myArray.pop()
// myArray.unshift('Bob Marley')
// myArray.shift()
// console.log(myArray);
// myArray.reverse()
// console.log(myArray);

// for (var i = 0; i < myArray.length; i++) {
//   if (myArray[i] < 100) {
//     console.log('little number');
//   } else {
//     console.log('big number');
//   }
// }
// for (var i = 0; i < myArray.length; i++) {
//   if (myArray[i] < 5) {
//     console.log('little number');
//   } else if (myArray[i] > 10) {
//     console.log('big number');
//   } else {
//     console.log('monkey');
//   }
// }

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
console.log('Kristyn is rocking that ' + kristynsCloset[2], 'today!');
let kristynShoe = kristynsCloset.shift()
console.log(kristynShoe);
kristynsCloset.splice(5, 0, 'raybans')
console.log(kristynsCloset);
kristynsCloset[4] = 'stained knit hat'
console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][2]);
console.log(thomsCloset[2][1]);
console.log('Tom is looking fierce in a ' + thomsCloset[0][0], thomsCloset[1][1], thomsCloset[2][1]);
