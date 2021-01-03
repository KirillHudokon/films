import {filmsReducer} from '../reducers/filmsReducer'
import chai from "chai";
import * as types from '../types/'
const initialState = {
    films: [],
    loading: false, 
    error: undefined  
}
const loadingState = {
    films: [],
    loading: true, 
    error: undefined 
}
const successState = action =>({
    films: action.payload, 
    loading: false,
    error: undefined 
})
const failState = action =>({
    films: [],
    loading: false,
    error: action.payload
})

const fakeSuccessState = {
    films: [1,2,3], 
    loading: false,
    error: undefined 
}

describe('testing filmsReducer', ()=>{
    describe('testing reducer while loading all films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.GET_FILMS_LOADING
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(loadingState)
        })
        it('testing success', () => {
            const action = {
                type: types.GET_FILMS_SUCCESS,
                payload: [1,2,3]
            }
            chai.expect(filmsReducer(loadingState,action)).to.deep.equal(successState(action))
        })
        it('testing fail', () => {
            const action = {
                type: types.GET_FILMS_FAIL,
                payload: 'error'
            }
            chai.expect(filmsReducer(fakeSuccessState,action)).to.deep.equal(failState(action))
        })
    })
    describe('testing reducer while creating film', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.ADD_FILM_LOADING
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(loadingState)
        })
        it('testing success', () => {
            const action = {
                type: types.ADD_FILM_SUCCESS,
                payload: [1,2,3]
            }
            chai.expect(filmsReducer(loadingState,action)).to.deep.equal(successState(action))
        })
        it('testing fail', () => {
            const action = {
                type: types.ADD_FILM_FAIL,
                payload: 'error'
            }
            chai.expect(filmsReducer(fakeSuccessState,action)).to.deep.equal(failState(action))
        })
    })
    describe('testing reducer while deleting film', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.DELETE_FILM_LOADING
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(loadingState)
        })
        it('testing success', () => {
            const action = {
                type: types.DELETE_FILM_SUCCESS,
                payload: [1,2,3]
            }
            chai.expect(filmsReducer(loadingState,action)).to.deep.equal(successState(action))
        })
        it('testing fail', () => {
            const action = {
                type: types.DELETE_FILM_FAIL,
                payload: 'error'
            }
            chai.expect(filmsReducer(fakeSuccessState,action)).to.deep.equal(failState(action))
        })
    })
    describe('testing reducer while searching films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.SEARCH_FILMS_LOADING
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(loadingState)
        })
        it('testing success', () => {
            const action = {
                type: types.SEARCH_FILMS_SUCCESS,
                payload: [1,2,3]
            }
            chai.expect(filmsReducer(loadingState,action)).to.deep.equal(successState(action))
        })
        it('testing fail', () => {
            const action = {
                type: types.SEARCH_FILMS_FAIL,
                payload: 'error'
            }
            chai.expect(filmsReducer(fakeSuccessState,action)).to.deep.equal(failState(action))
        })
    })
    describe('testing reducer while sorting films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.SORT_FILMS_LOADING
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(loadingState)
        })
        it('testing success', () => {
            const action = {
                type: types.SORT_FILMS_SUCCESS,
                payload: [1,2,3]
            }
            chai.expect(filmsReducer(loadingState,action)).to.deep.equal(successState(action))
        })
        it('testing fail', () => {
            const action = {
                type: types.SORT_FILMS_FAIL,
                payload: 'error'
            }
            chai.expect(filmsReducer(fakeSuccessState,action)).to.deep.equal(failState(action))
        })
    })
    describe('testing reducer while importing films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.IMPORT_FILE_LOADING
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(loadingState)
        })
        it('testing success', () => {
            const action = {
                type: types.IMPORT_FILE_SUCCESS,
                payload: [1,2,4]
            }
            chai.expect(filmsReducer(loadingState,action)).to.deep.equal(successState(action))
        })
        it('testing fail', () => {
            const action = {
                type: types.IMPORT_FILE_FAIL,
                payload: 'error'
            }
            chai.expect(filmsReducer(fakeSuccessState,action)).to.deep.equal(failState(action))
        })
    })
    describe('testing reducer after reset error',()=>{
        it('reset error', ()=>{
            const action = {
                type:types.RESET_ERROR
            }
            chai.expect(filmsReducer(initialState,action)).to.deep.equal(initialState)
        })
    })
})