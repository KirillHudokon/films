const Films = require("../models/films")
const mongoose = require("mongoose")
const getFilms = async (req, res) => {
    try{
        const filmsRes = await Films.find();
        res.status(200).json(filmsRes)
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
const createFilm = async (req, res) => {
    try{
        const post = req.body
        const newFilm = new Films(post)
        await newFilm.save()
        const allFilms = await Films.find();
        res.status(201).json(allFilms)
    }catch(e){
        res.status(409).json({message: e.message})
    }
}
const deleteFilm = async (req, res) => {
    console.log(req)
    const { id } = req.params
    try{
        console.log(id)
        //if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send('No post with that id')
        await Films.findByIdAndRemove(id)
        res.json(await Films.find())
    }catch(e){
        console.log(e)
        res.status(400).json({message: e.message})
    }
}
module.exports = {getFilms, createFilm, deleteFilm}