clean-this-tweet-up
----------------

given a tweet, return the text of that tweet with all #s, usernames, phone-numbers, addresses, emails, and urls removed. you know, so that you aren't messing up someone's twitter neighbourhood by letting your bot spam up their stuff all the time.

#### NOTE: regexes are not a matter of fact!

You should not 100% depend on this module to sanitize everything. In fact, you should expect it to probably fail while trying to do so and return garbled input. The best strategy is to keep an eye on your robots and the inputs they are consuming and be prepared to swiftly delete their output if necessary

[![NPM](https://nodei.co/npm/clean-this-tweet-up.png)](https://nodei.co/npm/clean-this-tweet-up/)
[![Build Status](https://secure.travis-ci.org/coleww/clean-this-tweet-up.png)](http://travis-ci.org/coleww/clean-this-tweet-up)


```
npm install clean-this-tweet-up --save 

var cleanThisTweet = require('clean-this-tweet-up')

var tweet = // acquire a tweet object from the twitter blobs somehow. perhaps engage with a brand to win favor with the twitter glob. we all have different strategies here, just do what you do.

var text = cleanThisTweet(tweet)

// now you can doo something with that text, and know its probably not gonna blow up someones spot or RTing some dox! oh but be sure to use a module like wordfilter or iscool to check the text too because twitter is a filthy place. kbye!
```

This module is designed to be used with the [ttezel/twit](https://github.com/ttezel/twit) module, but will accept any tweet object that conforms to [this interface](https://github.com/coleww/clean-this-tweet-up/blob/master/test.js#L7-L16)
