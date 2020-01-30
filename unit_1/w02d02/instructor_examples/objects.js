/* The afternoon */
// Step 1 write const foo = []
// Step 2 Seelct the inner portion of the [] type return 2 times.
// Step 3 Press the tab key 1 time for indentation
// Step 4 Then I will begin typing all elements of the array on their own line.
const foo = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2"]
]

//console.log(foo[1][1])

for (let row of foo) {
  // first time through row =   ["0,0", "0,1", "0,2"]
  // second time through row = ["1,0", "1,1", "1,2"]
  // third time through row =   ["2,0", "2,1", "2,2"]
  for (let element of row){
    // first time
    // element 0,0
    // element 0,1
    // element 0,2
    // second time
    // element 1,0
    // element 1,1
    // element 1,2
    // repeat with last row
    //console.log(element)
  }
}

const summonBird = () => {
  // below I am returning an object
  return {
    color: 'blue'
  }
}

// // ran the function
// // it returned this object { color : 'blue'}
//
// console.log(summonBird().color)
//
// const summonServant = (item)=>{
//     return {
//         bagOfStuff: ['clothes', 'food', 'keys', item]
//     }
// };
//
// let ric
//
// console.log(ric)

//console.log(summonServant().bagOfStuff[3]);

// const myObj = summonServant('sword')
//
// myObj.bagOfStuff.push('shield');
//
// console.log(myObj);

const someFunc = () => {
  return "william is super duper awesome!!!"
}

const anotherFunc = someFunc
const someValue = someFunc().split(' ').reverse().join(' ')
// first step someFunc return the string "william is super duper awesome!!!"
// split method is going to turn this string into an array of words ["william",  "is",  "super" ,"duper" ,"awesome!!!"]
// reverse method reverses the array
// join it together and it returns "awesome!!! duper super is william"

console.log(someValue)


/* The Morning*/
// const adventurer = {
//   name: "Arthur",
//   type: "bard",
//   hitpoints: 200,
//   attack: ()=> {
//     return "i attacked you you fiend"
//   },
//   belongings: [ "sword", "potion", "tums"],
//   companion: {
//     name: "Scott",
//     type: "White Mage",
//     hitpoints: 100,
//     companion: {
//       name: "John",
//       type: "Paladin",
//       hitpoints: 2000,
//       belongings: ['sword', 'shield', 'potion', 'unbreakable will']
//     }
//   }
// }

// console.log(adventurer.attack())
//
// console.log(adventurer.belongings[0]);
//
// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i])
// }
//
// console.log(adventurer.companion.hitpoints)
// console.log(adventurer.companion.companion.belongings[3])
