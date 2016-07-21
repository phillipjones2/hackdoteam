// *************************************************************
// twitter
// *************************************************************
var Twitter = require('twitter');
var keys = require("./keys.js");

var totalTweets = [];

var consumerKey = keys.twitterKeys.consumer_key,
    consumerSecret = keys.twitterKeys.consumer_secret,
    accessTokenKey = keys.twitterKeys.access_token_key,
    accessTokenSecret = keys.twitterKeys.access_token_secret;

var client = new Twitter({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    access_token_key: accessTokenKey,
    access_token_secret: accessTokenSecret
});

// var twitterHandle = "Humblebrag";

var params = { screen_name: 'Humblebrag' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error && response.statusCode == 200) {
        for (var i = 0; i < tweets.length; i++) {
            totalTweets.push(tweets[i].text);
        }
        console.log("total tweets: " + totalTweets.length);
        var randomTweet = totalTweets[Math.floor(Math.random() * totalTweets.length)];
        console.log(randomTweet);
    } else {
        console.log(err);
    }
});
// *************************************************************

module.exports = totalTweets;
