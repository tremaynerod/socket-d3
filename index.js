var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io').listen(server);

server.listen(1337);

app.use(express.static('public'));
console.log(__dirname);

app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	
	var x = 0;
	setInterval(function(){ 
		var randomY = 200 + getRandomNumber(0, 600);

		socket.emit('new data', { 
			x: (x++ % 20) * 50,
			y: Math.ceil(randomY) 
		});
	}, 500);
});

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}