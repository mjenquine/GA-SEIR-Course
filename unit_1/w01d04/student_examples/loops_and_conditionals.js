// for (let step = 0; step < 5; step++) {
//   console.log('Walking east one step', step);
// }
// Identify all even integers greater or equal to 0 and less than or equal to 10
// Find sum of result
let evenSum = 0

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    evenSum += i
  }
}
console.log(evenSum);
