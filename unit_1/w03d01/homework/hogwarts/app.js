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

/////////////////////////////////////////
//           Year Four
/////////////////////////////////////////

const $h5 = $('<h5>')
$h5.text('Spring 2017')
$container.append($h5)

const $table = $('<table>')
$container.append($table)

const $th1 = $('<th>')
$th1.text('Day')
const $th2 = $('<th>')
$th2.text('Classes')

$table.append($th1)
$table.append($th2)

const $tr1 = $('<tr>')
$table.append($tr1)
const $tr2 = $('<tr>')
$table.append($tr2)
const $tr3 = $('<tr>')
$table.append($tr3)
const $tr4 = $('<tr>')
$table.append($tr4)
const $tr5 = $('<tr>')
$table.append($tr5)
const $tr6 = $('<tr>')
$table.append($tr6)
const $tr7 = $('<tr>')
$table.append($tr7)

const $td1 = $('<td>')
const $td2 = $('<td>')
const $td3 = $('<td>')
const $td4 = $('<td>')
const $td5 = $('<td>')
const $td6 = $('<td>')
const $td7 = $('<td>')
const $td8 = $('<td>')
const $td9 = $('<td>')
const $td10 = $('<td>')
const $td11 = $('<td>')
const $td12 = $('<td>')
const $td13 = $('<td>')
const $td14 = $('<td>')

$td1.text('Monday')
$td2.text('Herbology')
$td3.text('Tuesday')
$td4.text('Divination')
$td5.text('Wednesday')
$td6.text('History of Magic')
$td7.text('Thursday')
$td8.text('Charms')
$td9.text('Friday')
$td10.text('Potions')
$td11.text('Saturday')
$td12.text('Transfiguration')
$td13.text('Sunday')
$td14.text('Defense Against the Dark Arts')

$tr1.append($td1)
$tr1.append($td2)
$tr2.append($td3)
$tr2.append($td4)
$tr3.append($td5)
$tr3.append($td6)
$tr4.append($td7)
$tr4.append($td8)
$tr5.append($td9)
$tr5.append($td10)
$tr6.append($td11)
$tr6.append($td12)
$tr7.append($td13)
$tr7.append($td14)

/////////////////////////////////////////
//           Year Five
/////////////////////////////////////////


$h4Wand.remove()
$li1.remove()

const $h4Wand2 = $('<h4>')
$h4Wand2.text('Earth Shaker')
$h4Pet.append($h4Wand2)

$h4Wand2.css('color', 'indigo')

$h2Name.append($h4Pet)

$h3House.append($h4Pet)

/////////////////////////////////////////
//           Year Six
/////////////////////////////////////////

const $secrets = $('.secret')
$secrets.delay(2000).hide('slow')
$secrets.show('slow')
$li5.addClass('cabbage')
$li5.removeClass('cabbage')





})
