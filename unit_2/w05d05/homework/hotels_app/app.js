//dependancies
const mongoose = require('mongoose')
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')
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

//Create////////////////////////////////////
//some starter data, starter data is often referred to as seed data
// Hotel.create(hotelSeed, ( err , data ) => {
//       if ( err ) console.log ( err.message )
//   console.log( "added provided hotel data" )
//   }
// );

//Check for the right number of hotels
// Hotel.count({} , (err , data)=> {
//    if ( err ) console.log( err.message );
//     console.log ( `There are ${data} hotels in this database` );
// });
