import React from 'react';
import PropTypes from 'prop-types';

import capitalize from '../../utils/capitalize';
import config from '../../config';

const CommentInput = ({
  type, name, label, onChange, handleSubmitComment, value, errors, failure, user,
}) => (
  <div className="comment-box">
    <div className="row comment-box__user">
      <img src={user.image ? user.image : config.DEFAULT_USER_AVATAR} alt="" className="responsive-img circle" />
      <p>{capitalize(user.username)}</p>
    </div>
    <form className="col s12" onSubmit={handleSubmitComment}>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            type={type}
            name={name}
            className="materialize-textarea"
            onChange={onChange}
            value={value}
          />
          <label htmlFor={name}>{label}</label>
          {failure && <span className="green-text helper-text">{errors.errors[name]}</span>}
        </div>
        <div className="row">
          <button className="btn" type="submit">Publish</button>
        </div>
      </div>
    </form>
    <div className="row">
      
    </div>
  </div>
);

export default CommentInput;

CommentInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  failure: PropTypes.bool,
};

CommentInput.defaultProps = {
  errors: null,
  failure: false,
};
