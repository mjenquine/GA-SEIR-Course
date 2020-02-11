//console.log('Oh hey, I remember something like this')

//Global Variable =========================================
// hold our cards to test for matching

let handOfCards = []


$(() => {
//=========================================================
  const $card = $('.card')
  $card.on('click', (event) => {
    $(event.currentTarget).toggleClass('card-back');
    playHand()
  });



//=========================================================
});

const playHand = () => {
  handOfCards.push($(event.currentTarget).children().eq(1).text());
  if (handOfCards.length === 2) {
    checkHand()
  }
}

const checkHand = () => {
  //console.log('Ok, I will check your cards', handOfCards);
  if (handOfCards[0] === handOfCards[1]) {
    $('body').append(`<h2>It's NOT a match!</h2>`)
  } else {
    $('body').append(`<h2>It's a match!</h2>`)
  }
  handOfCards = []
}
