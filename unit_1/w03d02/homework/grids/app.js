$(() => {
///////////////////////////////////////////////////////////////////////////////
const makeDivs = () => {
  for (var i = 0; i < 32; i++) {
    if (true) {
      const $redBox = $('<div>').addClass('red-box')
      $('body').append($redBox)
    }
    if (true) {
      const $blackBox = $('<div>').addClass('black-box')
      $('body').append($blackBox)
    }
  }
}
makeDivs()
///////////////////////////////////////////////////////////////////////////////
});
