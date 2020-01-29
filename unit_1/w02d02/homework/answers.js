////////////////////////////////////////////
//              DataTypes
////////////////////////////////////////////
// 1. DataTypes boolean
// const light = true
// 2. object
// const User = {
//   name: "Mark",
//   email: 'mjenquine@gmail.com'
// }
// 3. Array
// let spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']
// 4. Array
// let names = ['John', 'Mark', 'Ben', 'Vikram']
// 5. Object
// const students = {
//   {name: 'John', Location: 'Austin'},
//   {name: 'Mark', Location: 'Milwaukee'},
//   {name: 'Ben', Location: 'Colorado'}
// }
// 6. Object Array
// const students = {
//   {name: 'John', Location: 'Austin', favoriteMovies: ['Ant Man', 'Star Trek', 'Spiderman']},
//   {name: 'Mark', Location: 'Milwaukee', favoriteMovies: ['Momento', 'Star Wars', 'Benji']},
//   {name: 'Ben', Location: 'Colorado', favoriteMovies: ['Snatch', 'Saving Private Ryan', 'Sandlot']}

////////////////////////////////////////////
//              Take it Easy
////////////////////////////////////////////

// let rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
// console.log(rainbow[4]);
// const me = {
//   name: 'Mark Jenquine',
//   favoriteFood: 'BBQ',
//   hobby: 'Cycling',
//   location: 'Milwaukee',
//   favoriteDataType: 'Objects'
// }
// console.log(me.hobby);

////////////////////////////////////////////
//              Crazy Object
////////////////////////////////////////////

// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [{
//       name: "Jeff",
//       occupation: "manager"
//     },
//     {
//       name: "funkhauser",
//       occupation: "tv dude"
//     },
//     {
//       name: "susie",
//       occupation: "jeffs wife",
//       favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// }
// // console.log(crazyObject.taco[1].salsa[5]);
// // console.log(crazyObject.larry.quotes[0]);
// // console.log(crazyObject.larry.characters[2].favourtieHobby);
// // console.log(crazyObject.larry.nicknames[1]);
// // console.log(crazyObject.larry.characters);
// // crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk')
// // console.log(crazyObject.larry.quotes);

////////////////////////////////////////////
//              Object-ception
////////////////////////////////////////////

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
