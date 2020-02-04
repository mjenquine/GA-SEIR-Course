// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};






//document on load / document on ready

$(() => {
  //create an element
  const $div = $('<div>')

  $div.addClass('meat')
  //querying for an element
  const $body = $('body')
  //append div to body
  $body.append($div)
  //create another element
  const $h3 = $('<h3>').text('Impossible Burger Meat')
  $div.append($h3)

  const $anotherDiv = $("<div>").addClass("fruit");
  const $anotherH3 = $("<h3>").text("Strawberries");
  $anotherDiv.append($anotherH3);
  $body.append($div, $anotherDiv);


  //querying all the divs
  const $divs = $('div')
  //hide all divs
  // $divs.hide('slow')
  // $divs.show()


  //prepend an image - prepend (begining)
  const $img = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
  $body.prepend($img)
  ///////////////////////////////////////

  //access the div with the index of 2 and console log it - cannot use square brackets
  console.log($divs);
  console.log($divs.eq(2).children());
  ///////////////////////////////////////////
  // Changing div of index 2 text to Kohlrabi
  $divs
    .eq(2)
    .children()
    .text('Kohlrabi')
  ///////////////////////////////////////////

  const $dairyH3 = $('<h3>').text('Stinky Cheese')
  $divs.eq(1).empty().append($dairyH3)

  //////////////////////////////////////////
  $body.css('border', '3em solid black')

})// closes document on ready
