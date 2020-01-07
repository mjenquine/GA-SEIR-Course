// const password = 'p1234'
//
// console.log(password == 'p1234')
// const jacket = 'blue'
// console.log(jacket  === 'blue' || jackect === 'black')
//
// console.log('cats' - 5 === 'dogs' /2)
// console.log()
// console.log('cats' - 5 === 'cats' - 5)
//
// var c3po = 'cool robot'
//
// console.log(c3po)

const satchel = ["chair", "table", "candle", "map", "magnifying glass", "rupees", "Pepto Bismol", "boomerang"];
for (let i = 0; i < satchel.length; i += 2) {
  console.log("A nimble rogue is trying to steal my: " + satchel[i] + "!!!");
};

const drSeussBooks = ["Cat in the Hat", "Green Eggs and Ham", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

console.log(drSeussBooks.length)

for (let i = 0; i < satchel.length; i ++) {
  if (i % 2 === 0) {
    console.log("A lovely fairy has enchanted my ", satchel[i]);
  }
};

for (let i = 0; i < satchel.length; i ++) {
  if ((i === 5) || (i % 2 === 0)) {
    console.log("A sneaky elf has set fire to my "  + satchel[i]);
  }
};

console.log(satchel[satchel.length/2])

for (let i = 0; i < satchel.length; i ++) {
  if (i % 2 === 0) {
    console.log('A lovely fairy has enchanted my', satchel[i])
  }
}

for (let i = 0 ; i < satchel.length; i++){
  if ( i % 2 === 0 && i % 3 === 0 ){
    console.log('I have discovered a mysterious engraving on my ' + satchel[i])
  }
}
