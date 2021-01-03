import {shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Header from "../components/Header";
describe("Testing <Header/> Component", () => {
   it("testing logo text", () => {
      const wrapper = shallow(<Header />);
      chai.expect(wrapper.find('.logo').text()).to.equal('Films info')
   });
   chai.use(chaiEnzyme());
});