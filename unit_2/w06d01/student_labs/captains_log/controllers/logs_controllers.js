const express = require('express')
const Log = require('../models/logs.js')
const logs = express.Router()

///////////////////////////////////////////////////////////////
//                   Routes
///////////////////////////////////////////////////////////////

////Presentation Routes

logs.get('/', (req, res) => {
  Log.find({}, (error, allLogs) => {
    if (error) {
      res.send('Ooops')
    }
    res.render('logs/index.ejs', {
    logs: allLogs
    })
  })
})
//New
logs.get('/new', (req, res) => {
  res.render('logs/new.ejs')
})

//Show
logs.get('/:id', (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
      res.render('logs/show.ejs', {
        log: foundLog
      })
    })
  })

//Edit
logs.get('/:id/edit', (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    res.render('logs/edit.ejs', {
      log: foundLog
    })
  })
})

////Functional Routes

//Create
logs.post('/', (req, res) => {
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
logs.put('/:id', (req, res) => {
  if (req.body.isShipBroken === 'on') {
    req.body.isShipBroken = true
  } else {
    req.body.isShipBroken = false
  }
  Log.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedModel) => {
      res.redirect('/logs')
    }
  )
})

//Delete
logs.delete('/:id', (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedlog) => {
    res.redirect('/logs')
  })
})

///////////////////////////////////////////////////////////////////
//                   End Routes
///////////////////////////////////////////////////////////////////

module.exports = logs