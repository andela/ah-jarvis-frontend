import React from "react";
import { SignUpForm } from "./index";
import { shallow } from "enzyme";

describe("<SignUpForm/>", () => {
  it("renders sign up form successfully", () => {
    const wrapper = shallow(<SignUpForm onClick={() => ""} register={{}} />);
    expect(wrapper.find("button.btn--block").length).toEqual(1);
  });

  it("should validate username and store as state", () => {
    const wrapper = shallow(<SignUpForm register={{ failure: false }} />);
    const event = {
      target: { id: "username", value: "user" }
    };
    wrapper.find("#username").simulate("change", event);
    expect(wrapper.state("user").username).toEqual("user");
  });

  it("should validate email and store as state", () => {
    const wrapper = shallow(<SignUpForm register={{ failure: false }} />);
    const event = {
      target: { id: "email", value: "user@mail.com" }
    };
    wrapper.find("#email").simulate("change", event);
    expect(wrapper.state("user").email).toEqual("user@mail.com");
  });

  it("should validate password and store as state", () => {
    const wrapper = shallow(<SignUpForm register={{ failure: false }} />);
    const event = {
      target: { id: "password", value: "Pass123!" }
    };
    wrapper.find("#password").simulate("change", event);
    expect(wrapper.state("user").password).toEqual("Pass123!");
  });

  it("should return validation message if username is invalid", () => {
    const wrapper = shallow(<SignUpForm register={{ failure: false }} />);
    const event = {
      target: { id: "username", value: "us" }
    };
    wrapper.find("#username").simulate("change", event);
    expect(wrapper.state("validation").username).toEqual(
      "Username should have at least 3 letters"
    );
  });

  it("should return validation message if email is invalid", () => {
    const wrapper = shallow(<SignUpForm register={{ failure: false }} />);
    const event = {
      target: { id: "email", value: "user.com" }
    };
    wrapper.find("#email").simulate("change", event);
    expect(wrapper.state("validation").email).toEqual(
      "Email should have the format user@mail.com"
    );
  });

  it("should return validation message if password is invalid", () => {
    const wrapper = shallow(<SignUpForm register={{ failure: false }} />);
    const event = {
      target: { id: "password", value: "pass" }
    };
    wrapper.find("#password").simulate("change", event);
    expect(wrapper.state("validation").password).toEqual(
      "Password should contain capital letters, numbers and special character e.g. @,#,!"
    );
  });

  it("should run handleClick method", () => {
    const wrapper = shallow(
      <SignUpForm register={{ failure: false }} onClick={() => {}} />
    );
    wrapper.find("#signup_button").simulate("click", { preventDefault() {} });
  });
});
