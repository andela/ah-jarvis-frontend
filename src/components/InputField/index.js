import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type, name, label, value, onChange, errors, failure, validation,
}) => (
  <div className="row">
    <div className="input-field col s12">
      <input
        type={type}
        name={name}
        className={`validate ${failure ? 'invalid' : ''}`}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
      {failure && <span className="red-text helper-text">{errors.errors[name]}</span>}
      <span className="green-text helper-text">{validation}</span>
    </div>
  </div>
);

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  failure: PropTypes.bool,
  validation: PropTypes.string,
};

InputField.defaultProps = {
  errors: null,
  failure: false,
  validation: '',
};
