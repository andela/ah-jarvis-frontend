import React from 'react';
import PropTypes from 'prop-types';

import capitalize from '../../utils/capitalize';

const CommentHead = ({ user, date }) => (
  <div className="row comment-box__user">
    <img src={user.image} alt="" className="responsive-img circle" />
    <div className="name">
      <p>{capitalize(user.username)}</p>
      <p className="p-t--10 grey-text">
        {new Date(date).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
    </div>
  </div>
);

export default CommentHead;

CommentHead.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};
