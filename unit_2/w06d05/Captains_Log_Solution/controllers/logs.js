const express = require('express');
const logs = express.Router();

const Log = require('../models/logs.js');


const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

//=====================Routes=====================//

//Index Route
logs.get('/', isAuthenticated, (req, res) => {
  Log.find({}, (err, allLogs) => {
    res.render('index.ejs', {
      logs: allLogs
    });
  });
});

//New Route
logs.get('/new', isAuthenticated,(req, res) => {
  res.render('new.ejs');
});

//Create Route
logs.post('/', isAuthenticated,(req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (err, createdLog) => {
    res.redirect('/logs')
  });
});

//Delete Route
logs.delete('/:id', isAuthenticated,(req, res) => {
  Log.findOneAndDelete({_id:req.params.id}, (err, deltedLog) => {
    res.redirect('/logs')
  });
});

//Edit Route
logs.get('/:id/edit', isAuthenticated,(req, res) => {
  Log.findById(req.params.id, (err, updatedLog) => {
    res.render('edit.ejs', {
      log: updatedLog
    });
  });
});

//Put Route
logs.put('/:id', isAuthenticated,(req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(req.params.id, req.body ,(err, updatedLog) => {
    res.redirect('/logs')
  })
})

//Show Route
logs.get('/:id', isAuthenticated,(req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render('show.ejs', {
      log: foundLog
    });
  });
});

module.exports = logs
