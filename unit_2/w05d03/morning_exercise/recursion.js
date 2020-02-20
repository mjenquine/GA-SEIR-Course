const numsToSum = [ 1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10 ];

const sumNumbers = ( numsArr, sum ) => {
  sum = sum || 0
  //base case below
  if (numsArr.length === 0) {
    return sum
  }
  //how to get down to base case
  sum += numsArr.shift()
  //must be called within itself
  return sumNumbers(numsArr, sum)
}

//console.log(sumNumbers(numsToSum));

////////////////////////////////////////////////
const testCase1 = 10


const isEven = ( num ) => {
  if ( num === 0 ) {
    return "The number is even"
  }

  if ( num === 1 ) {
    return "The number is odd"
  }
  return isEven( num - 2 )
}

//console.log(isEven(testCase1));

////////////////////////////////////////////////
const testCase = 5

const isFactorial = (num, product) => {
  product = product || 1
  if (num === 0) {
    return product
  }
  product = product * (num)
  num--

  return isFactorial(num, product)
}

console.log(isFactorial(testCase));

/////////////////////////////////////////////////
const totalSteps = 4

const findStepCountOptions (num) => {
  
}
