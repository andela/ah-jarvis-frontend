import React from 'react';
import PropTypes from 'prop-types';

export const ResendEmail = ({ isFetching, onClick }) => (
  <div className="row">
    <div className="col m4 s12 offset-m4 auth">
      <div className="card card--auth p-b--40">
        <div className="card-content">
          <span className="card-title center-align text-primary brand m-b--30 m-t--15">Authors' Haven</span>
          <div className="center">
            <p className="centre-align">A password reset email has been sent to you.</p>
            <p className="m-t--15">If you have not received an email click resend</p>
          </div>
        </div>
        <button
          onClick={onClick}
          className="btn waves-effect waves-light btn--block"
          type="submit"
          name="action"
        >
          {isFetching ? 'Sending...' : 'Resend Link'}
        </button>
      </div>
    </div>
  </div>
);

ResendEmail.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

ResendEmail.defaultProps = {
  isFetching: false,
};

export default ResendEmail;
