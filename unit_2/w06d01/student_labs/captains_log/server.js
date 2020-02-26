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
///////////////////////////////////////////////////////////////
//                   Routes
///////////////////////////////////////////////////////////////

////Presentation Routes

//Index
app.get('/logs', (req, res) => {
  Log.find({}, (error, allLogs) => {
    if (error) {
      res.send('Ooops')
    }
    res.render('index.ejs', {
    logs: allLogs
    })
  })
})
//New
app.get('/logs/new', (req, res) => {
  res.render('new.ejs')
})

//Show
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
      res.render('show.ejs', {
        log: foundLog
      })
    })
  })

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
app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
    res.redirect('/logs')
  })
})

///////////////////////////////////////////////////////////////////
//                   End Routes
///////////////////////////////////////////////////////////////////

//Listen
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
