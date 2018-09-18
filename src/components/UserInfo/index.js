import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import capitalize from '../../utils/capitalize';

class UserInfo extends React.Component {
  componentDidMount() {
    const { getTags, removeTag } = this.props;
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { closeOnClick: false });

    const chip = document.querySelectorAll('.chips');
    M.Chips.init(chip, {
      placeholder: 'Add a tag...',
      onChipAdd: getTags,
      onChipDelete: removeTag,
    });
  }

  render() {
    const {
      onPublish, publishing, save, user,
    } = this.props;

    return (
      <div className="row p-t--20 p-b--20">
        <div className="col s6 m1">
          <img src={user.image} alt="nn" className="responsive-img circle" />
        </div>
        <div className="col s12 m9">
          <p className={!user.bio && 'm-t--15'}>{user.username && capitalize(user.username)}</p>

          {user.bio && (
            <div className="m-b--15 m-t--15 p-r--100">
              <p className="text--small">{user.bio}</p>
            </div>
          )}
        </div>
        <div className="col s6 m1">
          <div>
            <p className="grey-text p-t--10">{save ? 'Saving...' : 'Saved'}</p>
          </div>
        </div>
        <div className="col s6 m1">
          <div>
            <button type="button" className="dropdown-trigger btn-dropdown" data-target="publish">
              {publishing ? 'Publishing...' : 'Publish'}
            </button>

            <div id="publish" className="publish dropdown-content card">
              <h6>Ready to publish your awesome article?</h6>
              <p className="p-t--15">Add tags to make it easier for readers to find your article</p>
              <div className="chips chips-placeholder" />

              <div className="divider" />

              <p className="p-t--15 p-b--25">
                Tip: add a high resolution image to your story to capture people’s interest
              </p>
              <button
                type="submit"
                className="waves-effect waves-light btn-flat btn-flat--primary right"
                onClick={onPublish}
                disabled={publishing}
              >
                {publishing ? 'Publishing...' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  publishing: PropTypes.bool.isRequired,
  onPublish: PropTypes.func.isRequired,
  save: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }).isRequired,
  getTags: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
};

export default UserInfo;
