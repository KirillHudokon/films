import chai from "chai";
import * as ac from '../actions/'
import * as types from '../types'
describe('testing films actions',() =>{
    describe('testing actions to get all films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.GET_FILMS_LOADING
            }
            chai.expect(ac.getFilmsLoading()).to.deep.equal(action)
        })
        it('testing success', () => {
            const action = {
                type: types.GET_FILMS_SUCCESS,
                payload: {}
            }
            chai.expect(ac.getFilmsSuccess(action.payload)).to.deep.equal(action)
        })
        it('testing fail', () => {
            const action = {
                type: types.GET_FILMS_FAIL,
                payload: 'error'
            }
            chai.expect(ac.getFilmsFail(action.payload)).to.deep.equal(action)
        })
    })
    describe('testing actions to create film', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.ADD_FILM_LOADING
            }
            chai.expect(ac.addFilmLoading()).to.deep.equal(action)
        })
        it('testing success', () => {
            const action = {
                type: types.ADD_FILM_SUCCESS,
                payload: {}
            }
            chai.expect(ac.addFilmSuccess(action.payload)).to.deep.equal(action)
        })
        it('testing fail', () => {
            const action = {
                type: types.ADD_FILM_FAIL,
                payload: 'error'
            }
            chai.expect(ac.addFilmFail(action.payload)).to.deep.equal(action)
        })
    })
    describe('testing action to delete film', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.DELETE_FILM_LOADING
            }
            chai.expect(ac.deleteFilmLoading()).to.deep.equal(action)
        })
        it('testing success', () => {
            const action = {
                type: types.DELETE_FILM_SUCCESS,
                payload: {}
            }
            chai.expect(ac.deleteFilmSuccess(action.payload)).to.deep.equal(action)
        })
        it('testing fail', () => {
            const action = {
                type: types.DELETE_FILM_FAIL,
                payload: 'error'
            }
            chai.expect(ac.deleteFilmFail(action.payload)).to.deep.equal(action)
        })
    })
    describe('testing actions to search films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.SEARCH_FILMS_LOADING
            }
            chai.expect(ac.searchFilmsLoading()).to.deep.equal(action)
        })
        it('testing success', () => {
            const action = {
                type: types.SEARCH_FILMS_SUCCESS,
                payload: {}
            }
            chai.expect(ac.searchFilmsSuccess(action.payload)).to.deep.equal(action)
        })
        it('testing fail', () => {
            const action = {
                type: types.SEARCH_FILMS_FAIL,
                payload: {}
            }
            chai.expect(ac.searchFilmsFail(action.payload)).to.deep.equal(action)
        })
    })
    describe('testing actions to sort films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.SORT_FILMS_LOADING
            }
            chai.expect(ac.sortFilmsLoading()).to.deep.equal(action)
        })
        it('testing success', () => {
            const action = {
                type: types.SORT_FILMS_SUCCESS,
                payload:{}
            }
            chai.expect(ac.sortFilmsSuccess(action.payload)).to.deep.equal(action)
        })
        it('testing fail', () => {
            const action = {
                type: types.SORT_FILMS_FAIL,
                payload: 'error'
            }
            chai.expect(ac.sortFilmsFail(action.payload)).to.deep.equal(action)
        })
    })
    describe('testing actions to import films', () => {
        it('testing loading', ()=>{
            const action = {
                type: types.IMPORT_FILE_LOADING
            }
            chai.expect(ac.importFileLoading()).to.deep.equal(action)
        })
        it('testing success', () => {
            const action = {
                type: types.IMPORT_FILE_SUCCESS,
                payload:{}
            }
            chai.expect(ac.importFileSuccess(action.payload)).to.deep.equal(action)
        })
        it('testing fail', () => {
            const action = {
                type: types.IMPORT_FILE_FAIL,
                payload: 'error'
            }
            chai.expect(ac.importFileFail(action.payload)).to.deep.equal(action)
        })
    })
    describe('testing action to reset error',()=>{
        it('reset error', ()=>{
            const action = {
                type:types.RESET_ERROR
            }
            chai.expect(ac.resetError()).to.deep.equal(action)
        })
    })
 
})