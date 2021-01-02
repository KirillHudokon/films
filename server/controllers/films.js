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
    const { id } = req.params
    try{
        await Films.findByIdAndRemove(id)
        res.json(await Films.find())
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
const sortAlphabetically = async (req,res) => {
    const sort = {title: 1}
    try{
        res.status(200).json(await Films.find().sort(sort))
    }catch(e){
        res.status(400).json({message: e.message})
    }
}
const sortFilms = async (req, res) => {
    const { type } = req.params
    if(type.toLowerCase() === 'a-z'){
        await sortAlphabetically(req, res)
    }
}
module.exports = {getFilms, createFilm, deleteFilm, sortFilms}