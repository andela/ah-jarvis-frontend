import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InputField from '../../../components/InputField';
import SignUpButton from '../../../components/SignUpButton';
import validateInput from '../../../utils/validateInput';

class Form extends React.Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
      confirmPass: '',
    },
    validation: {},
    isDisabled: false,
  };

  handleChange = (event) => {
    const { user, validation } = this.state;
    const name = event.target.name;
    const value = event.target.value;
    user[name] = value;
    if (name !== 'confirmPass') {
      validation[name] = validateInput(name, value);
    } else {
      validation[name] = validateInput(name, {
        password: this.state.user.password,
        confirmPass: value,
      });
    }

    const checkValidation = Object.values(validation).every(e => e === '') && Object.keys(validation).length === 4;

    this.setState(prevState => ({
      ...prevState,
      user,
      validation,
      isDisabled: !checkValidation,
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state.user;
    this.props.onClick({ user: { username, email, password } });
  };

  renderInput = (name, failure, errors, value, validation, type) => (
    <InputField
      name={`${name}`}
      label={name === 'confirmPass' ? 'Confirm Password' : `Enter your ${name}`}
      type={`${type}`}
      value={value}
      onChange={this.handleChange}
      failure={failure}
      errors={errors}
      validation={validation}
    />
  );

  render() {
    const { error, failure } = this.props.register;
    const {
      username, email, password, confirmPass,
    } = this.state.validation;
    const { user } = this.state;
    return (
      <form>
        {this.renderInput('username', failure, error, user.username, username, 'text')}
        {this.renderInput('email', failure, error, user.email, email, 'email')}
        {this.renderInput('password', failure, error, user.password, password, 'password')}
        {this.renderInput('confirmPass', failure, error, user.confirmPass, confirmPass, 'password')}

        <div className="row">
          <div className="input-field col s12">
            <SignUpButton onClick={this.handleClick} disabled={this.state.isDisabled} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            Already have an account?
            <Link to="/signin"> Sign in</Link>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onClick: PropTypes.func.isRequired,
  register: PropTypes.shape({
    error: PropTypes.shape({
      errors: PropTypes.object,
    }),
    failure: PropTypes.bool,
  }).isRequired,
};

export default Form;
