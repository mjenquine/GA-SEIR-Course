//dependancies
const mongoose = require('mongoose')
const Tweet = require('./tweet.js')
//config
const mongoURI = 'mongodb://localhost:27017/' + 'tweets'
// making a shorter alias for less typing
const db = mongoose.connection
//Connect to mongo
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => {
  console.log('the connection with mongod is established');
})
//optional but likely helpful
// Connection Error/Success
// Define callback functions for various events
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))
//for demo purposes
// setTimeout(() => {
//   db.close()
// }, 5000)

//Create////////////////////////////////////////////////////////////
const myFirstTweet = {
  title: 'Deep Thoughts',
  body: 'Friends, I have been navel-gazing',
  author: 'Karolin'
}
// Tweet.create(myFirstTweet, (error, tweet) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweet);
//   }
//   db.close()
// })
const manyTweets = [
  {
    title: 'Deep Thoughts',
    body: 'Friends, I have been navel-gazing',
    author: 'Karolin'
  },
  {
    title: 'Sage Advice',
    body: 'Friends, I am vegan and so should you',
    author: 'Karolin',
    likes: 20
  },
  {
    title: 'Whole Reality',
    body:
      'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
    author: 'Karolin',
    likes: 40
  },
  {
    title: 'Organic',
    body:
      'Friends, I have spent $2300 to be one of the first people to own an organic smartphone',
    author: 'Karolin',
    likes: 162
  },
  {
    title: 'Confusion',
    body:
      'Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?',
    author: 'Karolin',
    likes: -100
  },
  {
    title: 'Vespa',
    body:
      'Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
    author: 'Karolin',
    likes: 2
  },
  {
    title: 'Licensed',
    body:
      'Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson',
    author: 'Karolin',
    likes: 3
  },
  {
    title: 'Water',
    body:
      'Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
    author: 'Karolin'
  }
]
// Tweet.insertMany(manyTweets, (error, tweets) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweets);
//   }
//   db.close()
// })


//READ/////////////////////////////////////////////////////////////
//Find All
// Tweet.find((err, tweets) => {
//   console.log(tweets);
//   db.close()
// })

// //Find all but limit fields returned
// Tweet.find({}, 'title body', (err, tweets) => {
//   console.log(tweets);
//   db.close()
// })
// //to exclude id
// Tweet.find({}, 'title body -_id', (err, tweets) => {
//   console.log(tweets);
//   db.close()
// })
//Find just one tweet
// Tweet.find({title: "Water"}, (err, tweet) => {
//   console.log(tweet);
//   db.close()
// })
//Find the tweets with greater than or eq to 20 likes
// Tweet.find({likes: {$gte: 20}}, (err, tweets) => {
//   console.log(tweets);
//   db.close()
// })

//Delete//////////////////////////////////////////////////////////
// Tweet.findOneAndRemove({title: 'Deep Thoughts'}, (err, tweet) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('This is the deleted tweet', tweet);
//   }
//   db.close()
// })

//Update///////////////////////////////////////////////////////////
// Tweet.findOneAndUpdate(
//   { title: 'Vespa'},//filter
//   { sponsored: true},//what to update
//   { new: true}, //be default it returns the original one. This is needed to return the updated object
//   (err, tweet) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(tweet);
//   }
//   db.close()
// })
// fun example
// Tweet.countDocuments({likes: {$gte: 20}}, (err, count) => {
//   console.log('the number of tweets with more than 19 likes is', count);
//   db.close()
// })
//another fun example
// Query Builder
// Tweet.find({likes: {$gte: 20}}, 'title -_id')
//   .limit(2)
//   .sort('title')
//   .exec((err, tweets) => {
//     console.log(tweets);
//     db.close()
//   })
