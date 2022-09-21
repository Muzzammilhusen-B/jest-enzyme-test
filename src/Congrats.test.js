import {shallow} from "enzyme";
// import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";
import {findByTestAttr} from "./test/testUtils";
// Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("render without error", () => {
  const wrapper = setup();
  // eslint-disable-next-line testing-library/await-async-query
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("render no text when `success` prop is false", () => {
  const wrapper = setup({success: false});
  // eslint-disable-next-line testing-library/await-async-query
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("render non empty congrats message when success message is  true", () => {
  const wrapper = setup({success: true});
  // eslint-disable-next-line testing-library/await-async-query
  const message = findByTestAttr(wrapper, "component-message");
  expect(message.text().length).not.toBe(0);
});
