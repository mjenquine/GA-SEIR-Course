// ================================//
//          Calculate              //
// ================================//
// make a function that adds two nums together
const add = (num1, num2) => {
  return num1 + num2
}

// console.log(add(2,2));

// make a function that sub two nums
const sub = (num1, num2) => {
  return num1 - num2
}

// console.log(sub(4,2));

// make a function that mult two nums
const mult = (num1, num2) => {
  return num1 * num2
}

// console.log(mult(2,2));

// make a function that div two nums
const div = (num1, num2) => {
  return num1 / num2
}

// console.log(div(4,2));

// make a function that takes 3 params num1, num2, operates

const calculate = (num1, num2, func) => {
  return func(num1, num2)
}

// console.log(calculate(10, 2, mult));


// ================================//
//          Vending Mahchine       //
// ================================//

// Model a vending machine

const vendingMachine = {
  snacks: [
    {
      name: 'kitkat',
      price: 6
    },
    {
      name: 'sun chips',
      price: 7
    },
    {
      name: 'apple',
      price: 12
    }
  ],

  vend (input) {
    console.log('vending', this.snacks[input]);
  }
}

// vendingMachine.vend(1)


// ================================//
//          Syntax                 //
// ================================//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Filter Method

// 1st syntax
console.log(nums.filter(num => num < 4));

// 2nd Syntax
console.log(nums.filter(num => {
  return num < 4
}));


// 3rd Syntax
console.log(nums.filter((num) => {
  return num < 4
}));

// 1st syntax

console.log(panagram.filter(word => word.length % 2 === 0));

//2nd syntax
console.log(panagram.filter(word => {
  return word.length % 2 === 0
}));

// 3rd syntax
console.log(panagram.filter((word) => {
  return word.length % 2 === 0
}));
