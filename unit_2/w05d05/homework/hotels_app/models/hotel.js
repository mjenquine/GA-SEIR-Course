const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema (
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: String,
    rating: {
      type: Number,
      max: 5,
    },
    vacancies: {
      type: Boolean,
      default: true
    },
    tags: [],
    rooms: [
      {
        roomNumber: Number,
        size: String,
        price: Number,
        booked: Boolean
      }
    ]
  },
  {timestamps: true}
)

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
