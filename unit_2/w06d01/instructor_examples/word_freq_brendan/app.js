// findWordFrequencies function
const findWordFrequencies = (sentence) => {
  // init an empty object to return at the end
  const wordFrequencies = {}

  let wordsArray = sentence.toLowerCase().split(" ")
  // console.log(wordsArray);

  // loop through the wordsArray
  for (let word of wordsArray) {
    // check to see if the current word is a key in the wordFrequencies object
    if (wordFrequencies[word]) {
      wordFrequencies[word]++
    } else {
      wordFrequencies[word] = 1
    }
  }
  return wordFrequencies
}

// console.log(findWordFrequencies("The quick brown fox jumped over the fence"));

// findHighestFrequency function
const findHighestFrequency = (wordFrequencies) => {
  // init an empty highestWords object
  const highestWords = {}

  // init a highestValue var
  let highestFrequency = 0

  // loop through the object being passed in to find the highestFrequency
  for (let word in wordFrequencies) {
    console.log(word);
    if (wordFrequencies[word] > highestFrequency) {
      highestFrequency = wordFrequencies[word]
    }
  }

  for (let word in wordFrequencies){
    if (wordFrequencies[word] === highestFrequency) {
      highestWords[word] = highestFrequency
      break
    }
  }
  return highestWords
}

console.log(findHighestFrequency(findWordFrequencies("The quick quick brown fox jumps over the lazy dog")));
