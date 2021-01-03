import {shallow} from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import Label from "../components/Label";
describe("Testing <Label/> Component", () => {
    const wrapper = shallow(<Label label="text" children={<div className="test"/>} />);
    it("testing label text", () => {
        chai.expect(wrapper.text()).to.equal('text:  ')
    });
    it("testing label text", () => {
        chai.expect(wrapper.find('.test').exists()).to.be.true
    });

   chai.use(chaiEnzyme());
});