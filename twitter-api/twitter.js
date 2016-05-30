require('dotenv').config()
var Twitter = require('twitter');
var cleanThisTweet = require('clean-this-tweet-up')

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

function getTweets (string, callback) {
  var params = {q: string};

  client.get('search/tweets.json', params, function (error, tweets, response) {

    var tweetArr = []

    if (error) {
      console.log('There was an error going to twitter', error)
      tweetArr = ['Hurray Error']
    } else {

      tweetArr = Object.keys(tweets.statuses)
      
      tweetArr = tweetArr.filter(function (key) {
        return tweets.statuses[key].metadata.iso_language_code === 'en'
      })

      tweetArr = tweetArr.map(function (key) {
        return cleanThisTweet(tweets.statuses[key])
      })

    }

    callback(error, tweetArr)
  })
}

// getTweets('dog', function (err, tweetArray) {
//   console.log(tweetArray)
// })


module.exports = getTweets
