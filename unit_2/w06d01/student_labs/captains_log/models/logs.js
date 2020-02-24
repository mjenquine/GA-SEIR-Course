//Variables
const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
  title: {type: String, required: true},
  entry: {type: String, required: true},
  isShipBroken: Boolean,
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log
