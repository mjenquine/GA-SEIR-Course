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
//
// const promise = $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// })
// promise.then(
//   (data) =>{console.log(data)},
//   ()=> {console.log('i did not run')}
// )

$.ajax(obj)
