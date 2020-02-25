//Variables
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/products.js')
const PORT = 3000
//Middleware
app.use(express.urlencoded({exteded: true}))
//Database connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
//////////////////////Routes//////////////////////////

//Presentation Rountes////////////////////////////////
//INDEX
app.get('/products', (req, res) => {
  Product.find({}, (error, allProducts) => {
    res.render('index.ejs', {
      products: allProducts
    })
  })
})
//NEW
app.get('/products/new', (req, res) => {
  res.render('new.ejs')
})
//SHOW
app.get('/products/:id', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.render('show.ejs', {
      product: foundProduct
    })
  })
})
//EDIT

//Functional Routes///////////////////////////////////

//CREATE
app.post('/products/', (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    res.redirect('/products')
  })
})
//UPDATE

//DELETE

//Listen//////////////////////////////////////////////
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
