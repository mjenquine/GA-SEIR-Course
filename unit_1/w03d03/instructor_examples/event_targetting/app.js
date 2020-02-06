// console.log('Oh hey, I remember something like this')

// Global variables
// hold our cards to test for matchcing

let handOfCards = []
// document on ready - document on load
$(() => {
  // select all elements that have the class card
  const $card = $('.card')
  // add an event listener, add an event handler
  $card.on('click', (event) => {
    // get the element we clicked on and toggle the class of card-back
    // if card-back class is present, remove it
    // if card-back class is absent, add it
    $(event.currentTarget).toggleClass('card-back')
    playHand()
  })
}) // this closes document on ready


const playHand = () => {
  handOfCards.push(
      $(event.currentTarget).children().eq(1).text()
  )
  if (handOfCards.length === 2) {
    checkHand()
  }
}

const checkHand = () => {
  // console.log('OK, I will check your cards', handOfCards)
  if (handOfCards[0] === handOfCards[1]) {
    $('body').append(`<h2>It's a match!</h2>`)
  } else {
    $('body').append(`<h2>It's NOT a match!</h2>`)
  }
  handOfCards = []
}
