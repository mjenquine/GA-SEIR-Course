// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }
// //console.log(ironMan.abilities[2]);
//
// // for (let row of ironMan.abilities) {
// //     console.log(row);
// //   }
// //console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.marvelMovieAppearances.spiderManHomecoming = true
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.jarvisAreYouThere();

// const createCaptain = () => {
//   return {
//     aliases: {
//       superHeroName: 'Captain America'
//     },
//     abilities: ['lightning speed', 'flies like an eagle', 'peak human strength'],
//     sayPhrase:()=>{console.log('i can do this all day');}
//   }
//
// }
// console.log(createCaptain().aliases.superHeroName);
// console.log(createCaptain().abilities[2]);
// console.log(createCaptain().sayPhrase());

// const blackWidow = {
//     aliases: {
//       realName: 'Natalia Alainova Romanova',
//       otherNotableAliases: ['Cat', 'Natalie Rushman']
//     }
//   }
//
// console.log(blackWidow.aliases.realName);
// console.log(blackWidow.aliases.otherNotableAliases[1]);

// const theAvengers = [
//   { name: 'Tony Stark', superheroName: 'Iron Man'},
//   { name: 'Steve Rogers', superheroName: 'Captain America' },
//   { name: 'Bruce Banner', superheroName: 'The Hulk'},
//   { name: 'Thor' },
//   { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//   { name: 'Clint Barton', superheroName: 'Hawkeye' }
// ]
// for (let i = 0; i < theAvengers.length; i++) {
//   console.log(theAvengers[i].name);
// }
const mcuMovies = [
  ['ant-man', 'ant-man and the wasp'],
  ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
  ['black panther'],
  ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
  ['doctor strange'],
  ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
  ['the hulk'],
  ['iron man', 'iron man 2', 'iron man 3'],
  ['spiderman: homecoming'],
  ['thor', 'thor: the dark world', 'thor: ragnarok']
]
for (let movies of mcuMovies) {
  for (let movieNames of movies) {
    console.log(movieNames);
  }
}
