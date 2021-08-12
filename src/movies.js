const express = require('express');
const { fetchMovies } = require('./mongodb');
const router = express.Router();

router.use((req, res, next) => {
  // console.log('movies endpoints reach');
  next();
});

router.get('/', (req, res) => {
  fetchMovies(req.query.search).then((movies) => {
    res.json(movies);
  });
});

module.exports = router;
