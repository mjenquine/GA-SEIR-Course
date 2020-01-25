//////////////////////////////////////////
///////////// Verbal Questions
//////////////////////////////////////////

//1. A paramater is an input that modifies the behavior of a function. An argument is the value of the paramater specicified when the function is invoked
//2. The main purpose of Return is to use the function return value like you would use a variable value. Consoe.log is a function that will write the argument value on the console


//////////////////////////////////////////
///////////// Palindrome
//////////////////////////////////////////

const checkPalindrome = (str) => {
  return str.toLowerCase() == str.split('').reverse().join('').toLowerCase()
}
console.log(checkPalindrome('Radar'));
console.log(checkPalindrome('Borscht'));













function testing () {
  return 1 * 2
  console.log('Hi');
}
console.log(testing());
