import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type, name, value, onChange, errors, failure,
}) => (
  <div className="row">
    <div className="input-field col s12">
      <input
        type={type}
        id={name}
        className={`validate ${failure ? 'text-red' : ''}`}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{`Enter ${name}`}</label>
      {failure && <span className="red-text">{errors[name]}</span>}
    </div>
  </div>
);

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  failure: PropTypes.bool,
};

InputField.defaultProps = {
  errors: null,
  failure: false,
};
