//Variables
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Log = require('./models/logs.js')
const PORT = 3000
//Middleware
app.use(express.urlencoded({extended: true}))
//Database Connection
mongoose.connect('mongodb://localhost:27017/captainlogcrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
///////////////////////////////////////////////////////////////
//                   Routes
///////////////////////////////////////////////////////////////

////Presentation Routes

//Index


//New
app.get('/logs/new', (req, res) => {
  res.render('new.ejs')
})

//Show


//Edit


////Functional Routes

//Create
app.post('/logs/', (req, res) => {
  if (req.body.isShipBroken === 'on') {
    req.body.isShipBroken = true
  } else {
    req.body.isShipBroken = false
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect('/logs')
  })
})

//Update


//Delete


///////////////////////////////////////////////////////////////////
//                   End Routes
///////////////////////////////////////////////////////////////////

//Listen
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
