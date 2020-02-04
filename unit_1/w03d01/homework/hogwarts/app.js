$(() => {

/////////////////////////////////////////
//           Year One
////////////////////////////////////////
const $container = $('#container')
const $h1 = $('<h1>')
$h1.text('Hogwarts')
$container.append($h1)

/////////////////////////////////////////
//           Year Two
////////////////////////////////////////
const $h2Name = $('<h2>')
$h2Name.text('Mark')
const $h3House = $('<h3>')
$h3House.text('Hufflepuff')
const $h4Pet = $('<h4>')
$h4Pet.text('Woodrow')
$h4Pet.addClass('cat')
$container.append($h2Name)
$container.append($h3House)
$container.append($h4Pet)
const $h4Wand = $('<h4>')
$h4Wand.text('Holly Wand with Unicorn Hair Core')
$container.append($h4Wand)















})
