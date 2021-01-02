import * as types from '../types'
const initialState = {
    loading: false,
    films: [],
    error: undefined
}
export function filmsReducer(state=initialState, action) {
    switch (action.type) {
        case types.GET_FILMS_LOADING:
            return { ...state, films: [], loading: true, error: undefined}  
        case types.GET_FILMS_SUCCESS: 
            return { ...state, films: action.payload, loading: false}
        case types.GET_FILMS_FAIL: 
            return { ...state, films: [], loading: false, error: action.payload}
        case types.ADD_FILM_LOADING:
            return { ...state, error: undefined}
        case types.ADD_FILM_SUCCESS:
            return { ...state, films: action.payload, loading: false}
        case types.ADD_FILM_FAIL:
            return { ...state, loading: false, error: action.payload}      

        default:
            return state
    }
}