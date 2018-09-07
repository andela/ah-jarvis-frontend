// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from '../../components/InputField';
import Errors from '../../components/Errors';
import signinAction from './actions';

class Signin extends Component {
  static defaultProps = {
    signin: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signinUser({ user: this.state }, this.props.history);
  };

  render() {
    const { errors, failure, isFetching } = this.props.signin;
    console.log();
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth">
            <div className="card-content">
              <span className="card-title center-align text-primary brand">Authors' Haven</span>
              <Errors
                name="error"
                errors={errors}
                failure={failure}
              />
              <form id="loginForm" onSubmit={this.handleSubmit}>
                <InputField
                  name="email"
                  label="Enter Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  failure={failure}
                  errors={errors}
                />
                <InputField
                  name="password"
                  label="Enter Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  failure={failure}
                  errors={errors}
                />
                <div className="row">
                  <div className="input-field col s12">
                    <button
                      className="btn waves-effect waves-light btn--block"
                      type="submit"
                      name="action"
                      onClick={this.handleClick}
                      disabled={isFetching}
                    >
                      {isFetching ? 'Signing in...' : 'Sign in'}
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    Already have an account?
                    <Link className="p-l--10" to="/signup">
                      Sign up
                    </Link>
                  </div>
                </div>

                <div className="row">
                  <Link className="input-field col s12 m6 link--icon" to="/reset/password">
                    <svg className="icon icon--default">
                      <use xlinkHref="/ui/static/assets/icons/sprite.svg#icon-arrow-left" />
                    </svg>
                      Forgot password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  signin: PropTypes.shape({
    errors: PropTypes.isRequired,
    failure: PropTypes.isRequired,
    isFetching: PropTypes.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  signin: state.signin,
});

const mapDispatchToProps = dispatch => bindActionCreators({ signinUser: signinAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
