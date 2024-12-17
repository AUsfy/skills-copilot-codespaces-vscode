// create web server
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a router
const router = express.Router();

// create a router
const comments = [
  {id: 1, author: 'John', text: 'Hello World'},
  {id: 2, author: 'Doe', text: 'Hello World'},
  {id: 3, author: 'Jane', text: 'Hello World'},
];

// create a route
router.get('/', (req, res) => {
  res.json(comments);
});

// create a route
router.post('/', (req, res) => {
  const comment = {
    id: comments.length + 1,