import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getUser, { followAction } from './actions';
import capitalize from '../../../utils/capitalize';
import Header from '../../../components/Header';
import Follow from '../../../components/FollowButton';

export class ReadProfile extends Component {
  componentDidMount() {
    const { retrieveProfile, match } = this.props;
    const urlUsername = match.params.username;
    retrieveProfile(urlUsername);
  }

  render() {
    const {
      isFetching, success, payload, errors,
    } = this.props.profile;

    const profile = payload.profile && payload.profile;

    return (
      <React.Fragment>
        <Header />
        {/* Main */}
        <div className="container container--medium">
          <div className="row m-t--20">
            {/* User Profile */}
            {profile && (
              <div className="row p-t--20 p-b--20">
                <div className="col s12 m9">
                  <div className="m-b--15 username-line">
                    <h4>{capitalize(profile.username)}</h4>
                  </div>
                  <div className="m-b--15 p-r--100 line-space">
                    <p>{profile.bio}</p>
                  </div>
                  <div className="m-b--15">
                    {this.props.user.email === profile.email ? (
                      <Link
                        to={`/profile/${profile.username}/edit`}
                        className="waves-effect waves-light btn btn--rounded"
                      >
                        Edit
                      </Link>
                    ) : (
                      <div>
                        {
                          <Follow
                            user={profile}
                            classname="waves-effect waves-light btn btn--rounded"
                            follow={this.props.follow}
                          />
                        }
                      </div>
                    )}
                  </div>
                </div>
                <div className="col s12 m3">
                  <img
                    src={profile.image}
                    alt={profile.username}
                    className="responsive-img circle avatar--large"
                  />
                </div>
              </div>
            )}
            {/* End of User profile */}
          </div>
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
  follow: PropTypes.func,
};

const mapStateToProps = state => ({
  profile: state.getProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    retrieveProfile: getUser,
    follow: followAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadProfile);
