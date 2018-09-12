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
    },
    validation: {},
    isDisabled: false,
  };

  handleChange = (event) => {
    const t = Object.values(this.state.validation).every(e => e === '')
      && Object.keys(this.state.validation).length === 3;

    const { user, validation } = this.state;
    user[event.target.name] = event.target.value;
    validation[event.target.name] = validateInput(event.target.name, event.target.value);

    this.setState(prevState => ({
      ...prevState,
      user,
      validation,
      isDisabled: !t,
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick({ user: this.state.user });
  };

  renderInput = (name, failure, errors, value, validation, type) => (
    <InputField
      name={`${name}`}
      label={`Enter your ${name}`}
      type={`${type}`}
      value={value}
      onChange={this.handleChange}
      failure={failure}
      errors={errors}
      validation={validation}
    />
  );

  render() {
    const { errors, failure } = this.props.register;
    const { username, email, password } = this.state.validation;
    return (
      <form>
        {this.renderInput('username', failure, errors, this.state.user.username, username, 'text')}
        {this.renderInput('email', failure, errors, this.state.user.email, email, 'email')}
        {this.renderInput(
          'password',
          failure,
          errors,
          this.state.user.password,
          password,
          'password',
        )}

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
    errors: PropTypes.shape({
      errors: PropTypes.shape({}),
    }),
    failure: PropTypes.bool,
  }).isRequired,
};

export default Form;
