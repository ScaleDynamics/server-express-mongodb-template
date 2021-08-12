const express = require('express');
const app = express();
const port = process.env.WARP_PORT ? process.env.WARP_PORT : 3000;

const movies = require('./movies');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`This app listen on the port ${port}`);
});

app.use('/movies', movies);
