import React from "react";
import { InputField } from "./index";
import { shallow } from "enzyme";

describe("<InputField/>", () => {
  it("renders Input field successfully", () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find("div.input-field").length).toEqual(1);
  });
});
