// console.log('app.js loaded for palette picker');
// console.log($)

const $colorPalette = $('#color-palette')
const $myPalette = $('#my-palette')
const $generate = $('#generate')
// console.log($generate)

const makePalette = () => {
  $colorPalette.empty()
  for (let i=0; i < 150; i++) {
    const $square = $('<div>')
    $square.addClass('square')
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    // goal is to make a string that looks like this
    // where 100 can be any value between 0 - 255
    // rgb(100,100,100)
    const color = 'rgb(' + red + ',' + green + ',' + blue + ')'
    // setting the value (two arguments)
    $square.css('background-color', color)
    $square.on('click', addColor)
    $colorPalette.append($square)
  }
}


const addColor = () => {
  // getting the value, one value we get the value
  const color = $(event.currentTarget).css('background-color')
  const $square = $('<div>')
    .addClass('square')
    .css('background-color', color)
    .appendTo($myPalette)
}

$generate.on('click', makePalette)

// call on page load
makePalette()
