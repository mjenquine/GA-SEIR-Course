### Spread and Rest Operators
The syntax is the same, but depending on what you are doing, it will act differently. The spread operator will take values and spread them into an array. The rest operator will gather values into an array

Spread operator:

```
//SPREAD (take out of array)
//Let's look at an awesome Math method
const x = -5;
const y = 5;

console.log(Math.max(x,y)); // 5

// But what if you have
const z = [1,5,-2,8,-9,17,-22];
// Using Math.max is doable, but cumbersome with an array.

// Now you can do
console.log(Math.max(y, ...z)); // 17

// Easy as pie!
```

Rest operator:
```

//REST (gather into array)

//Let's get a bunch of arguments and sum the only the ones that are numbers

const sumOnlyNums  = (...args) => {
   var nums = args.filter(arg => typeof arg === 'number');
   var sum = nums.reduce((sum, num) => sum + num );
   return sum;
}

console.log(sumOnlyNums (44, false, 'pizza', 45, {season: "winter"}, [1,2,3,4,5,], 2, 9)); // 100

// Duck soup FTW!
```
What's going on in the above function? What is nums? what is sum? Are they arrays? Numbers? Objects? What method could you call to check if one (or the other, or both) are arrays?

Also, those arrow functions look really nice, is there a `this` that they are binding or are they just there to make this code look cleaner? Play around with this function to learn!
