import {shallow} from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import App from "../components/App";
describe("Testing <App/> Component", () => {
    const wrapper = shallow(<App/>);
    it("testing is App rendered", () => {
        chai.expect(wrapper.exists()).to.be.true
    });
   chai.use(chaiEnzyme());
});