import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Form from './Form';
import { registerUser } from './actions';
import InlineLoader from '../../components/InlineLoader';

class SignUp extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth">
            {this.props.register.isFetching ? <InlineLoader /> : ''}

            <div className="card-content">
              <span className="card-title center-align text-primary brand">Authors' Haven</span>
              <Form
                onClick={(user) => {
                  this.props.actions(user, this.props.history);
                }}
                register={this.props.register}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ register: state.registerUser });

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
