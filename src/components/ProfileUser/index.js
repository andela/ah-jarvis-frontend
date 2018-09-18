import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import capitalize from '../../utils/capitalize';

const ProfileUser = ({
  data, currentUser, follow, listFollowers,
}) => (
  <div className="row p-t--20 p-b--20">
    <div className="col s12 m9">
      <div className="m-b--15 username-line">
        <h4>{capitalize(data.username)}</h4>
      </div>

      <div className="m-b--15 p-r--100 line-space">
        <p>{data.bio}</p>
      </div>

      <div className="m-b--15">
        <a href="#following" className="m-r--15">
          {data.following}
          {' '}
Following
        </a>
        <a href="#followers" className="follow-text" onClick={listFollowers}>
          {data.followers}
          {' '}
Followers
        </a>
      </div>

      <div className="m-b--15">
        {currentUser.email === data.email ? (
          <Link
            to={`/profile/${data.username}/edit`}
            className="waves-effect waves-light btn btn--rounded"
          >
            Edit
          </Link>
        ) : (
          <div>
            {data.i_follow_this_user ? (
              <button
                onClick={() => follow(data.username, 'DELETE')}
                className="waves-effect waves-light btn btn--rounded"
                type="button"
              >
                Unfollow
              </button>
            ) : (
              <button
                type="button"
                onClick={() => follow(data.username, 'POST')}
                className="waves-effect waves-light btn btn--rounded"
              >
                Follow
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    <div className="col s12 m3">
      <img src={data.image} alt={data.username} className="responsive-img circle avatar--large" />
    </div>
  </div>
);

ProfileUser.propTypes = {
  follow: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  listFollowers: PropTypes.object.isRequired,
};

export default ProfileUser;
