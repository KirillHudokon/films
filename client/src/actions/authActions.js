import * as types from '../types'
import Api from '../api/'
const api = new Api()
const films = [
    {
        "id": 1,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 2,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 3,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 4,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 5,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 6,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
]
export const getFilmsLoading = () => ({
    type: types.GET_FILMS_LOADING,
})
export const getFilmsSuccess=(films)=>({
    type: types.GET_FILMS_SUCCESS,
    payload: films,
})
export const getFilmsFail=(error)=>({
    type: types.GET_FILMS_FAIL,
    payload: error,
})

export const searchFilmsLoading = () => ({
    type: types.SEARCH_FILM_LOADING,
})
export const searchFilmsSuccess=(films)=>({
    type: types.SEARCH_FILM_SUCCESS,
    payload: films,
})
export const searchFilmsFail=(error)=>({
    type: types.SEARCH_FILM_FAIL,
    payload: error,
})

export const deleteFilmLoading = () => ({
    type: types.DELETE_FILM_LOADING,
})
export const deleteFilmSuccess=(data)=>({
    type: types.DELETE_FILM_SUCCESS,
    payload: data
})
export const deleteFilmFail=(error)=>({
    type: types.DELETE_FILM_FAIL,
    payload: error,
})

export const addFilmLoading = () => ({
    type: types.ADD_FILM_LOADING,
})
export const addFilmSuccess=(data)=>({
    type: types.ADD_FILM_SUCCESS,
    payload: data
})
export const addFilmFail=(error)=>({
    type: types.ADD_FILM_FAIL,
    payload: error,
})

export const filterFilmsLoading = () => ({
    type: types.FILTER_FILMS_LOADING,
})
export const filterFilmsSuccess=(films)=>({
    type: types.FILTER_FILMS_SUCCESS,
    payload: films
})
export const filterFilmsFail=(error)=>({
    type: types.FILTER_FILMS_FAIL,
    payload: error,
})

export const getFilms = () => async dispatch => {
    try{
        dispatch(getFilmsLoading())
        const {data} = await api.get()
        dispatch(getFilmsSuccess(data))
    }catch(e){
        console.log(e)
        dispatch(getFilmsFail(e.message))
    }
}
export const searchBy = (by) => dispatch => {
    dispatch(searchFilmsLoading())
    return new Promise((rs,rj)=>{
        setTimeout(()=>{
            rs(dispatch(searchFilmsSuccess(films)))
        },3000)
    })
}

export const deleteFilm = (film) => async dispatch =>{
    try{
        dispatch(deleteFilmLoading())
        const {data} = await api.delete(film._id)
        dispatch(deleteFilmSuccess(data))
    }catch(e){
        dispatch(deleteFilmFail(e.message))
    }
}
export const addFilm = (film) => async dispatch => {
    try{
        dispatch(addFilmLoading())
        const {data} = await api.post(film)
        dispatch(addFilmSuccess(data))
    }catch(e){
        dispatch(addFilmFail(e.message))
    }
}