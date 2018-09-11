import React from 'react';
import PropTypes from 'prop-types';

const SignUpButton = ({ onClick, disabled }) => (
  <button
    className="btn waves-effect waves-light btn--block"
    id="signup_button"
    type="submit"
    name="action"
    onClick={onClick}
    disabled={disabled}
  >
    Sign up
  </button>
);

export default SignUpButton;

SignUpButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
