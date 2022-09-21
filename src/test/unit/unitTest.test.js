import React from "react";

import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import UnitTest from "./unitTest";

Enzyme.configure({adapter: new EnzymeAdapter()});

// it("render without crash", () => {
//   const wrapper = shallow(<UnitTest />);
//   console.log(wrapper.debug());
// });

it("render non empty without crash with assertion", () => {
  const wrapper = shallow(<UnitTest />);
  expect(wrapper.exists()).toBe(true);
});
