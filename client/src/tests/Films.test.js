import {shallow} from "enzyme";
import chai from "chai";
import configureStore from 'redux-mock-store'
import chaiEnzyme from "chai-enzyme";
import Films from "../containers/Films";
import { mountWithRedux } from "../utils/tests/mountWithRedux";
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
describe("Testing <Films/> Component", () => {
    it("testing films length", () => {
        const store = mockStore({
            films:{
                loading: false,
                films: [
                    {
                        _id: '1231231',
                        title: 'Charade',
                        releaseYear: 1953,
                        format: 'DVD',
                        stars: 'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy'
                    },
                    {
                        _id:'231231',
                        title: 'Charade',
                        releaseYear: 1953,
                        format: 'DVD',
                        stars: 'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy'
                    },
                    {
                        _id:'1',
                        title: 'Charade',
                        releaseYear: 1953,
                        format: 'DVD',
                        stars: 'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy'
                    }
                ],
                error: undefined
            }
        })
        const wrapper = mountWithRedux(Films, store);
       chai.expect(wrapper.find('.film')).to.have.length(3)
    });
    it("testing films loading", () => {
        const store = mockStore({
            films:{
                loading: true,
                films: [],
                error: undefined
            }
        })
        const wrapper = mountWithRedux(Films, store);
        chai.expect(wrapper.find('.filmsInfo').text()).to.equal('Loading...')
    })
    it("testing films without length", () => {
        const store = mockStore({
            films:{
                loading: false,
                films: [],
                error: undefined
            }
        })
        const wrapper = mountWithRedux(Films, store);
        chai.expect(wrapper.find('.filmsInfo').text()).to.equal('No available films')
    })

   chai.use(chaiEnzyme());
});