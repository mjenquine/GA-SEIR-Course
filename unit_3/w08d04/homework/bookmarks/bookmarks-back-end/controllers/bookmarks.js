const bookmarks = require('express').Router()
const Bookmarks = require('../models/bookmarks.js')

//Index
bookmarks.get('/', (req, res) => {
  Bookmarks.find({}, (err, foundBookmarks) => {
    if (err) {
      res.status(400).json({error: err.message})
    }
    res.status
  })
})

//Create
bookmarks.post('/', async(req, res) => {
  Bookmarks.create(req.body, (error, createdBookmark) => {
    if (error) {
      res.status(400).json({error: error.message})
    }
    res.status(200).send(createdBookmark)
  })
})

//Delete
bookmarks.delete('/:id', (req, res) => {
  Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedBookmark)
  })
})

//Update
bookmarks.put('/:id', (req, res) => {
  Bookmarks.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedBookmark)
  })
})







module.exports = bookmarks
