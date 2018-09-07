// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../components/InputField';
import resetPasswordAction from './actions';


class ResetPassword extends Component {
  state = {
    new_password: '',
    confirm_password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      resetPass, history, location, match,
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
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateForm() {
    return (
      this.state.confirm_password.length > 0
      && this.state.new_password.length > 0
      && this.state.new_password === this.state.confirm_password
    );
  }

  render() {
    const { errors, failure, isFetching } = this.props.resetPasswordAction;
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth p-b--40">
            <div className="card-content">
              <span className="card-title center-align text-primary  brand m-b--30 m-t--15">
                Authors' Haven
              </span>
              {failure && <span className="red-text">{errors.errors.new_password}</span>}
              <form onSubmit={this.handleSubmit}>
                <InputField
                  name="new_password"
                  type="password"
                  className="validate"
                  value={this.state.new_password}
                  label="Enter new password"
                  onChange={this.handleChange}
                />
                <InputField
                  name="confirm_password"
                  type="password"
                  value={this.state.confirm_password}
                  label="Confirm new password"
                  onChange={this.handleChange}
                />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resetPasswordAction: state.resetPasswordAction,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { resetPass: resetPasswordAction },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPassword);
