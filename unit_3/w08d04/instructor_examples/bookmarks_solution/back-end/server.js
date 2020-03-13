const express = require('express')
const app = express()
const PORT = 3003
const bookmarksController = require('./controllers/bookmarks.js')
const mongoose = require('mongoose')
const cors = require('cors')

/* middleware */
app.use(express.json())
// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))

mongoose.connection.on('error', error => { console.log(error.message + 'Remember to run mongo or something')})
mongoose.connection.on('disconnected', ()=> console.log('we are disconnected'))

mongoose.connect('mongodb://localhost:27017/bookmarks', {useUnifiedTopology: true, useNewUrlParser: true})

mongoose.connection.once('open', () => {
  console.log('connected to mongoose')
})

/* Put our routes below */
app.use('/bookmarks', bookmarksController)

app.listen(PORT, ()=> {
    console.log('Arthur is awesome as usual keep coding')
})
