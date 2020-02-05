$(() => {
///////////////////////////////////////////////////////////////////////////////
const makeDivs = () => {
  for (var i = 0; i < 4; i++) {
    if (true) {
      const $redBox = $('<div>').addClass('red-box')
      $('body').append($redBox)
    }
    if (true) {
      const $blackBox = $('<div>').addClass('black-box')
      $('body').append($blackBox)
    }
  }
  for (var i = 0; i < 4; i++) {
    if (true) {
      const $blackBox = $('<div>').addClass('black-box')
      $('body').append($blackBox)
    }
    if (true) {
      const $redBox = $('<div>').addClass('red-box')
      $('body').append($redBox)
    }
  }
}

const makeRealCheckers = () => {
  for (var i = 0; i < 4; i++) {
    makeDivs();
  }
}

makeRealCheckers();
///////////////////////////////////////////////////////////////////////////////
});
