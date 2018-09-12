import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Form from './Form';
import { registerUser } from './actions';
import InlineLoader from '../../components/InlineLoader';

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
              <span className="card-title center-align text-primary brand">Authors' Haven</span>
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
    errors: { errors: {} },
    failure: PropTypes.bool,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
