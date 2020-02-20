// Dependencies
const express = require('express')
const app = express()
const port = 3000

// 'Data'
const fruits = require('./models/fruits.js')

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'
// routes

// index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})
// // Create Route
// app.post('/fruits', (req, res)=>{
//   console.log('Create route accessed!')
//   console.log(`The name of the fuit is : ${req.body.name}`) // This is showing up in Nodemon because our console prints to where our server is running
//   console.log(`The color of the fruit is: ${req.body.color}`) // This is showing up in Nodemon because our console prints to where our server is running
//   res.send(req.body) // this is being shown in our terminal via our curl request
// })
// create
app.post('/fruits', (req, res) => {
  console.log(req.body)
  if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else { // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  res.redirect('/fruits')
})
//new
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
})
// show
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index]
  res.render('show.ejs', {
    fruit: currentFruit
  })
})

app.listen(port, () => {
  console.log('listening on port', port)
})
