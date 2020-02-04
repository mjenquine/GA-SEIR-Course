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

/////////////////////////////////////////
//           Year Three
////////////////////////////////////////

const $ul = $('<ul>')
$ul.attr('storage', 'trunk')
$container.append($ul)

const $li1 = $('<li>')
const $li2 = $('<li>')
const $li3 = $('<li>')
const $li4 = $('<li>')
const $li5 = $('<li>')
const $li6 = $('<li>')

 $li1.text('butter beer')
 $li2.text('invisibility cloak')
 $li3.text('magic map')
 $li4.text('time turner')
 $li5.text('leash')
 $li6.text('Bertie Bott\'s Every Flavor [Jelly] Beans')

$li2.addClass('secret')
$li3.addClass('secret')
$li4.addClass('secret')
$li5.addClass('cat')

$ul.append($li1)
$ul.append($li2)
$ul.append($li3)
$ul.append($li4)
$ul.append($li5)
$ul.append($li6)






















})
