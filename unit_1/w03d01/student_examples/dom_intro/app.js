document.querySelector('h1').innerText = 'Welcome to the Upside Down'

const image = document.querySelector('img')
//console.log(image);
 image.style.display = 'none'
 image.style.display = 'block'
 image.style.filter = 'grayscale(100%)'
 image.style.width = '95%'
 image.style.filter = ''

 // create an element

const eggos = document.createElement('img')
document.querySelector('.container').appendChild(eggos)
eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')

eggos.style.width = '100%'
eggos.remove()

const li = document.querySelectorAll('li');
//console.log(li);

li[0].innerText = 'Demo Dog Hangout'
li[4].style.color = 'hotpink'
li[3].remove()
