// var a = 10;
//
// (function IFFE(){
//   var a = 2
//   console.log("Inside of the IFFE the value of a is ", a);
// })();
//
// console.log("Outside of the IFFE the value of a is ", a);

// var b = 1234
//
// {
//   let b = 5678
//   console.log('the value of b inside of {}  is', b);
// }
//
// console.log('the value of b outside of {} is', b);

// var j = 10;
//
// for (var iES5 = 0; iES5 < 5; iES5++) {
//   var kES5 = j + iES5
//   console.log("The value of iES5 in the for loop is", iES5);
// }
//
// console.log('The value of iES5 outside the for loop is', iES5);
// console.log('The value of kES5 outside the for loop is', kES5);
// console.log('the value of j is ', j);

// for (let iES6 = 0; iES6 < 5; iES6++) {
//   let kES6 = j + iES6;
//   console.log('The value of iES6 in the for loop is', iES6);
// }
//
// console.log('the value of iES6 outside the for loop is: ReferenceError: iES6 is not defined');
// console.log('the value of j outside the for loop is', j);
// console.log('the value of kES6 outside the for loop is: `ReferenceError: kES6 is not defined`');


// function Beverage_ES5(type){
//   this.type = type || "water"
// }
//
// function Beverage_ES6(type = 'sparkling water'){
//   this.type = type
// }
//
// var breakfast = new Beverage_ES5();
// var breakfast2 = new Beverage_ES5( 'beer' );
// var secondBreakfast = new Beverage_ES6();
// var secondBreakfast2 = new Beverage_ES6( 'rocket fuel' );
//
// console.log ( 'breakfast default ES5: ');
// console.log ( breakfast );
// console.log ( '\nsecondBreakfast default ES6: ');
// console.log ( secondBreakfast );
//
// console.log ( '\nbreakfast value given, ES5: ');
// console.log ( breakfast2 );
// console.log ( '\nsecondBreakfast value given, ES6: ');
// console.log ( secondBreakfast2);

// var sumES5 = function(a,b){
//   return a+b;
// }
//
// console.log("sum:", sumES5(4,5));

// var sumES6 = (a,b) => a + b
//
// console.log("sum:", sumES6(2,2));

// var salutationsES5 = function(){
//   console.log('Hello ES5!');
// }
//
// salutationsES5()
//
// var salutationsES6 = () => console.log('Hello ES6!');

// var squareES5 = function(c){
//   return c*c;
// }
//
// console.log("ES5: ", squareES5(5));
//
// var squareES6 = c => c * c;
//
// console.log("ES6:", squareES6(10));



// // Create constructor function, inputs name, has defualt friend values
// function Person ( name , friends = ["Charlie", "Dennis", "Ron", "Sweet Dee", "Frank"]){
//   this.name = name;
//   this.friends = friends;
//
//
// //Add four methods:
//
// // The first, `secret Admirer`, `this.name` is undefined in the forEach function
// this.secretAdmirer = function (){
//   this.friends.forEach(function ( f ){
//     console.log( this.name + " sends flowers to " + f );
//   });
// }
//
// //The second one is the way we got around the issue of `this` - which was to set the desired `this` to a variable called `that` or `self` or something similar:
//
// this.giveOldSchoolLove = function (){
//   var self = this;
//   this.friends.forEach(function ( f ){
//     console.log( self.name + " likes " + f );
//   });
// }
//
// // use .bind()
//   this.giveBindingAffection = function (){
//     this.friends.forEach(function ( f ){
//         console.log( this.name + " makes friendship bracelets for " + f )
//     }.bind(this));
//   }
//
//   //Finally, by using the arrow function, `this` is already bound:
//
//   this.giveNewSchoolLove = function (){
//     this.friends.forEach(f =>
//     console.log( this.name + " hearts " + f ));
//   }
//
// }
//
// let k = new Person("karolin")

// k.secretAdmirer()

// k.giveOldSchoolLove()

// k.giveBindingAffection()

// k.giveNewSchoolLove()

// var arr = [1,2,3]
// // console.log(typeof arr);
//
// console.log(arr instanceof Array);
//
// console.log(Array.isArray(arr));

// var x = -5;
// var y = 50;
//
// // console.log(Math.max(x,y));
// var z = [1,5,-2,8,-9,17,-22];
// // console.log(y, ...z);
// // console.log(Math.max(y, ...z));
//
// let newArr = [...z,y]
// console.log(newArr);


// function sumOnlyNums (...args){
//    var nums = args.filter(arg => typeof arg === 'number');
//    var sum = nums.reduce((sum, num) => sum + num );
//    console.log(args);
//    return sum;
// }
//
// console.log(sumOnlyNums (44, false, 'pizza', 45, {season: "winter"}, [1,2,3,4,5,], 2, 9));

// var x = true;
// var y = false;
// var temp;
// // console.log(x,y);
// //
// // temp = x;
// // x = y;
// // y = temp
// //
// // console.log(x,y);
// console.log(x,y);
// [x,y] = [y,x]
// console.log(x,y);

// const someLongObjectName = {
//   brand: 'Tandy',
//   price: 2894,
//   year: 1984,
//   ram: '128KB',
//   hardDrive: '20MB',
//   mouseIncluded: true
// }
//
// // console.log(someLongObjectName.price);
//
// const {price, brand, ram, hardDrive} = someLongObjectName;
//
// console.log(price, brand, ram, hardDrive);

// Pass by reference
var a =  1;
var b =  2;
var originalArray = [a,b];


// console.log('\nis `a` equal to orginalArray[0]:', a === originalArray[0]);//true

//  const newArray = originalArray
//
// newArray.reverse()
//
// // console.log('\nThis is newArray.reverse():', newArray)
// // console.log('This is originalArray after newArray has been reversed', originalArray)
// // console.log('is `a` equal to orginalArray[0]:', a === originalArray[0]);//false
//
// var newOriginalArray = [a,b];
//
// // console.log('\nis `a` equal to anotherOrginalArray[0]:', a === newOriginalArray[0]);
//
// var trueNewArray = newOriginalArray.map(function(e){
//   return e;
// });
//
// console.log('this is trueNewArray', trueNewArray);
// trueNewArray.reverse();
// console.log('\nThis is trueNewArray.reverse():', trueNewArray);
// console.log('This is anotherOriginalArray after trueNewArray has been reversed', newOriginalArray);
// console.log('is `a` equal to anotherOriginalArray[0]:', newOriginalArray[0] === a);

var abc = 8;
var b = 9;
var c = 10;

let es5obj = {
  a:abc,
  b:b,
  c:c,
  d : function (){
    console.log(es5obj.a, es5obj.b, es5obj.c);
  }
}

es5obj.d()

let es6obj = {
  abc,
  b,
  c,
  d(){
    console.log(es6obj.abc, es6obj.b, es6obj.c);
  }
}

es6obj.d()
