// $(() => {
//   // form on submit
//   $('form').on('submit', addToDo)
// })
//
// // addToDo function
//
// const addToDo = () => {
//   event.preventDefault()
//   const $inputBox = $('#input-box')
//
//   const todo = $inputBox.val()
//
//   $inputBox.val('')
//
//   const $div = $('<div>')
//   .addClass('to-do-item')
//   .html('<h3>' + todo + '</h3>')
//
//   $('#to-do-list').append($div)
//
//   const $button = $('<button>')
//   .text('Complete')
//   .on('click', moveToDo)
//   .appendTo($div)
// }
//
// // Make a function to move the todo to the done list
//
// const moveToDo = () => {
//   const $toDoDiv = $(event.currentTarget).parent()
//
//   $toDoDiv
//   .removeClass('to-do-item')
//   .addClass('done-item')
//   .appendTo('#completed')
//   .children()
//   .eq(1)
//   .text('REMOVE')
//   .on('click', removeToDo)
// }
//
// // make a function to remove the todo item
//
// const removeToDo = () => {
//   $(event.currentTarget).parent().remove()
// }

const list = [];
console.log(list);

$(() => {

  const $toDoList = $('<ul>');
  $('#to-do-list').append($toDoList);
  const $completeList = $('<ul>');
  $('#completed').append($completeList);


  $('#submit').on('click', () => {
    event.preventDefault()
    const $inputValue = $('#input-box').val();
    const $li = $('<li>').text($inputValue).addClass('to-do-item');
    $toDoList.append($li);
    const $completeButton = $('<button>').text('COMPLETE').addClass('completeButton');
    $li.append($completeButton);
    list.push($inputValue);

    $completeButton.on('click', (event) => {
      $('#completed').append($li).toggleClass('completed');
      $completeButton.text('REMOVE');
      $li.css('background', '#ED6495')

      $('.completed').on('click', () => {
        $li.remove();
      })
    })
  });



})
