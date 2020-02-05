/* global $:true */

const generateTriangle = () => {
  return $('<div>').addClass('triangle')
}

const generatePyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    const $row = $('<div>').addClass('row')
    for (let j = 1; j <= i; j++) {
      const $triangle = generateTriangle()
      $row.append($triangle)
    }
    $('.container').append($row)
  }
}

$(() => {
  generatePyramid(10)
})
