var app = require('express')();
var server = require('http').Server(app);
var socket = require('socket.io');
var io = socket(server)
var crypto = require('crypto')

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  io.emit('news', { hello: code() });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

function code() {
  return crypto.randomBytes(3).toString('hex')
}
