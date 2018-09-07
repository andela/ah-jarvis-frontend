import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Buttons = ({
  onClick, isFetching,
}) => (
  <div>
    <div className="row">
      <div className="input-field col s12">
        <button
          className="btn waves-effect waves-light btn--block"
          type="submit"
          name="action"
          onClick={onClick}
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
  </div>
);

export default Buttons;

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

Buttons.defaultProps = {
  isFetching: false,
};
