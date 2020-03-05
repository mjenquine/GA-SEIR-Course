// const patternMatch = (word) => {
//   const regexp = /colou?r/;
//   if (word.match(regexp)) {
//     return `${word}:true`
//   }
//   return`${word}:false`
// }

// WRITE YOUR CODE ABOVE THIS LINE ==========
// DO NOT DELETE ANYTHING BELOW THIS LINE ==========

// console.log(patternMatch('hello.'));
// console.log(patternMatch('.hi'));
// console.log(patternMatch('?howdy'));
// console.log(patternMatch('aloha'));
// console.log(patternMatch('pfft'));
// console.log(patternMatch('color'));

const validDate = (date) => {
  const regexp = /\d\d(-?|\/)\d\d(-?|\/)\d\d\d\d/;
  if (date.match(regexp)) {
    return `${date}:true`
  }
  return`${date}:false`
}

console.log(validDate('12-12-2112'));
console.log(validDate('12122112'));
console.log(validDate('12/12/2112'));
