import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '../../utils/capitalize';

const UserInfo = ({
  onPublish, publishing, save, user,
}) => (
  <div className="row p-t--20 p-b--20">
    <div className="col s6 m1">
      <img src={user.image} alt={user.username} className="responsive-img circle" />
    </div>
    <div className="col s12 m9">
      <p className={!user.bio ? 'm-t--15' : ''}>{user.username && capitalize(user.username)}</p>

      {user.bio && (
        <div className="m-b--15 m-t--15 p-r--100">
          <p className="text--small">{user.bio}</p>
        </div>
      )}
    </div>
    <div className="col m1 s6">
      <p className="grey-text p-t--10">{save ? 'Saving...' : 'Saved'}</p>
    </div>
    <div className="col s6 m1">
      <div className="m-b--15">
        <button
          type="submit"
          className="waves-effect waves-light btn btn--rounded"
          onClick={onPublish}
          disabled={publishing}
        >
          {publishing ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </div>
  </div>
);

export default UserInfo;

UserInfo.propTypes = {
  publishing: PropTypes.bool.isRequired,
  onPublish: PropTypes.func.isRequired,
  save: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
