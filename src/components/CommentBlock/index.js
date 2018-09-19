import React from 'react';
import PropTypes from 'prop-types';

import CommentHead from '../CommentHead';


const CommentBlock = ({ user, body, createdAt, }) => (
  <div className="comment-box response">
    <CommentHead user={user} date={createdAt} />
    <div className="row">
      <div className="comment-body comment-body--small">
        {body}
                <a href="#!" className="reply-1"> REPLY</a>
      </div>
    </div>
  </div>
);

export default CommentBlock;

