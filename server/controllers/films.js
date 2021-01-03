const Films = require("../models/films")
const parseFile = require("../utils/parseFile")
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
const searchFilms = async (req, res) => {
    const { how } = req.params;
    try{
        if(how === 'stars'){
           let findedFilms = (await Films.find()).filter(film => {
                return film.stars.split(',').map(val=>val.trim()).filter(star=> star === req.body.text).length
            })
            res.status(200).json(findedFilms)
        }
        if(how === 'title'){
            res.status(200).json(await Films.find({title: req.body.text}))
        }
    }catch(e){
        console.log(e)
        res.status(400).json({message:e.message})
    }
}
const importFile = async (req, res) => {
    console.log(req.files.file)
    //const {file} = req.body
    //parseFile(file.path)
}
module.exports = {getFilms, createFilm, deleteFilm, sortFilms, searchFilms, importFile}