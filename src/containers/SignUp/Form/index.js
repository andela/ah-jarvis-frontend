import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/InputField';
import validateInput from '../../../utils/validateInput';

class Form extends React.Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
    },
    validation: {},
  };

  handleChange = (event) => {
    this.setState({
      user: { ...this.state.user, [event.target.id]: event.target.value },
      validation: {
        [event.target.name]: validateInput(event.target.name, event.target.value),
      },
    });
  };

  renderInput = (name, failure, errors, value) => (
    <InputField
      name={`${name}`}
      label={`Enter your ${name}`}
      type={`${name}`}
      value={value}
      onChange={this.handleChange}
      failure={failure}
      errors={errors}
    />
  );

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick({ user: this.state.user });
  };

  render() {
    const { errors, failure } = this.props.register;
    return (
      <form>
        {this.renderInput('username', failure, errors, this.state.username)}
        {this.renderInput('email', failure, errors, this.state.email)}
        {this.renderInput('password', failure, errors, this.state.password)}

        <InputField
          id="email"
          label="Enter Email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <p className="p-b--5 red-text helper-text">{failure ? errors.errors.email : ''}</p>
        <span className="green-text helper-text">{this.state.validation.email}</span>

        <InputField
          id="password"
          label="Enter Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <p className="p-b--5 red-text helper-text">{failure ? errors.errors.password : ''}</p>
        <span className="green-text helper-texts">{this.state.validation.password}</span>

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
            <a href="https://reactjs.org/docs/thinking-in-react.html"> Sign in</a>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onClick: PropTypes.func.isRequired,
  register: PropTypes.shape({
    errors: { errors: {} },
    failure: PropTypes.bool,
  }).isRequired,
};

export default Form;
