// console.log('loops')

// for (let step = 0; step < 5; step++) {
//   console.log('Walking east one step ', step)
// }
let evenSum = 0

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // evenSum = evenSum + 1
    // shorter way of writing the above
    evenSum += i
  }
}

console.log(evenSum)
