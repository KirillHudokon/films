import enableHooks from 'jest-react-hooks-shallow';
import {shallow} from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import Film from "../components/Film";
enableHooks(jest, { dontMockByDefault: true });
describe("Testing <Film/> Component", () => {   
     const film = {
        _id:'1',
        title: 'Charade',
        releaseYear: 1953,
        format: 'DVD',
        stars: 'Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy'
    }

    describe('testing when state false',()=>{
        const wrapper = shallow(
            <Film
                film={film}
                deleteFilm={()=>jest.fn()}
            />
        );
        it('testing id in component is same as in props', ()=>{
            chai.expect(wrapper.find('.filmTitle').text()).to.equal(`title: ${film.title}`)
        })
        it('testing closed button', ()=> {
            chai.expect(wrapper.find('.filmInfoVisibilityController').text()).to.equal('Open')
        })
        it('testing is info closed ', ()=> {
            chai.expect(wrapper.find('.filmInfoContainer').exists()).to.be.false;
        })
    })
    describe('testing when state true',()=>{
        const wrapper = shallow(
            <Film
                film={film}
                deleteFilm={()=>jest.fn()}
            />
        );
        wrapper.find('.filmInfoVisibilityController').children().simulate('click')
        it('testing id in component is same as in props', ()=>{
            chai.expect(wrapper.find('.filmTitle').text()).to.equal(`title: ${film.title}`)
        })
        it('testing opened button', ()=> {
            chai.expect(wrapper.find('.filmInfoVisibilityController').text()).to.equal('Close')
        })
        it('testing is info opened ', ()=> {
            chai.expect(wrapper.find('.filmInfoContainer').exists()).to.be.true;
        })
        it('testing length of info ', ()=> {
            chai.expect(wrapper.find('.filmInfo')).to.have.length(Object.keys(film).length-1);
        })
    })    
    
   chai.use(chaiEnzyme());
});