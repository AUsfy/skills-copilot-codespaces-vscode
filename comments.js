// create a web server using express
const express = require('express');
const app = express();
// create a port to listen to
const port = 3000;

// import the comments data
const comments = require('./comments-data');

// use the express.static built-in middleware function to serve static files
app.use(express.static('public'));

// create a route to get the comments data
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});