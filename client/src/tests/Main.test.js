import {shallow} from "enzyme";
import chai, {expect} from "chai";
import configureStore from 'redux-mock-store'
import chaiEnzyme from "chai-enzyme";
import Main from "../containers/Main";
import { mountWithRedux } from "../utils/tests/mountWithRedux";
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
describe("Testing <Mount/> Component", () => {
    const store = mockStore({
        films:{
            loading: false,
            films: [],
            error: undefined
        }
    })
    const wrapper = mountWithRedux(Main, store);
   it("testing search fields length", () => {
       chai.expect(wrapper.find('.searchField')).to.have.length(2)
   });
   it('testing <ActionsBar/> is exist', ()=> {
       chai.expect(wrapper.find('.actions').exists()).to.be.true
   })
   it('testing <Films/> is exist', ()=> {
       chai.expect(wrapper.find('.films').exists()).to.be.true
   })
   it('testing <DragFile/> is exist', ()=> {
       chai.expect(wrapper.find('.dragFile').exists()).to.be.true
   })
   chai.use(chaiEnzyme());
});