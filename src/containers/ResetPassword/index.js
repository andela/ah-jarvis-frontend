// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import validateInput from '../../utils/validateInput';
import Errors from '../../components/Errors';
import resetPasswordAction from './actions';

class ResetPassword extends Component {
  static defaultProps = {
    reset: {},
    location: {},
    match: {},
  };

  state = {
    new_password: '',
    confirm_password: '',
    validation: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      resetPass, location, match, history,
    } = this.props;

    resetPass(
      {
        reset_data: {
          new_password: this.state.new_password,
          token: match.params.token,
          email: new URLSearchParams(location.search).get('email'),
        },
      },
      history,
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      validation: { [e.target.name]: validateInput('password', e.target.value) },
    });
  };

  validateForm() {
    return (
      this.state.confirm_password.length > 7
      && this.state.new_password.length > 7
      && this.state.new_password === this.state.confirm_password
    );
  }

  renderButton = isFetching => (
    <div className="row">
      <div className="input-field col s12">
        <button
          className="btn waves-effect waves-light btn--block m-t--50"
          type="submit"
          name="action"
          disabled={!this.validateForm()}
        >
          {isFetching ? 'Changing...' : 'Change Password'}
        </button>
      </div>
    </div>
  );

  renderInput = (name, failure, errors, value, label, type) => (
    <InputField
      name={`${name}`}
      label={`${label}`}
      type={`${type}`}
      value={value}
      onChange={this.handleChange}
      failure={failure}
      errors={errors}
    />
  );

  render() {
    const { errors, failure, isFetching } = this.props.reset;
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth p-b--40">
            <div className="card-content">
              <Link to="/" className="card-title center-align text-primary  brand m-b--30 m-t--15">
                Authors' Haven
              </Link>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput(
                  'new_password',
                  failure,
                  errors,
                  this.state.new_password,
                  'New Password',
                  'password',
                )}
                {<span className="red-text helper-text">{this.state.validation.new_password}</span>}
                {this.renderInput(
                  'confirm_password',
                  failure,
                  errors,
                  this.state.confirm_password,
                  'Confirm new password',
                  'password',
                )}
                <Errors name="error" errors={errors} failure={failure} />
                {this.renderButton(isFetching)}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetPass: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.isRequired,
  }),
  reset: PropTypes.shape({
    success: PropTypes.isRequired,
    errors: PropTypes.isRequired,
    failure: PropTypes.isRequired,
    isFetching: PropTypes.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  reset: state.reset,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    resetPass: resetPasswordAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
