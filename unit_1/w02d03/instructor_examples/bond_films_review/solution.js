// ==========================================
// BOND FILMS ARRAY
// ==========================================
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


// ==========================================
// BOND: TITLES
// ==========================================
// init an empty array to store all titles
const bondTitles = [];

// loop through the bond films array
for (let film of bondFilms) {
  // push all titles into the titles array
  bondTitles.push(film.title);
}

// console.log(bondTitles);

// ==========================================
// BOND: Odd Year
// ==========================================
// init an empty array to store our odd year films in
const oddBonds = [];

//loop through the film array
for (let film of bondFilms) {
  // check if the year is odd or not
  if (film.year % 2 !== 0) {
    // if its odd push the film into the array
    oddBonds.push(film)
  }
}

// console.log(oddBonds);

// ==========================================
// BOND: GROSS
// ==========================================

// init an empty array to hold all gross values

const grossArr = [];

// loop through the bond films
for (let film of bondFilms) {
  //remove the dollar sign using the replace method
  let removedDollar = film.gross.replace('$', '');

  // console.log(removedDollar);

  let removedCommas = removedDollar.replace(/,/g, '')
  // console.log(removedCommas);

  // convert the string into a number
  let convertedNum = Number(removedCommas)
  // console.log(convertedNum);

  grossArr.push(convertedNum)
}

// init a total gross var

let totalGross = 0;

//loop through the gross values array
for (let value of grossArr) {
  // sum all the numbers of the array by adding them onto the totalGross
  totalGross = totalGross + value
}

console.log(totalGross);
