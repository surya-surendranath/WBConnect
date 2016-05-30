var LanguageCloud = require('sdl-languagecloud-api');

//initialize the SDL Language Cloud Translation API
var lc = new LanguageCloud.LanguageCloudAPI({
  api_token: 'xKnl4QoJ5KAt43fFrveY6w%3D%3D'
});

lc.translations.translate({
  text: 'hello',
  from: 'eng',
  to: 'fra'
  }, function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
  }
);