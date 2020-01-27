// function declaration below

function printJohn () {
  return "John Hitz"
}

// function expression below

const printJohn2 = () => {
  return "John Hitz"
}

// simplified

const printJohn3 = () => "John Hitz"

// Our first function

const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};

printBoo ();

const printsum = () => {
  console.log(10 + 10)
}
printsum();

const printTriangle = () => {
  console.log('#');
  console.log('##');
  console.log('###');
  console.log('####');
  console.log('#####');
}
printTriangle()

const printTriangleV2 = () => {
  for (var i = 1; i <= 5; i++) {
    console.log('#'.repeat(i));
  }
  return 'Version 2 with loop'
}
console.log(printTriangleV2());

const printTriangleV3 = (num) => {
  for (var i = 1; i <= num; i++) {
      console.log('#'.repeat(i));
}
  return 'Version 3 with loop'
}
console.log(printTriangleV3(10));

const calculateArea = (num1, num2) => {
	console.log(num1 * num2);
}
calculateArea(2, 4)
let myNum = 4;

const square = (num) => {
	return num * num
}
const ans = square(myNum)

console.log(ans);

let myNum = 2;

const square = (num) => {
	return num * num
}
console.log('hello');
const ans = square(myNum)
console.log(ans);

const checkSquare = (num) => {

const outerFunciton = () => {
  let myscore = 0
  const innerFunction = () => {
    return myscore++
  }
  return innerFunction
}
