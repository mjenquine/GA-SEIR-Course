const numsToSum = [1,2,3,4,5,6,7,8,9,10]

const sumNumbers = (numsArr, sum) => {
  sum = sum || 0
  if (numsArr.length === 0) {
    return sum
  }
  sum += numsArr.shift()
  return sumNumbers(numsArr, sum)
}

console.log(sumNumbers(numsToSum));


const testCase1 = 10

const isEven = ( num ) => {
  if (num === 0) {
    return "The number is even!"
  }

  if (num === 1) {
    return "The number is odd!"
  }
  return isEven(num - 2)
}

console.log(isEven(testCase1));
console.log(isEven(101));
