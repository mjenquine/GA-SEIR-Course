// Given the following object pull out 3 key value pairs using destructuring (one being the function) and log them/call the function

// const carObj = {
//   make: "Subaru",
//   model: "Crosstrek",
//   year: 2020,
//   type: "SUV",
//   upgrades: ['mudflaps', 'roof rack', 'moonroof'],
//   colors_available: {
//     red: true,
//     orange: false,
//     blue: true,
//     green: true
//   },
//   honk(){
//     console.log('Beep Beep');
//   }
// }
// const {make, model, honk} = carObj
// console.log(make);
// console.log(model);
// console.log(honk);

// Go through the MDN docs, find one method that is standard, one that is obsolete, one that is depreciated, and one that is experimental and write down he name and icon used for each type.
// standard - string.prototype.match() no icon 
// obsolete - string.prototype.quote() - trash can 
// depricated - string.prototype.link() - thumbs down
// experimental - Promise.any() - beaker 

// Get the min of an array of numbers, if it is negative return 'the min is negative', if its positive return 'the min is positive'.
// let arr1 = [2, 1, 10, 6, -2, 1]
// let arr2 = [1, 7, 3, 0, 14, 11]

// function  checkIfMinIsPositive(arr){
//   Math.min(...arr) >= 0 ? console.log("the min is positive") : console.log("the min is negative")
// }
// checkIfMinIsPositive(arr1)

// Write a function that logs hello world if there is no argument provided. Otherwise it should log the argument provided (string) ex. greetin('Brendan') => hello Brendan.

// function greeting ( name = "World") {
//   this.name = name,
//   greet()
// }
// let greeting1 = new greeting()
// let greeting2 = new greeting("John")

// console.log("Hello", greeting1.name);
// console.log("Hello", greeting2.name);

// Fix the for loop so that Timmy gets a golden key.

// let belongings = ['boomerang', 'keyboard', 'tent', 'Pepto Bismol', 'pointy hat']

// let key = 'a golden key'

// for (element of belongings) {
//   console.log('Timmy checks his satchel and finds', key)
 
// }
// belongings.push(key)
// console.log('Timmy now has they gold key', belongings[belongings.length -1] === 'a golden key')

// Create an empty object and using the new ES6 syntax insert the given variables into the object

// function CampingGear (rAndR, healing, weapon, music, style){
//   this.rAndR = rAndR,
//   this.healing = healing,
//   this.weapon = weapon,
//   this.music = music, 
//   this.style = style
// }

// const rAndR = 'tent'
// const healing = 'pepto bismol'
// const weapon= 'boomerang'
// const music = 'keyboard'
// const style = 'pointy hat'

// list1 = new CampingGear (rAndR, healing, weapon, music, style)

// console.log(list1);

// Use the rest operator to take any number of arguments, get the strings, sort them alphabetically, and return them as one string.


// //our arguments are already an arry. I'm not sure how to use a rest opperator here
// let args = ['super', 99, 'cali', {toy: 'kite'}, 'fragil', 'istic', false, 'expiali', 'do', [8,6,7,5,3,0,9], 'cious']

// function oneLongString (){
// const string = args.filter(words => typeof words === 'string').sort().join('')
// console.log(string);
// }
// oneLongString()

// Use the two given arrays to solve the following problems using the short arrow function syntax.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Use the Filter method to filter the nums array for numbers less than 4.
// const numsLessThanFour = nums.filter(arg => arg < 4)
// console.log(numsLessThanFour);

// Use the Filter method to filter words that have an even length.
// const wordsEvenLength = panagram.filter(arg => arg.length % 2 === 0)
// console.log(wordsEvenLength);

// Use the For Each method to log each value in the nums array by 3.

//I believe the question is missing a word. I'm assuming we were supposed to mult/divide/increase each num by 3. I just used mult in my example. 
// nums.forEach(element => {
//   console.log(element * 3);
// });
// Use the For Each method to log each word with an exclamation point at end of the word.
// panagram.forEach(element => {
//   console.log(element + '!');
// });

//=============== HUNGRY FOR MORE ===============//

// Given an array test to see if all values in the array are uniqe or not.

// Solve https://projecteuler.net/problem=2 using es6 syntax (copy and paste the link into your browser).
