/* global $:true */

const generateSquare = (color) => {
  return $('<div>').addClass('square').addClass(color)
}

const generateCheckerBoard = (rows) => {
  for (let i = 0; i < rows; i++) {
    const $row = $('<div>').addClass('row')
    for (let j = 0; j < rows; j++) {
      if ((i + j) % 2 === 0) {
        $row.append(generateSquare('red'))
      } else {
        $row.append(generateSquare('black'))
      }
    }
    $('.container').append($row)
  }
}

$(() => {
  generateCheckerBoard(8)
})
