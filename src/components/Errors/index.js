import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({
  errors, name, failure,
}) => (
  <div className="row">
    <div className="col s12">
      {failure && <span className="red-text">{errors.errors[name]}</span>}
    </div>
  </div>
);

export default Errors;

Errors.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    error: PropTypes.string,
  }),
  failure: PropTypes.bool,
};

Errors.defaultProps = {
  errors: null,
  failure: false,
};
