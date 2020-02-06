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
  $('ul').empty()
  list.forEach((toDo) => {
    const $li = $('<li>').text(toDo).addClass('to-do-item')
    $('#things-to-do-list').append($li)
    const $statusButton = $('<button>').attr('type', 'button').text('Complete')
    $statusButton.appendTo($li)
    $statusButton.on('click', (event) => {
      $(event.currentTarget).text('Remove').parent().appendTo('#things-done-list')
      $statusButton.on('click', (event) => {
        $(event.currentTarget).parent().remove()
      })
    })
  })
}
