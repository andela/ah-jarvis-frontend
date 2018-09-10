import React from 'react';
import PropTypes from 'prop-types';

const InputField = props => (
  <div className="row">
    <div className="input-field col s12">
      <input
        type={props.type}
        id={props.id}
        className="validate"
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputField;
