import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { SignUpForm } from "../../components/SignUpForm";
import { registerUser } from "./actions";

class SignUp extends React.Component {
  render() {
    console.log(this.props.register);
    return (
      <div className="row">
        <div className="col m4 s12 offset-m4 auth">
          <div className="card card--auth">
            <div className="card-content">
              <span className="card-title center-align text-primary brand">
                Authors' Haven
              </span>
              <SignUpForm
                onClick={user => {
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

const mapStateToProps = state => {
  return { register: state.registerUser };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(registerUser, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
