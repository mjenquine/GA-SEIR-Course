const cards = [
  'https://www.trustedtarot.com/img/cards/the-fool.png',
  'https://www.trustedtarot.com/img/cards/the-magician.png',
  'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
  'https://www.trustedtarot.com/img/cards/the-empress.png',
  'https://www.trustedtarot.com/img/cards/the-emperor.png',
  'https://www.trustedtarot.com/img/cards/the-heirophant.png',
  'https://www.trustedtarot.com/img/cards/the-chariot.png',
  'https://www.trustedtarot.com/img/cards/strength.png',
  'https://www.trustedtarot.com/img/cards/the-hermit.png',
  'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
  'https://www.trustedtarot.com/img/cards/justice.png',
  'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
  'https://www.trustedtarot.com/img/cards/death.png',
  'https://www.trustedtarot.com/img/cards/temperance.png',
  'https://www.trustedtarot.com/img/cards/the-tower.png',
  'https://www.trustedtarot.com/img/cards/the-moon.png'
]
$(() => {
/////////////////////////////////////////////////////
  const $cardButton = $('<div>').text('Add random image').addClass('cards');
  $('body').append($cardButton)
  $cardButton.on('click', () => { addCard() })

  const addCard = () => {
    for (var i = 0; i < 1; i++) {
      let individualCard = cards[Math.floor(Math.random() * cards.length)]
      console.log(individualCard);
      const $newCard = $('<div>').addClass('newCard').css('background-image', 'url(' + individualCard + ')');
      $('body').append($newCard)
    }
  }
////////////////////////////////////////////////////
});
