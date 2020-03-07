const express = require('express');
const logs = express.Router();

const Log = require('../models/logs.js');

//Comment this back in for stretch goal//
// const isAuthenticated = (req, res, next) => {
//   if (req.session.currentUser) {
//     return next()
//   } else {
//     res.redirect('/sessions/new')
//   }
// }

//=====================Routes=====================//

//Index Route
logs.get('/',(req, res) => {
  Log.find({}, (err, allLogs) => {
    res.render('Index.jsx', {
      logs: allLogs
    });
  });
});

//New Route
logs.get('/new',(req, res) => {
  res.render('New.jsx');
});

//Create Route
logs.post('/',(req, res) => {
  if (req.body.shipIsBroken === 'on') {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (err, createdLog) => {
    res.redirect('/')
  });
});

//Delete Route
logs.delete('/:id',(req, res) => {
  Log.findOneAndDelete({_id:req.params.id}, (err, deltedLog) => {
    res.redirect('/logs')
  });
});

//Edit Route
logs.get('/:id/edit',(req, res) => {
  Log.findById(req.params.id, (err, updatedLog) => {
    res.render('Edit.jsx', {
      log: updatedLog
    });
  });
});

//Put Route
logs.put('/:id',(req, res) => {
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
logs.get('/:id',(req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render('Show.jsx', {
      log: foundLog
    });
  });
});

module.exports = logs
