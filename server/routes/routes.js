const express = require("express");
const {getFilms, createFilm, deleteFilm, sortFilms} = require("../controllers/films.js")
const router = express.Router();

router.get('/films', getFilms);
router.post('/films', createFilm);
router.delete('/films/:id', deleteFilm);
router.post('/films/sort/:type', sortFilms);
module.exports = router