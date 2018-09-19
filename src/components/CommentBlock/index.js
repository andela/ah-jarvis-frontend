import React from 'react';
import PropTypes from 'prop-types';

import CommentHead from '../CommentHead';


const CommentBlock = ({ user, body, createdAt }) => (
  <div className="comment-box response">
    <CommentHead user={user} date={createdAt} />
    <div className="row">
      <div className="comment-body comment-body--small">
        {body}
      </div>
    </div>
  </div>
);

export default CommentBlock;

CommentBlock.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
