console.log($)

const obj = {
    url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
    success: (data)=>{
        console.log(data);
    },
    error: ()=>{
        console.log('bad request');
    }
}

$( () => {
    $.ajax({
      url:'http://www.omdbapi.com/?apikey=53aa2cd6&s=Spiderman'
    }).then(
      (data) => {
        data.Search.forEach((el)=> {
          const $body = $('body')
          const $div = $(`<div><span>${el.Title}</span> <span>${el.Year}</span><span>${el.Type}</span> <br/><hr></div>`);
          $body.append($div)
        })
      },
      ()=> {
        console.log('this isnt SPARTA');
      }
    );

    $('form').on('submit', (event)=>{

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
                // $('input[type="text"]').empty(); for removing html elements
                $('form').trigger('reset') // in order to empty the values so it depends on what you need and how your form works
            },
            ()=>{
                console.log('bad');
            }
        );
    })
})






















console.log('end')
