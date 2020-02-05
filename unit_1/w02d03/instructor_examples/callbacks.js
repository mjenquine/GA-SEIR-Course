// setTimeout(() => {
//   console.log('oh....hai')
// }, 4000)

const mySpeed = 1500
const myGreeting =  () => {
  console.log('greetings and salutations')
}

// setTimeout(myGreeting, mySpeed)

const socky = () => {
  console.log('I will happily iron your socks!')
}

const foodie = () => {
  console.log('I will sort your M&Ms so that you never encounter a green one')
}

const pr = () => {
  console.log('I will make sure everyone knows you are the best')
}

// socky()
// foodie()
// pr()

const boss = (employee) => {
  console.log('I am the boss and you will do as I say!')
  employee()
}

// boss(socky)
// boss(foodie)
// boss(pr)
// boss(() => {
//   console.log("I'll still hand grind your coffee beans, even though you don't know my name")
// })

const capitalize = (word) => {
   return (word[0].toUpperCase() + word.substring(1)
 )}

const excitedWords = (word) => {
  return word + '!'
}
// console.log(capitalize('hello'))
// capitalize('aloha')
// console.log(excitedWords('hello'))

const handleWords = (str, cb) => {
  const arr = str.split(' ')
  const newArr = []
  for (let word of arr) {
    newArr.push(cb(word))
  }
  return newArr.join(' ')
}

console.log(handleWords('hello how are you?', capitalize))
console.log(handleWords('hello how are you?', excitedWords))

console.log(handleWords(handleWords('omg hi how are you', capitalize), excitedWords)
)

console.log(handleWords('omg hi how are you', capitalize)+ '!')
// arrow functions

// // no argument
// () => {}
//
// // one argument
// (oneARg) => {}
//
// // one argument
// oneARg => {}
//
// // two or more arguments
// (one, two) => {}
