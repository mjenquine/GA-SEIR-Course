$(() => {
  let $body = $('body');
  //==============================//
  //           Year 1             //
  //==============================//
  const $container = $('#container')
  // console.log($container);
  const $h1 = $('<h1>');
  $h1.text('Hogwarts');
  $('body').append($h1)
  //==============================//
  //           Year 2             //
  //==============================//
  let $h2 = $('<h2>').text('Brendan')
  $h2.appendTo($body);
  let $h3 = $('<h3>').text('Ravenclaw')
  $h3.appendTo($body);
  let $pet = $('<h4>').text('Warby').addClass('owl')
  $pet.appendTo($body)
  let $wand = $('<h4>').text('Dragon scale wand')
  $wand.appendTo($body)



  //==============================//
  //           Year 3             //
  //==============================//
  const $ul = $('<ul>').attr('storage', 'trunk')
  $('<li>').text('butter beer').appendTo($ul)
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul)
  $('<li>').text('magic map').addClass('secret').appendTo($ul)
  $('<li>').text('time turner').addClass('secret').appendTo($ul)
  $('<li>').text('leash').addClass('owl').appendTo($ul)
  $('<li>').text('Bertie Botts Every Flavored Beans').appendTo($ul)
  $ul.appendTo($body)
  //==============================//
  //           Year 4             //
  //==============================//
  const $h5 = $('<h5>').text('Spring 2017')
  const $table = $('<table>')
  const $thead = $('<thead>')
  $('<th>').text('Day').appendTo($thead)
  $('<th>').text('Classes').appendTo($thead)
  $table.append($thead);
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));

  $body.append($h5).append($table);

  //==============================//
  //           Year 5             //
  //==============================//
  $('h4').eq(1).remove()
  $('li').eq(0).remove()
  $('h4').after($('<h4>').text('Rosewood wand with unicorn hair').css('color', 'indigo').addClass('wand'))
  $('h4.owl').after($h2)
  $('h4').eq(1).before($('h4.owl'))





  //==============================//
  //           Year 6             //
  //==============================//
  $('.secret').hide('slow').delay(2000).show('slow')
  $('li.owl').addClass('cabbage')
  $('li.owl').removeClass('cabbage')

  //==============================//
  //           Year 7             //
  //==============================//
  $('h5').text('Fall 2018')
  $('ul').prepend($('<li>').text('Butter beer'))
  $('ul').attr('storage', 'chest');
})
