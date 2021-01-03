import {shallow} from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import Action from "../components/Action";
describe("Testing <Action/> Component", () => {
    const wrapper = shallow(<Action label="text" value="test"  action={()=>jest.fn()} />);
    it("testing button text", () => {      
        chai.expect(wrapper.children().children().text()).to.equal('test')
    });

   chai.use(chaiEnzyme());
});