const express = require("express");
const {getFilms, createFilm, deleteFilm, sortFilms, searchFilms} = require("../controllers/films.js")
const router = express.Router();

router.get('/films', getFilms);
router.post('/films', createFilm);
router.delete('/films/:id', deleteFilm);
router.get('/films/sort/:type', sortFilms);
router.post('/films/search/:how', searchFilms);
module.exports = router