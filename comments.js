// create a web server that listens on port 3000
// when it receives a request to /comments, it should return
// an array of comments
// when it receives a request to /comments/1, it should return
// the comment with id 1
// when it receives a request to /comments/2, it should return
// the comment with id 2
// when it receives a request to /comments/3, it should return
// the comment with id 3
// when it receives a request to /comments/4, it should return
// the comment with id 4

var http = require('http');
var server = http.createServer(function(req, res) {
  if (req.url === '/comments') {
    res.write(JSON.stringify([
      { id: 1, author: 'user1', body: 'comment 1' },
      { id: 2, author: 'user2', body: 'comment 2' },
      { id: 3, author: 'user3', body: 'comment 3' },
      { id: 4, author: 'user4', body: 'comment 4' }
    ]));
    res.end();
  } else if (req.url === '/comments/1') {
    res.write(JSON.stringify({ id: 1, author: 'user1', body: 'comment 1' }));
    res.end();
  } else if (req.url === '/comments/2') {
    res.write(JSON.stringify({ id: 2, author: 'user2', body: 'comment 2' }));
    res.end();
  } else if (req.url === '/comments/3') {
    res.write(JSON.stringify({ id: 3, author: 'user3', body: 'comment 3' }));
    res.end();
  } else if (req.url === '/comments/4') {
    res.write(JSON.stringify({ id: 4, author: 'user4', body: 'comment 4' }));
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000);

// Exercise 2