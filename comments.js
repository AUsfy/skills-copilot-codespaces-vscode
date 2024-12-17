// Create web server
const express = require('express');
const app = express();

// Create comments array
const comments = [
  {username: 'Todd', comment: 'lol so funny'},
  {username: 'Skyler', comment: 'I like turtles'},
  {username: 'Sk8erBoi', comment: 'Plz delete this post...'}
];

// GET request for comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// POST request for comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.send(newComment);
});

// Start web server on port 4001
app.listen(4001, () => {
  console.log('Web server is listening on port 4001!');
});