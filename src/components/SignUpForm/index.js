import React from "react";
import { InputField } from "../InputField";
import validateInput from "../../utils/validateInput";

export class SignUpForm extends React.Component {
  state = {
    user: {
      username: "",
      email: "",
      password: ""
    },
    validation: {}
  };

  handleChange = event => {
    this.setState({
      user: { ...this.state.user, [event.target.id]: event.target.value },
      validation: {
        [event.target.id]: validateInput(event.target.id, event.target.value)
      }
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.props.onClick({ user: this.state.user });
  };

  render() {
    return (
      <div>
        <p className="p-t--5 red-text">
          {this.props.register.failure
            ? this.props.register.errors.errors.username
            : ""}
        </p>
        <p className="p-t--10 red-text">
          {this.props.register.failure
            ? this.props.register.errors.errors.email
            : ""}
        </p>
        <p className="p-t--10 p-b--10 red-text">
          {this.props.register.failure
            ? this.props.register.errors.errors.password
            : ""}
        </p>

        <form>
          <InputField
            id="username"
            label="Enter Username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <span className="green-text">{this.state.validation.username}</span>
          <InputField
            id="email"
            label="Enter Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <span className="green-text small">
            {this.state.validation.email}
          </span>
          <InputField
            id="password"
            label="Enter Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <span className="green-text">{this.state.validation.password}</span>
          <div className="row">
            <div className="input-field col s12">
              <button
                className="btn waves-effect waves-light btn--block"
                id="signup_button"
                type="submit"
                name="action"
                onClick={this.handleClick}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              Already have an account?
              <a href="https://reactjs.org/docs/thinking-in-react.html">
                Sign in
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
