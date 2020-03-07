//Express
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Mongoose
const mongoose = require('mongoose');

//Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Express sessions
// const session = require('express-session');
// app.use(session({
//       secret: "feedmeseymour", //a random string do not copy this value or your stuff will get hacked
//       resave: false,
//       saveUninitialized: false
// }));

// const morgan = require('morgan')
// morgan('tiny')
//Require Other Files


const logsController = require('./controllers/logs')
// const usersController = require('./controllers/users');
// const sessionsController = require('./controllers/sessions');



app.use('/logs', logsController)
// app.use('/users', usersController)
// app.use('/sessions', sessionsController)

app.get('/', (req, res) => {
  res.redirect('/logs')
})
//=====================Connections=====================//

//Localhost Connection
app.listen(3000, function () {
  console.log('Listening...');
});

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/captain', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
