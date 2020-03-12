const mongoose = require('mongoose')

const holidaySchema = mongoose.Schema({
  name: {type: String, required: true },
  celebrated: {type: Boolean, default: true},
  description: { type: String, default: 'Best Holiday ever'},
  likes: {type: Number, default: 0},
  tags: [{type: String}]
})

module.exports = mongoose.model('Holiday', holidaySchema )
