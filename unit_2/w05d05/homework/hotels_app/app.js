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
// Hotel.insertMany(hotelSeed, ( err , data ) => {
//       if ( err ) console.log ( err.message )
//   console.log( "added provided hotel data" )
//   }
// );

//Check for the right number of hotels
// Hotel.count({} , (err , data)=> {
//    if ( err ) console.log( err.message );
//     console.log ( `There are ${data} hotels in this database` );
// });

//Creating my first hotel with this information
// const myFirstHotel = {
//   name: 'Mandarin Oriental',
//   location: 'San Francisco',
//   rating: 5,
//   tags: ['Luxury'],
//   rooms: [
//     {
//       roomNumber: 101,
//       size: 'King',
//       price: 500,
//       booked: false
//     }
//   ]
// }
//
// Hotel.create(myFirstHotel, (error, hotel) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(hotel);
//   }
//   db.close()
// })

//READ///////////////////////////////////////////////////////////////
// Hotel.find((err, hotels) => {
//   console.log(hotels);
//   db.close()
// })
// Hotel.find({}, 'name -_id', (err, hotels) => {
//   console.log(hotels);
//   db.close()
// })
// Hotel.find({name: 'Mandarin Oriental'}, (err, hotel) => {
//   console.log(hotel);
//   db.close()
// })
// Hotel.find({vacancies: true}, {rating: 0}, (err, hotel) => {
//   console.log(hotel);
//   db.close()
// })

//DELETE//////////////////////////////////////////////////////////////
// Hotel.findOneAndRemove({name: 'Hotelicopter'}, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('This is a deleted Hotel', hotel);
//   }
//   db.close()
// })
// Hotel.findOneAndRemove({name: 'Hilbert\'s Hotel'}, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('This is a deleted Hotel', hotel);
//   }
//   db.close()
// })
// Hotel.findOneAndRemove({location: 'Colorado Rockies'}, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('This is a deleted Hotel', hotel);
//   }
//   db.close()
// })
// Hotel.findOneAndUpdate({name: 'The Great Northern'}, {rating: 5}, {new: true}, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(hotel);
//   }
//   db.close()
// })
// Hotel.findOneAndUpdate({name: 'Motel Bambi'}, {vacancies: false}, {new: true}, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(hotel);
//   }
//   db.close()
// })
// Hotel.findOneAndUpdate({location: 'White Bay, Oregon'}, {rating: 2}, {new: true}, (err, hotel) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(hotel);
//   }
//   db.close()
// })
