![](/ga_cog.png)


# Bridging Legacy code to ES-Next


## Intro

---
Title: Introduction to ESNext <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Prerequisites: Javascript <br>

---

# Morning Exercise

## ES6 - The Future Is Now! (Sort of)

### Lesson Objectives
 - Know what ESNext is
 - Know how to read MDN for compatibility
 - Explain the purpose of Babel/Transpiling/Compiling
 - Exposure to many new methods/syntaxes of ES6 in order to get ready for React

### Introduction

JavaScript was created in the 1990s by Brendan Eich in just 10 days. It's main function was to work in web browsers, mainly for manipulating the DOM. It was originally called Mocha, then LiveScript and then finally renamed to JavaScript - this was mostly done for marketing purposes.

Though Brendan Eich is a brilliant man, 10 days is not enough to create a great language. JavaScript was problematic and it also struggled in that it had to run in all the different browsers, so making updates that would work across all browsers was really really tough - especially, back when a CD (disk) was required to update programs.

As technology progressed, releasing new updates to browsers became faster and easier and the web moved towards more small updates rather than massive overhauls.

This changed allowed JavaScript to advance as well. JavaScript specifications and standards are maintained by ECMA (European Computer Manufacturers Association) on an international level, hence the alternate name ES or ECMAScript. [Reference](https://en.wikipedia.org/wiki/ECMAScript)

On the job, you'll be exposed to legacy code, current standards and sometimes bleeding edge technology.

Today we're moving forward with some of the latest features of ESNext that are quickly becoming standard.

It is also time to move past fundamentals and start building your skills of learning on your own. The goal of this lesson is to expose you to MANY (definitely TOO MANY) new features of ESNext. The goal isn't to learn them all today; rather, the goal is to raise your awareness so when you start seeing some of this code you'll know you can look it up and learn about it more. Most of the selected examples are required for learning React, but as always, give yourself time to practice and build your understanding.

**Topics**
   - What is ESNext
   - strict mode (legacy)
   - understanding MDN
   - polyfills and shims
   - IFFE
   - Block level scoping with let
   - default value setting
   - arrow functions
   - spread and rest operators
   - swap (desconstucting method)
   - Classes
   - Object literal extensions



### ES6   
ECMAScript is the standard version of JavaScript. ECMA stands for European Computer Manufacturers Association. ES5 became standard in 2009. ES6 (or ES2015), became standard in 2015. But just because it is made standard, it doesn't mean that all browsers/environments are ready/compliant.

ES6 was the first major overhaul of JavaScript in 6 years (the previous major updates were in 2009 and 1999). Since the release of release, there have been much smaller updates annually. Each upcoming release is referred to as ESNext.  

### Strict Mode/Versioning

Software releases usually come with a set of 3 numbers and many (but not all) follow the following pattern

ie: 12.4.3

The first number is a major change that usually involves breaking changes - previous code that has been written that works just fine can totally break/be incompatible with some changes.

The second number is a minor change, often involving something like a new feature and typically doesn't break already working code.

The third usually denotes bug fixes and security updates.

Because ES6 was going to have breaking changes, one thing that was as built-in was to add the text `use strict` at the top of a file. If someone wrote code ES5 code that would break with the changes coming with ES6 the code would error. This would help ensure that programs that would be transitioning from ES5 to ES6 would not break.

In the year 2019(nearly 2020), `use strict` is no longer needed. But you may see it in older code.

 [More info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### MDN
Lets you know which methods/syntaxes are standard, experimental, depreciated, when things were added and more including shims/polyfills.
 [forEach on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


Quickly see if a method is standard[no notation], experimental[flask], depreciated (removed from standards, may be removed)[thumbs down], or obsolete (likely removed altogether in newer environments) [trash can]


![Screenshot left bar, objects](https://i.imgur.com/nSqSXwf.png)

See more information about when the method was defined implemented:
![Screenshot- forEach Specifications section](https://i.imgur.com/7bPC29H.png)




### Polyfills/Shims
 Some people call them polyfills, some call them shims; either way: It is code that is a fallback that provides the functionality when the expected functionality is not available (because old browser, etc. ). Many entries in MDN have polyfills. This is also a great way to look at how the ECMAScript standard code is written ( a lot of examples are directly from the official ECMAScript docs)

 An example Polyfill
 ![Screenshot- forEach polfill section](https://i.imgur.com/e0G8ZCB.png)

### When can I use these new standards?
 Now! But it depends where. Node.js support most/nearly all new things. [Chrome and Safari, at this moment in time, have been keeping up well](http://caniuse.com/#search=es6). But new features are being added and tested. To be sure that code will run across many platforms (don't forget the people who still use IE), many people have come to rely on transpilers/compilers. Transpilers/Compilers take 'dialects' of standard code (incuding ES6, coffeescript, typescript and more) and convert the code for you. A popular one for ES6 is [Babel](https://babeljs.io/), they have both repl (Read, Evaluate, Print, Loop) and an npm module/gem.

<hr>

## Watch and Learn!

 Note: As of 1/23/2017 All the following examples work in both node.js and Chrome.

### IIFE
 IIFE - Immediately Invoked Function Expression - often used to create a block of scope. This is not an ES6 thing, but rather an example of an old way to get block scoping.

 Now you can use `let` and `const` instead of `var` to get the same block scoping (see next section).

 Thought question: `var` is the old way for declaring a variable. Why didn't standards get rid of it?

 ```js
var a = 10;

(function IIFE(){
  var a = 2;
  console.log ('Inside the IFFE, the value of a is', a ); //"Inside the IFFE, the value of a is 2"
  })();

  console.log ( 'Outside the IFFE, the value of a is', a ); //"Outside the IFFE, the value of a is 10s"

 //Now let the world know that you know what an IIFE is! They'll be impressed!
  ```

### Block Scoping

  A new way to get block level scoping is with the keyword let, and the use of `{}` as in any `{}`, not just tied to a function! Note: `let` is NOT meant to completely replace `var`!

 ```js
 var b = 1234

 { let b = 5678
   console.log( 'the value of b inside the `{}` is',b ); //"block level scope"
 }

 console.log ('the value of b outside of the `{}` is', b) //"global scope"
 ```

  One more example

```js

//a global variable
var j = 10;


/////////// ES5 ///////////
//get a little formatting, for clarity
console.log('\n\nfor loop using `var`:\n');

//for loop using var
for (var iES5 = 0; iES5 < 5; iES5++){
  var kES5 = j + iES5;
  console.log('the vale of iES5 inside the for loop', iES5);
}

console.log ('the value of iES5 outside the for loop is' , iES5);
console.log ('the value of kES5 outside the for loop is' , kES5);
console.log ('the value of j is' , j);
```


```js
/////////// ES6 ///////////

//get a little formatting, for clarity
console.log('\n\nfor loop using `let`:\n');

//for loop using let
for (let iES6 = 0; iES6 < 5; iES6++){
  let kES6 = j + iES6;
  console.log('the value of iES6 inside the for loop is ', iES6)
}

console.log('the value of iES6 outside the for loop is: ReferenceError: iES6 is not defined'); // console.log(iES6) //error undefined
console.log('the value of j outside the for loop is', j);
console.log('the value of kES6 outside the for loop is: `ReferenceError: kES6 is not defined`');  // console.log(kES6) //error undefined

//Woot woot!
 ```

 *Bonus*

 Research on your own:

 the following loop will not error:

 ```js
 for ( z = 0; z < 5; z++){
   // do cool stuff
 }
 ```
 Why is not including a `let` in front of the first `z` considered a poor practice?
``

### Default values
When creating a constructor and you wanted a default value, you previously had to write something like this:

```js
function Beverage_es5 ( type ){
  this.type = type || "water";
}
```

Now you can do this in ES6

```js
console.log('\n\n')

function Beverage_es5 ( type ){
  this.type = type || "water";
}

//Now you can do

function Beverage_es6 ( type = 'sparkling water' ){
  this.type = type;
}

var breakfast = new Beverage_es5();
var breakfast2 = new Beverage_es5( 'beer' );
var secondBreakfast = new Beverage_es6();
var secondBreakfast2 = new Beverage_es6( 'rocket fuel' );

console.log ( 'breakfast default ES5: ');
console.log ( breakfast );
console.log ( '\nsecondBreakfast default ES6: ');
console.log ( secondBreakfast );

console.log ( '\nbreakfast value given, ES5: ');
console.log ( breakfast2 );
console.log ( '\nsecondBreakfast value given, ES6: ');
console.log ( secondBreakfast2);


//Now that is refreshing!
```
### Arrow Functions => => =>
A new way to write a function expression (arrow functions are always anonymous functions), with a bonus feature!

 More important than the new syntax, arrow functions bind the value of `this`

Let's compare the syntaxes:
```js
//ES5 - 2 arguments
var sumES5 = function (a, b){
  return a+b;
}

console.log('\nES5 sum:',sumES5(5,5));

//ES6 - 2 arguments
var sumES6 = ( a, b ) => a + b;

console.log('ES6 sum:', sumES6(6,6));

//ES5 - no arguments
var salutationsES5 = function (){
  console.log ("\nHello! ES5");
}

salutationsES5();

//ES6 - no arguments
var salutationsES6 = () => console.log("Howdy ES6\n");

salutationsES6();

//ES5 - one argument
var squareES5 = function (c){
  return c*c;
}

console.log('ES5 square:', squareES5(5));
//ES6 - one argument
var squareES6 = c => c*c
console.log('ES6 square:',squareES6(6));


```

As you can see `{}`  and `return` are optional in short code blocks!
Also, if there is just one argument, `()` is optional!

Here is an example of the arrow function binding this

```js
// Create constructor function, inputs name, has defualt friend values
function Person ( name , friends = ["Charlie", "Dennis", "Ron", "Sweet Dee", "Frank"]){
  this.name = name;
  this.friends = friends;


//Add four methods:

// The first, `secret Admirer`, `this.name` is undefined in the forEach function
this.secretAdmirer = function (){
  this.friends.forEach(function ( f ){
    console.log( this.name + " sends flowers to " + f );
  });
}

  //The second one is the way we got around the issue of `this` - which was to set the desired `this` to a variable called `that` or `self` or something similar:

  this.giveOldSchoolLove = function (){
    var self = this;
    this.friends.forEach(function ( f ){
      console.log( self.name + " likes " + f );
    });
  }

  // use .bind()
  this.giveBindingAffection = function (){
    this.friends.forEach(function ( f ){
        console.log( this.name + " makes friendship bracelets for " + f )
    }.bind(this));
  }

  //Finally, by using the arrow function, `this` is already bound:

  this.giveNewSchoolLove = function (){
    this.friends.forEach(f =>
    console.log( this.name + " hearts " + f ));
  }
}

//See examples
k = new Person ( "Karolin" );
console.log( '\nSecret Admirer:' )
k.secretAdmirer();
console.log( '\nShow old school love:' )
k.giveOldSchoolLove();
console.log( '\nShow new school love:' )
k.giveNewSchoolLove();

// Supercalifragilisticexpialidocious !!!
```

### Array.isArray()
If you have tried to confirm if something is an array with ES5, you may have found it frustrating:
```
var arr = [1,2,3];

console.log(typeof arr); //'object'
```
You could do
```
arr instanceof Array; // true
```
But now there is a new method!
```
Array.isArray(arr); //true

//Sweet!
```

### Spread and Rest Operators
The syntax is the same, but depending on what you are doing, it will act differently. The spread operator will take values and spread them into an array. The rest operator will gather values into an array

Spread operator:

```js
//SPREAD (take out of array)
//Let's look at an awesome Math method
var x = -5;
var y = 5;

console.log(Math.max(x,y)); // 5

// But what if you have
var z = [1,5,-2,8,-9,17,-22];
// Using Math.max is doable, but cumbersome with an array.

// Now you can do
console.log(Math.max(y, ...z)); // 17

// Easy as pie!
```

Rest operator:
```js

//REST (gather into array)

//Let's get a bunch of arguments and sum the only the ones that are numbers

function sumOnlyNums (...args){
   var nums = args.filter(arg => typeof arg === 'number');
   var sum = nums.reduce((sum, num) => sum + num );
   return sum;
}

console.log(sumOnlyNums (44, false, 'pizza', 45, {season: "winter"}, [1,2,3,4,5,], 2, 9)); // 100

// Duck soup FTW!
```
What's going on in the above function? What is nums? what is sum? Are they arrays? Numbers? Objects? What method could you call to check if one (or the other, or both) are arrays?

Also, those arrow functions look really nice, is there a `this` that they are binding or are they just there to make this code look cleaner? Play around with this function to learn!

### Swap values: File under `Destructuring Assignment`

```js
//If you wanted to swap the value of x and y with es5,
//you had to do
var x = true;
var y = false;
var temp;

temp = x;
x = y;
y = temp;

//The new way
//will return x and y to original values in this case
[x,y] = [y, x]

// NEATO!
```
<details><summary>Note</summary>
The reason this is special and new is because we have to
remember that array values are normally passed by reference.
It is also unusual to have an array that is not assigned to a variable


### Unpacking Objects: File under `Destructuring Assignment`

One new trend in JS is to find ways to clean up the code. We can pull out values from an object

```js
const someLongObjectName = {
  brand: 'Tandy',
  price: 2894,
  year: 1984,
  ram: '128KB',
  hardDrive: '20MB'
  mouseIncluded: true
}
```
If we want to access the price, we always have to type the whole name of the object.

```js
someLongObjectName.price
```

However, now we can pull out the value

```js
const {price} = someLongObjectName

console.log(price)
```

We can also pull out more than one value

```js
const {brand, year} = someLongObjectName
console.log(brand)
console.log(year)
```
## Passed By Reference (arrays and objects)

The way JavaScript stores arrays and objects in memory is it stores them in one place. You can add more `pointers` (variable names that access this object/array), but if you change the value, it changes everything. Therefore you have to be sure to copy your arrays/objects in the right way if you want to keep the original intact.

```js
// Pass by reference
var a =  1;
var b =  2;

var originalArray = [a,b];
console.log('\nis `a` equal to orginalArray[0]:', a === originalArray[0]);//true

var newArray = originalArray;

//will reverse BOTH arrays (because it is actually two references to the same array)
newArray.reverse()

console.log('\nThis is newArray.reverse():', newArray)
console.log('This is originalArray after newArray has been reversed', originalArray)
console.log('is `a` equal to orginalArray[0]:', a === originalArray[0]);//false

//To make a duplicate array that is not passed by reference, you would have to do something like:
var anotherOriginalArray = [a,b];
console.log('\nis `a` equal to anotherOrginalArray[0]:', a === anotherOriginalArray[0]);//true

var trueNewArray = anotherOriginalArray.map(function(e){
  return e;
});

console.log('this is trueNewArray', trueNewArray);
trueNewArray.reverse();
console.log('\nThis is trueNewArray.reverse():', trueNewArray);
console.log('This is anotherOriginalArray after trueNewArray has been reversed', anotherOriginalArray);
console.log('is `a` equal to anotherOriginalArray[0]:', anotherOriginalArray[0] === a);
```
</details>

### Support for Classes
A term you may have not encountered yet is syntatic sugar. Syntatic sugar means a nicer way to write something that functions the same as an older syntax.

Classes are a new way to write prototypes/prototypal inheritance in JavaScript. However, even though this syntax looks rather different, under the hood it still works the same way as prototypes/prototypal inheritance.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }
  makesNoises() {
    return (`${this.name} meows`);
  }
  purrs(){
    return (`${this.name} purrs`);
  }
}

class Lion extends Cat {
  makesNoises() {
    return `${this.name} roars!`;
  }
}

var merlin = new Cat("Merlin");
var charlie = new Lion("Charlie");

console.log(merlin.makesNoises());
console.log(charlie.makesNoises());
console.log(charlie.purrs());
console.log(merlin.purrs());

```
### Object literal upgrades



```js
//instead of
var a = 8;
var b = 9;
var c = 10;

var es5obj = {
  a:a,
  b:b,
  c:c,
  d : function (){
    console.log(es5obj.a, es5obj.b, es5obj.c);
  }

}

//now do

var es6obj = {
  a,
  b,
  c,
  d(){
    console.log(es6obj.a, es6obj.b, es6obj.c);
  }
}

// What glorious syntactic sugar!
```

### More More More!
New methods and features are being aded and tested all the time! Here are some great ones to look up and learn:
- Async/Await: syntatic sugar for Promises!
- Import/Export modules!
- helper functions - trunc, entries, values, keys
