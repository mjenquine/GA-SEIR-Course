//Variables
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const productsController = require('./controllers/products.js')
const PORT = 3000
//Middleware
app.use(express.urlencoded({exteded: true}))
app.use(methodOverride('_method'))

app.use('/products', productsController)
//Database connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Listen//////////////////////////////////////////////
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
