var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/socket', function(req, res){
  res.sendFile(__dirname + '/socket.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    console.log("hdhd")
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});