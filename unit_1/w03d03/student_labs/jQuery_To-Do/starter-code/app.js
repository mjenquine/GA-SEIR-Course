const list = []

$(() => {
//============================================================
  let $body = $('body');
  $('form').on('submit', (event) => {
    event.preventDefault()
    const inputValue = $('#input-box').val()
    list.push(inputValue)
    $(event.currentTarget).trigger('reset')
    render()
  })

//=============================================================
})
const render = () => {

  $('#to-do-list').empty()
  console.log(list);

  list.forEach((toDo) => {
    const $div = $('<div>').text(toDo).addClass('to-do-item')
    $('#to-do-list').append($div)
    const $statusButton = $('<button>').attr('type', 'button').text('Complete')
    $statusButton.appendTo($div)
    // $statusButton.on('click', (event) => {
    //   $(event.currentTarget).text('Remove')
    //   console.log($(event.parent));
    // })
  })
}
