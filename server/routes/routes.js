const express = require("express");
const {getFilms, createFilm, deleteFilm} = require("../controllers/films.js")
const router = express.Router();

router.get('/films', getFilms);
router.post('/films', createFilm);
router.delete('/films/:id', deleteFilm);
module.exports = router