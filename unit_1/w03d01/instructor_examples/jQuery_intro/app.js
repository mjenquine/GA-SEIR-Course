// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

// Vanilla way to create an element
// creates a different object than what jQuery would create
// const div = document.createElement("div");
// console.log(div);

// Document on Load/ Document on Ready

$(() => {
  // Create an element
  const $div = $("<div>");
  // console.log($div);
  $div.addClass("meat");

  // create an element
  const $h3 = $("<h3>").text("Impossible Burger Meat");
  $div.append($h3);

  const $anotherDiv = $("<div>").addClass("fruit");
  const $anotherH3 = $("<h3>").text("Strawberries");
  $anotherDiv.append($anotherH3);
  // querying for an element
  const $body = $("body");
  // console.log($body);
  $body.append($div, $anotherDiv);

  // query for all the divs
  const $divs = $("div");
  // hide them
  // $divs.hide();
  // unhide divs
  // $divs.show();

  const $img = $("<img>").attr(
    "src",
    "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
  );

  $body.prepend($img);

  console.log($divs.eq(0));
  console.log($divs[0]);

  $divs
    .eq(2)
    .children()
    .text("Kohlrabi");

  const $dairyH3 = $("<h3>").text("stinky cheese");
  $divs
    .eq(1)
    .empty()
    .append($dairyH3);

  $body.css("border", "3em solid black");
}); // closes document on ready
