const express = require("express");
const {getFilms} = require("../controllers/films.js")
const router = express.Router();

router.get('/films', getFilms);

module.exports = router