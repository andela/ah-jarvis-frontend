import React from 'react';
import PropTypes from 'prop-types';

const ProfileInput = ({
  type,
  name,
  classValue,
  value,
  onChange,
  holder,
  validation,
  disabled,
}) => (
  <div>
    <input
      disabled={disabled}
      type={type}
      className={classValue}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={holder}
    />
    <span className="green-text small">{validation}</span>
  </div>
);

ProfileInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  classValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  holder: PropTypes.string,
  validation: PropTypes.object,
  disabled: PropTypes.object,
};

export default ProfileInput;
