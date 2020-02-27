const express = require('express')
const Log = require('../models/logs.js')
const logs = express.Router()

const isAuthenticated = (req, res, next) => {
  console.log(req.session.currentUser);
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

///////////////////////////////////////////////////////////////
//                   Routes
///////////////////////////////////////////////////////////////

////Presentation Routes
//Index
logs.get('/', (req, res) => {
  Log.find({}, (error, allLogs) => {
    if (error) {
      res.send('Ooops')
    }
    res.render('logs/index.ejs', {
    logs: allLogs, currentUser: req.session.currentUser
    })
  })
})
//New
logs.get('/new', isAuthenticated, (req, res) => {
  res.render('logs/new.ejs', { currentUser: req.session.currentUser})
})

//Show
logs.get('/:id', isAuthenticated, (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
      res.render('logs/show.ejs', {
        log: foundLog, currentUser: req.session.currentUser
      })
    })
  })

//Edit
logs.get('/:id/edit', isAuthenticated, (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    res.render('logs/edit.ejs', {
      log: foundLog, currentUser: req.session.currentUser
    })
  })
})

////Functional Routes

//Create
logs.post('/', isAuthenticated, (req, res) => {
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
logs.put('/:id', isAuthenticated, (req, res) => {
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
logs.delete('/:id', isAuthenticated, (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedlog) => {
    res.redirect('/logs')
  })
})

///////////////////////////////////////////////////////////////////
//                   End Routes
///////////////////////////////////////////////////////////////////

module.exports = logs
