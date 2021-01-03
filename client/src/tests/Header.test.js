import {shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Header from "../components/Header";
describe("Testin <Header/> Component", () => {
   it("testing logo text", () => {
      const wrapper = shallow(<Header />);
      chai.expect(wrapper.find('.logo').text()).to.equal('Films info')
     // const message = <p>Edit <code>src/App.js</code> and save to   reload.</p>;
     // expect(wrapper).to.contain(message);
   });
   chai.use(chaiEnzyme());
});