const films = require("../models/films")
const getFilms = async (req, res) => {
    try{
        const filmsRes = await films.find();
        res.status(200).json(filmsRes)
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
module.exports = {getFilms}