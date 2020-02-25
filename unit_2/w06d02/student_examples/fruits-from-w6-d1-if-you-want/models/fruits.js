// Inititializing vars
const mongoose = require('mongoose')
// Vars End

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
},
  {
    timestamps: true
  }
)

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit
