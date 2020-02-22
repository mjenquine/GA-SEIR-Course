//dependancies
const mongoose = require('mongoose')
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/hotel.js')
const db = mongoose.connection
mongoose.Promise = global.Promise
//config
const mongoURI = 'mongodb://localhost:27017/hotel'
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => {
  console.log('the connection with mongod is established');
})
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))
