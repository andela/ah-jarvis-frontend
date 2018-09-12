// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from '../../components/InputField';
import Errors from '../../components/Errors';
import validateInput from '../../utils/validateInput';
import { ResendEmail } from '../../components/ResendEmail';
import { forgotPasswordAction } from './actions';


class ForgotPassword extends Component {
  static defaultProps = {
    forgotPass: {},
  }

  state = {
    email: '',
    validation: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      validation: { [e.target.name]: validateInput(e.target.name, e.target.value) },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { sendLink } = this.props;
    sendLink({ email: this.state.email });
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
  )

  renderResetButton = isFetching => (
    <div className="row">
      <div className="input-field col s12">
        <button
          className="btn waves-effect waves-light btn--block"
          type="submit"
          name="action"
        >
          {isFetching ? 'Sending...' : 'Reset Password'}
        </button>
      </div>
    </div>
  )

  render() {
    const {
      errors, failure, isFetching, success,
    } = this.props.forgotPass;
    let output;

    if (success) {
      output = (
        <ResendEmail
          isFetching={isFetching}
          onClick={this.handleSubmit}
        />
      );
    } else {
      output = (
        <div className="row">
          <div className="col m4 s12 offset-m4 auth">
            <div className="card card--auth p-b--40">
              <div className="card-content">
                <span className="card-title center-align text-primary brand">Authors' Haven</span>
                <h6 className="center">Reset password</h6>
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput('email', failure, errors, this.state.email)}
                  {<span className="red-text helper-text">{this.state.validation.email}</span>}
                  <Errors
                    name="error"
                    errors={errors}
                    failure={failure}
                  />
                  {this.renderResetButton(isFetching)}
                </form>
                <div className="row">
                  <a href="./">
                    <div className="input-field col s12 m6">
                      Back to Sign in
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (output);
  }
}

ForgotPassword.propTypes = {
  sendLink: PropTypes.func.isRequired,
  forgotPass: PropTypes.shape({
    success: PropTypes.isRequired,
    errors: PropTypes.isRequired,
    failure: PropTypes.isRequired,
    isFetching: PropTypes.isRequired,
  }),
};

const mapStateToProps = state => ({
  forgotPass: state.forgotPass,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { sendLink: forgotPasswordAction },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
