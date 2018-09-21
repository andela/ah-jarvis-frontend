// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

import InputField from '../../components/InputField';
import Errors from '../../components/Errors';
import Buttons from '../../components/SigninButtons';
import signinAction from './actions';
import ROUTES from '../../utils/routes';

class Signin extends Component {
  static defaultProps = {
    signin: {},
  };

  state = {
    email: '',
    password: '',
    currentType: 'password',
  };

  handleChange = (e) => {
    localStorage.removeItem('flash');
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { signinUser, history } = this.props;
    signinUser({ user: this.state }, history);
  };

  toaster = () => {
    M.toast({ html: localStorage.getItem('flash'), className: 'success' });
  };

  toggleView = type => (type === 'password'
    ? this.setState({ ...this.state, currentType: 'text' })
    : this.setState({ ...this.state, currentType: 'password' }));

  renderInput = (name, failure, errors, value, type) => (
    <InputField
      name={`${name}`}
      label={`Enter your ${name}`}
      type={`${type}`}
      value={value}
      onChange={this.handleChange}
      failure={failure}
      errors={errors}
      toggleView={this.toggleView}
    />
  );

  render() {
    const { errors, failure, isFetching } = this.props.signin;
    const { currentType } = this.state;
    return (
      <div className="row">
        {localStorage.getItem('flash') ? this.toaster() : ''}
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth">
            <div className="card-content">
              <Link to={`${ROUTES.home}`} className="card-title center-align text-primary brand">
                Authors' Haven
              </Link>
              <Errors name="error" errors={errors} failure={failure} />
              <form id="loginForm" onSubmit={this.handleSubmit}>
                {this.renderInput('email', failure, errors, this.state.email, 'email')}
                {this.renderInput('password', failure, errors, this.state.password, currentType)}
                <Buttons isFetching={isFetching} onClick={this.handleSubmit} />
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
