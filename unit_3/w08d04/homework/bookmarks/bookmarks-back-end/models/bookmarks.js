const mongoose = require('mongoose')

const bookmarkSchema = mongoose.Schema({
  title: String,
  url: String
})

module.exports = mongoose.model('Bookmarks', bookmarkSchema)

//
// curl -X POST -H "Content-Type: application/json" -d '{"title":"Stack Overflow", "url":"https://stackoverflow.com/"}' http://localhost:3003/bookmarks
