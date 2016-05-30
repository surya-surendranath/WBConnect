var phoneRegex = require('phone-regex')
var emailRegex = require('email-regex')
var addressRegex = /\b(\d{2,5}\s+)(?![a|p]m\b)(NW|NE|SW|SE|north|south|west|east|n|e|s|w)?([\s|\,|.]+)?(([a-zA-Z|\s+]{1,30}){1,4})(court|ct|street|st|drive|dr|lane|ln|road|rd|blvd)/i // http://stackoverflow.com/questions/9397485/regex-street-address-match thx yo!

module.exports = function (tweet) {
  var m, text = tweet.text
  tweet.entities.urls.forEach(function (url) {
    text = text.replace(url.url, '')
  })
  while (m = (text.match(phoneRegex()) || text.match(emailRegex()) || text.match(addressRegex))) {
    text = text.replace(m[0], ' ')
  }
  // IF MORE THAN 2 HASHTAGS IN A ROW, REMOVE THEM ALL!

  return text.replace(/@/g, '').replace(/#/g, '').replace(/\s+/g, ' ').replace(/^\s|\s$/g, '')
}
