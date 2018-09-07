// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../components/InputField';
import forgotPasswordAction from './actions';


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendLink({ email: this.state });
  };

  render() {
    const {
      errors, success, failure, isFetching } = this.props.ForgotPasswordAction;
    let output;

    if (success) {
      output = (
        <div className="row">
          <div className="col m4 s12 offset-m4 auth">
            <div className="card card--auth p-b--40">
              <div className="card-content">
                <span className="card-title center-align text-primary brand m-b--30 m-t--15">Authors' Haven</span>
                <div className="center">
                  <p className="centre-align">A password reset email has been sent to you.</p>
                  <p className="m-t--15">If you have not received an email click resend</p>
                </div>
              </div>
              <button
                onClick={this.handleSubmit}
                className="btn waves-effect waves-light btn--block"
                type="submit"
                name="action"
              >
                {isFetching ? 'Sending...' : 'Resend Link'}
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      output = (
        <div className="row">
          <div className="col m4 s12 offset-m4 auth">
            <div className="card card--auth p-b--40">
              <div className="card-content">
                <span className="card-title center-align text-primary brand">Authors' Haven</span>
                <br />
                <h6 className="center">Reset password</h6>
                <br />
                <div className="row">
                  <div className="col s12">
                    {failure && <span className="red-text">{errors.errors.error}</span>}
                  </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <InputField
                    name="email"
                    type="email"
                    label="Enter your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {failure && <span className="red-text">{errors.errors.email}</span>}
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

const mapStateToProps = state => ({
  ForgotPasswordAction: state.forgotPasswordAction,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { sendLink: forgotPasswordAction },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
