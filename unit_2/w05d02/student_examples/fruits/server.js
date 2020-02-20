//dependencies
const express = require('express')
//configuration
const app = express()
const PORT = 3000

//'Data'
const fruits = require('./models/fruits.js')
console.log(fruits);
//Routes
//Index
app.get('/fruits', (req, res) => {
  //res.send(fruits)
  res.render('index.ejs', {
    allFruits: fruits 
  })
})

//Show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  //first argument is a string and it is which file we want to load
  //second argument is an object and it is the data we want to pass
  res.render('show.ejs', {
    //the key is the name of the variable we'll access in our ejs file
    fruit: fruits[req.params.indexOfFruitsArray]
  })
})






//Listener
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})
