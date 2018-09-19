import React from 'react';
import PropTypes from 'prop-types';

const Follow = ({ user, follow, classname }) => (
  <React.Fragment>
    {user.i_follow_this_user ? (
      <button onClick={() => follow(user.username, 'DELETE')} className={classname} type="button">
        Unfollow
      </button>
    ) : (
      <button type="button" onClick={() => follow(user.username, 'POST')} className={classname}>
        Follow
      </button>
    )}
  </React.Fragment>
);

Follow.propTypes = {
  follow: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  classname: PropTypes.string.isRequired,
};

export default Follow;
