//Variables
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const Log = require('./models/logs.js')
const PORT = 3000
//Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
//Database Connection
mongoose.connect('mongodb://localhost:27017/captainlogcrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Listen
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
