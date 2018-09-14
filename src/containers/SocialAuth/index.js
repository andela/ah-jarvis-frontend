import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import facebook from '../../assets/icons/facebook.svg';
import google from '../../assets/icons/google.svg';
import mail from '../../assets/icons/mail.svg';

import SocialButton from '../../components/SocialButton';
import api from '../../utils/api';
import config from '../../config';
import InlineLoader from '../../components/InlineLoader';
import ROUTES from '../../utils/routes';

class SocialAuth extends React.Component {
  state = {
    error: null,
    isLoading: false,
  };

  handleSocialLogin = (user) => {
    // eslint-disable-next-line no-underscore-dangle
    const provider = user._provider === 'google' ? 'google-oauth2' : 'facebook';
    this.setState({ isLoading: true });
    api({
      endpoint: '/convert_token/',
      data: {
        provider,
        // eslint-disable-next-line no-underscore-dangle
        access_token: user._token.accessToken,
      },
      method: 'POST',
    })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.props.history.push('/');
      })
      .catch(({ error }) => {
        this.setState({ error, isLoading: false });
      });
  };

  handleSocialLoginFailure = () => {
    this.setState({
      error: 'Something went wrong',
    });
  };

  renderLoginButton = (provider, appId, content) => (
    <SocialButton
      className="waves-effect waves-light btn-flat btn--default m-b--15  btn--block"
      provider={provider}
      appId={appId}
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure}
    >
      <img
        src={provider === 'facebook' ? facebook : google}
        alt={`Sign up with  ${provider} `}
        className="icon"
      />
      {content}
    </SocialButton>
  );

  toaster = () => {
    M.toast({ html: this.state.error, classes: 'danger' });
  };

  renderCard = () => {
    const { error, isLoading } = this.state;
    return (
      <div className="card card--auth p-b--40">
        {isLoading && <InlineLoader />}
        {error && this.toaster()}
        <div className="card-content">
          <Link
            to={`${ROUTES.home}`}
            className="card-title center-align text-primary brand m-b--30 m-t--15"
          >
            Authors' Haven
          </Link>
          <Link
            to={ROUTES.signinWithEmail}
            className="waves-effect waves-light btn-flat btn--default m-b--15  btn--block"
          >
            <img src={mail} alt="Sign up with email" className="icon" />
            Sign in with email
          </Link>
          {this.renderLoginButton('facebook', config.FACEBOOK_APP_ID, ' Sign in with facebook')}
          {this.renderLoginButton('google', config.GOOGLE_APP_ID, ' Sign in with Google')}
          <div className="m-t--20">
            <span>
              Want to go classical?
              <Link to="/signup"> Sign up here</Link>
            </span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">{this.renderCard()}</div>
      </div>
    );
  }
}

SocialAuth.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default SocialAuth;
