var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var pg = require('knex')({client: 'pg'});

var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)
var model = require('../lib/model') (knex)
var app = require('express')();
var getTweets = require('../twitter-api/twitter')
var bcrypt = require('bcrypt')
var cool = require('cool-ascii-faces');
/*some  postgres stuff*/
var pg = require('pg');

router.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { res.render('pages/db', {results: result.rows} ); }
    });
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Wellington Indian Community' });
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

router.post('/logout', function(req, res, next) {
  res.render('login', { title: 'Wellington Indian Community' });
});

router.get('/new-user', function(req, res, next) {
  res.redirect('newuser', { title: 'Wellington Indian Community' });
});

router.post('/addEvent', function(req, res){
  res.render('addEvent',{firstname:'Nelly'});
});

router.post('/login', function(req, res, next) {
  console.log(req.body.email)

   db.addNew('userInfo',req.body, function(err,data){
    res.render('newuser',{});
   })
 
});

 router.post('/googlemap', function(req, res, next) {
   db.getAll('Restaurents', function(err, data) {
   
    res.render('googlemap',{Restaurents:data,user:req.body.first_name})
   })

});

router.post('/people', function(req, res, next) {
  db.getAll('userInfo', function(err, data) {
   
    res.render('people',{name:data,user:req.body.first_name})
  })

});

router.post('/tweets', function(req, res, next) {
  getTweets('BollywoodNews', function(err, tweetArray){

   console.log(req.body,"tweets")
    res.render('bollynews',{user:req.body.first_name,tweet0:tweetArray[0],tweet1:tweetArray[1],tweet2:tweetArray[2],tweet3:tweetArray[3],tweet4:tweetArray[4],tweet5:tweetArray[5],tweet6:tweetArray[6],tweet7:tweetArray[7],tweet8:tweetArray[8],tweet9:tweetArray[9],tweet10:tweetArray[10],tweet11:tweetArray[11],tweet2:tweetArray[12],tweet2:tweetArray[12],tweet13:tweetArray[13],tweet14:tweetArray[14],tweet15:tweetArray[15],tweet16:tweetArray[16]})
     console.log(tweetArray,"tweets")
  })

});

router.post('/newuser', function(req, res, next) {
  console.log(req.body,"hi")

   model.login(req.body.first_name, req.body.password)
    .then(function(passwordCheck){

      db.getAllSort('users', function(err, data) {
        console.log(req.body.first_name,"hi")
        console.log(req.body.image);
        res.render('main',{user:req.body.first_name,name:data,image:data.image});   
      })
    })

    .catch(function(err) {
      res.render('newuser',{message:err.message})
    })
})

router.post('/new-user', function(req, res, next) {
  console.log(req.body,"hi")

    db.getAllSort('users', function(err, data) {
      console.log(req.body.first_name,"hi")
       res.render('main',{user:req.body.first_name,name:data,image:data.image});
  })

});

 router.post('/main', function(req, res, next) {
  db.getAllSort('userInfo', function(err, data) {

    db.findOne('userInfo', {first_name:req.body.first_name}, function(err, info){

      db.addNew('users',{first_name:req.body.first_name,feeds:req.body.feeds,image:info.image,last_name:info.last_name,current_location:info.current_location}, function(err,data){
      
      console.log(req.body,"jdfhdj")
       console.log(req.body.first_name,"sdjfhdskj")
        console.log(info,"sdjfhdskj")
         console.log(info.image,"sdjfhdskj")

           db.getAllSort('users', function(err, data) {
            res.render('main',{name:data,user:req.body.first_name,infos:info.image,image:info.image})
     
          }) 
      });
    })
  })
})
 

router.post('/events', function(req, res, next) {
  db.getAll('events', function(err, data) {

    res.render('eventview',{Events:data,user:req.body.first_name})

  })
})

module.exports = router;

 