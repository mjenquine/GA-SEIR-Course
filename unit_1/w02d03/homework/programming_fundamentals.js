///////////////////////////////////////////////////////////////////////////////////////
//////////               Questions
///////////////////////////////////////////////////////////////////////////////////////
// 1 Dry - Don't repeat yourself. Many constructs exist solely for the purpose of avoiding this (e.g. loops, funcs, classes and more)
// 2 KISS - Keep it simple stupid. Avoid complexity!
// 3 Avoid creating a YAGNI - Try to not add functionality unless you need it.
// 4 Do the simplest thing that could possibly work - Ask yourself 'What is the simplest thing that could possibly work'. Try that first. This keeps on the path of simple design.
// 5 Dont make me think - Code in plain english if possible. Easily read. If code requires too much thinking by an observer to understand it can likely be refactored
// 6 Write code for the maintainer - Be nice to future you. You may be the one to maintain your code. Looking back on it after time you'll likely have the same recollection of it as a stranger would. If you don't write code for future you be sure to write it for a psychopath who knows where your children go to school.
// 7 Single responsibility principle - A component of code should perform a single well defined task
// 8 Avoid premature optimization - Do not look for efficiency unless your code is working.
// 9 Separation of concerns - Different areas of functionality should be managed by distinct and minimally overlapping modules of Code
//
// /////////Which ones surprise you (if any)?
// Avoid premature optimization. This is interesting. Make code that works then look for efficiency. I will have to challenge myself to think like this.
//
// /////////Which one is currently giving you the most struggle?
// I need to focus on Write code for the maintainer and separation of concerns. This was evident during Brendan's review of Landscaper. He does a good job of both. I need to model my work after this.

//Declares function
// const f = l => {
//   let es = 0, p = 0, c = 1, n = 0
//   while (c <= l) {
//     n = c + p;
//     [c, p] = [n, c]
//     es += (c % 2 === 0) ? c : 0
//   }
//   return es
// }
//
// console.log(f(55))

// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];
//
// const updatedIceCreams = iceCreams.map((flavor)=>{
//     return flavor + " Ice Cream";
// });
//
// console.log(updatedIceCreams);
// console.log(iceCreams);

// const orinalArray = [2,4,6,8,10];
//
// const newNumArray = orinalArray.map((num) => {
//     return num * 2
// })
//
// console.log(newNumArray);

var sample = [1, 2, 3] // here we meet again
// es5
var sum = sample.reduce(function(sum, elem){
    return sum + elem;
})
// es6
//var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum)
