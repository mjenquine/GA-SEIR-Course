// console.log('objects woo')

const car = {
  color: 'blue',
  hp: 4000,
  year: 1989
}

// console.log(car.color)

// array
const arr = []
// object
const obj = {}

const house = {
  doors : 9
}

// add a new key value pair to our house object
house.windows = 30
//change properties of an object
house.windows = 40
// console.log(house)

const mogwai = {}
// can add properties
mogwai.name = 'Gizmo'
mogwai.name = 'Crazy cute gremlin'



// cannot overwrite the object if declared with const
// mogwai = { name: 'Gizmo'}
// console.log(mogwai)

const borough = {
  name: "Brooklyn",
  name: "The Bronx"
}

// console.log(borough)

const obj2 = {
  whatevs: 'hi',
  count: 4
}

// if (obj2.whatevs === 'hi') {
//   console.log('ok')
// }

// for (var i = 0; i < obj2.count; i++) {
//   console.log(i)
// }

// if (obj2.anotherthing) {
//   console.log('does have this property')
// } else {
//   console.log('this object does NOT have the key anotherthing. Let us add it below')
//   obj2.anotherthing = 'NOW IT HAS IT'
//   console.log('this is obj2 property: for the key anotherthing', obj2.anotherthing)
// }

const goblin = {badGuy: true}

// console.log(goblin['badGuy'])


const strangeObj = {}

strangeObj['a key with spaces'] = 999

// console.log(strangeObj['a key with spaces'])


const choices = {}

for (var i = 0; i < 10; i++) {
  choices['toppings' + i] = 'foo'
}

// console.log(choices)

const nycSubwayLines = {
  1: "red",
  line5: 'green'
}

// nycSubwayLines['line4'] = "green"
// console.log(nycSubwayLines.line5)

const monster = {
  name: 'Slimer',
  age: 6
}

const someVar = 'name'

// console.log(monster[someVar])


const bestTVShowEver = { title: "Lodge 49", showRunner: "Jim Gavin", year: 2018 }

// print the keys
// for (let key in bestTVShowEver) {
//   console.log(key)
// }
// print the values
for (let key in bestTVShowEver) {
  console.log(key, bestTVShowEver[key])
}
