// create web server
var express = require('express');
var app = express();
// create server
var server = require('http').createServer(app);
// create socket.io
var io = require('socket.io').listen(server);
// create mysql
var mysql = require('mysql');
// create connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'comments'
});
// connect to mysql
connection.connect();
// create table
connection.query('CREATE TABLE IF NOT EXISTS comments (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), name TEXT, comment TEXT)', function(err) {
	if (err) {
		console.log(err);
	}
});
// create route
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});
// create socket
io.sockets.on('connection', function(socket) {
	// create query
	connection.query('SELECT * FROM comments', function(err, rows) {
		if (err) {
			console.log(err);
		} else {
			socket.emit('load', rows);
		}
	});
	// create insert
	socket.on('insert', function(data) {
		connection.query('INSERT INTO comments SET ?', {name: data.name, comment: data.comment}, function(err, res) {
			if (err) {
				console.log(err);
			} else {
				connection.query('SELECT * FROM comments WHERE id = ?', res.insertId, function(err, rows) {
					if (err) {
						console.log(err);
					} else {
						io.sockets.emit('insert', rows[0]);
					}
				});
			}
		});
	});
	// create delete
	socket.on('delete', function(data) {
		connection.query('DELETE FROM comments WHERE id = ?', data.id, function(err) {
			if (err) {
				console.log(err);
			} else {
				io.sockets.emit('delete', data);
			}
		});
	});
});
// listen to port
server.listen(3000);
