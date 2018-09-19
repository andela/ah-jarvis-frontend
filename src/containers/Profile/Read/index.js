import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import getUser, { followAction, myFollowers, myFollowings } from './actions';
import Header from '../../../components/Header';
import NotFound from '../../../components/NotFound';
import ProfileUser from '../../../components/ProfileUser';
import FollowList from '../../../components/FollowList';

export class ReadProfile extends Component {
  componentDidMount() {
    const { retrieveProfile, match } = this.props;
    const urlUsername = match.params.username;
    retrieveProfile(urlUsername);
  }

  componentDidUpdate() {
    const el = document.querySelector('.tabs');
    M.Tabs.init(el);
  }

  getFollowers = () => {
    const { profile } = this.props.profile.payload;
    this.props.followers(profile.username);
  };

  getFollowing = () => {
    const { profile } = this.props.profile.payload;
    this.props.following(profile.username);
  };

  render() {
    const {
      isFetching,
      success,
      payload,
      errors,
      updating,
      isFollowing,
      followers,
      following,
    } = this.props.profile;

    const data = payload.profile ? payload.profile : null;

    if (errors) {
      return <NotFound />;
    }

    const loading = isFetching || !success || updating;
    const followersResults = followers.profiles;
    const followingResults = following.profiles;
    const { push } = this.props.history;

    return (
      <React.Fragment>
        <Header loading={loading || isFollowing} />
        {/* Main */}
        <div className="container container--medium">
          {data && (
            <React.Fragment>
              <div className="row m-t--20">
                <ProfileUser
                  data={data}
                  currentUser={this.props.user}
                  follow={this.props.follow}
                  listFollowers={this.getFollowers}
                  listFollowing={this.getFollowing}
                />
              </div>

              <div className="row">
                <div className="col s12 data">
                  <ul className="tabs tabs-fixed-width">

                    <li className="tab col ">
                      <a
                        className="black-text"
                        href="#latest"
                        onClick={() => push({ hash: '#latest' })}
                      >
                        Profile
                      </a>
                    </li>

                    <li className="tab col ">
                      <a
                        className="black-text"
                        href="#bookmarks"
                        onClick={() => push({ hash: '#bookmarks' })}
                      >
                        Favorites
                      </a>
                    </li>

                    <li className="tab col ">
                      <a
                        className="black-text"
                        href="#following"
                        onClick={() => {
                          this.getFollowing();
                          push({ hash: '#following' });
                        }}
                      >
                        Following
                      </a>
                    </li>

                    <li className="tab col ">
                      <a
                        className="black-text"
                        href="#followers"
                        onClick={() => {
                          this.getFollowers();
                          push({ hash: '#followers' });
                        }}
                      >
                        Followers
                      </a>
                    </li>

                    <li className="tab col ">
                      <a
                        className="black-text"
                        href="#settings"
                        onClick={() => {
                          this.getFollowers();
                          push({ hash: '#settings' });
                        }}
                      >
                         Settings
                      </a>
                    </li>

                  </ul>
                  <hr />
                </div>
                <div id="latest" className="col s12  p-t--30">
                  Latest
                </div>
                <div id="bookmarks" className="col s12  p-t--30">
                  Bookmarks
                </div>

                <div id="followers" className="col s12  p-t--30">
                  {followersResults && (
                    <div>
                      {followersResults.length > 0 && <FollowList details={followersResults} />}
                    </div>
                  )}
                </div>

                <div id="following" className="col s12  p-t--30">
                  {followingResults && (
                    <div>
                      {followingResults.length > 0 && <FollowList details={followingResults} />}
                    </div>
                  )}
                </div>

                <div id="settings" className="col s12  p-t--30">
                  <p> Settings </p>
                </div>

              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

ReadProfile.propTypes = {
  retrieveProfile: PropTypes.func.isRequired,
  match: PropTypes.object,
  profile: PropTypes.object,
  user: PropTypes.object,
  follow: PropTypes.func.isRequired,
  followers: PropTypes.func.isRequired,
  following: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.getProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    retrieveProfile: getUser,
    follow: followAction,
    followers: myFollowers,
    following: myFollowings,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadProfile);
