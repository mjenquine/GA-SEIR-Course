////////////////////////////////
// Easy Going
////////////////////////////////

// Write a for loop that will log the numbers 1 through 20.

// for (let i = 1; i <= 20; i ++){
//   console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////

// Write a for loop that will log only the even numbers in 0 through 200.


// for (let i = 0; i <= 200; i += 2){
//   console.log(i);
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// // create a loop that runs from 1 to 100
// for (let i = 1; i <= 100; i++) {
//     // check if i is evenly divisible by 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     // check if i is evenly divisible by 3
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     // check if i is evenly divisible by 5
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     // if none of the above is true, log i
//     } else {
//         console.log(i);
//     }
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

    // plantee[2] += 1;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

    // wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins"

    // dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

    // wolfy.shift();
    // wolfy.unshift("Gameboy");


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
//
// // for each index of the array
// for (turtle of ninjaTurtles){
//     console.log(turtle.toUpperCase());
// }


////////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
// // 1. Use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort();
// console.log(favMovies);
//
// // 2. Use the pop method
// favMovies.pop();
// console.log(favMovies);
//
// // 3. Push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);
//
// // 4. Reverse the array
// favMovies.reverse();
// console.log(favMovies);
//
// // 5. Use the shift method
// favMovies.shift();
// console.log(favMovies);
//
// // 6. Unshift - what does it return?
// favMovies.unshift('Spirited Away');
// console.log(favMovies);
//
// // 7. Splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchanged instead of counting it yourself")
// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
// console.log(favMovies);
//
// // 8. Slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
// // 9. store the value of your slice in a variable, console.log it
// const sliceHalf = favMovies.slice(Math.floor(favMovies.length/2), favMovies.length);
// console.log(sliceHalf);
//
// // 10. Console.log your final results
// console.log(favMovies);

////////////////////////////////
// Where is Waldo
////////////////////////////////

// With the following multi-dimensional array:

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
//
// // 1. Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo);
//
// // 2. Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);
//
// // 3. Access and console.log "Waldo"
// console.log(whereIsWaldo[2][1][1]);

// Notes on Where is Waldo: Draw it out!
// See this thread on imgur for an example drawing: https://imgur.com/a/ng57AqQ

////////////////////////////////
//  Excited Kitten
////////////////////////////////

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// const catTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
//
// // create a for loop that runs 20 times
// for (let i = 1; i <= 20; i++){
//     // create variable to evaluate a random index number for each loop
//     let randomIndex = Math.floor(Math.random() * catTalk.length);
//     // if i divided by 2 has no remainder - ie: it's an even number
//     if(i % 2 === 0){
//         console.log(catTalk[randomIndex]);
//     // if i divided by 2 has a remainder - ie: it's an odd number
//     } else {
//         console.log("Love me, pet me! HSSSSSS!");
//     }
// }

////////////////////////////////
//  Find the Median
////////////////////////////////

// 1. Find the median number in the following nums array, then console.log that number. Expected output: 15

// hint: if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//
// // Sort the array to get the numbers numerical order, ascending
// nums.sort();
// console.log(nums);
//
// // If the array has an ODD number of elements
// median = nums[Math.floor(nums.length/2)];
// console.log(median);
