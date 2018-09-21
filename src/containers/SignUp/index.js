import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Form from './Form';
import { registerUser } from './actions';
import InlineLoader from '../../components/InlineLoader';
import ROUTES from '../../utils/routes';

class SignUp extends React.Component {
  state = {};

  render() {
    const { register, history, actions } = this.props;
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth">
            {register.isFetching ? <InlineLoader /> : ''}
            <div className="card-content">
              <Link to={`${ROUTES.home}`} className="card-title center-align text-primary brand">
                Authors' Haven
              </Link>
              <Form
                onClick={(user) => {
                  actions(user, history);
                }}
                register={register}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ register: state.signup });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(registerUser, dispatch) });

SignUp.propTypes = {
  actions: PropTypes.func.isRequired,
  register: PropTypes.shape({
    error: PropTypes.object,
    failure: PropTypes.bool,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
