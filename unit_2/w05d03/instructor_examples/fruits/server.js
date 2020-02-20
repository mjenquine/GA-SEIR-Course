// Dependencies
const express = require('express') // this is from node_modules
const app = express() // express function return my app object
const port = 3000 // Setting our port var to a set value

// 'Data'
const fruits = require('./models/fruits.js') // getting our fruits array from this files module.exports

//Middleware
app.use(express.urlencoded({ extended:false })) // will run before all routes
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'
// routes

// our routes function identically to events in JQuery use the Node Event Loop
// index

app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})
// Create Route
// app.post('/fruits', (req, res)=>{
//   console.log('Create route accessed!')
//   console.log(`The name of the fuit is : ${req.body.name}`) // This is showing up in Nodemon because our console prints to where our server is running
//   console.log(`The color of the fruit is: ${req.body.color}`) // This is showing up in Nodemon because our console prints to where our server is running
//   const object = {...req.body, date: `${Date.now()}`}
//   console.log(object)
//   const array = []
//   array.push(object)
//   console.log(array)
// //  console.log(req.body)
//   res.send(object) // this is being shown in our terminal via our curl request
// })

app.post('/fruits', (req, res) => {
  const object = {...req.body}
  console.log(object)
  if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else { // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  res.redirect('/fruits')
})

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
}) // app. listen tells our server to start listening
