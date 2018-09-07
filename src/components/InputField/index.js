import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type, name, value, onChange, errors, failure, label,
}) => (
  <div className="row">
    <div className="input-field col s12">
      <input
        type={type}
        name={name}
        className={`validate ${failure ? 'text-red' : ''}`}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
      {failure && <span className="red-text">{errors[name]}</span>}
    </div>
  </div>
);

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  failure: PropTypes.bool,
};

InputField.defaultProps = {
  errors: null,
  failure: false,
};
