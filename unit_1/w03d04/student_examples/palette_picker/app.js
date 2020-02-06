
const $colorPalette = $('#color-palette')

const $myPalette = $('#my-palette')

const $generate = $('#generate')

const makePalette = () => {
  $colorPalette.empty()
  for (let i = 0; i < 150; i++) {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const color = 'rgb(' + red + ',' + blue + ',' + green + ')'

    const $square = $('<div>')
    $square.addClass('square')
    $square.css('background-color', color)
    $square.on('click', addColor)
    $colorPalette.append($square)
  }
}

const addColor = () => {
  const color = $(event.currentTarget).css('background-color')
  const $square = $('<div>').addClass('square').css('background-color', color).appendTo($myPalette)
}

makePalette()

$generate.on('click', makePalette)










// my refactor of makePalette is below
// const $square = $('<div>').addClass('square').appendTo($colorPalette)
