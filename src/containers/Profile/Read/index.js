import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import getUser, { updateNotification, followAction } from './actions';
import Header from '../../../components/Header';
import NotFound from '../../../components/NotFound';

import UserArticles from '../../../components/UserArticles';
import Settings from '../../../components/Settings';
import ProfileUser from '../../../components/ProfileUser';

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

  updateProfile = () => {
    const { profile } = this.props.profile.payload;
    this.props.updateNotification(!profile.get_notifications);
  }

  renderBookmarks = results => (
    <UserArticles results={results} type="bookmark" />
  );

  render() {
    const {
      isFetching, success, payload, errors, articles, updating, isFollowing, bookmarks,
    } = this.props.profile;

    const data = payload.profile ? payload.profile : null;

    if (errors) {
      return (<NotFound />);
    }

    const loading = isFetching || !success || updating;
    const results = articles.results ? articles.results : null;
    const userBookmarks = bookmarks.results ? bookmarks.results : null;
    const { push } = this.props.history;
    return (
      <React.Fragment>
        <Header loading={loading || isFollowing} />
        {/* Main */}
        <div className="container container--medium">
          { data && (
            <React.Fragment>
              <div className="row m-t--20">
                <ProfileUser data={data} currentUser={this.props.user} follow={this.props.follow} />
              </div>

              <div className="row">
                <div className="col s12 data">
                  <ul className="tabs">
                    <li className="tab col s3">
                      <a
                        className="black-text"
                        href="#latest"
                        onClick={() => push({ hash: '#latest' })}
                      >
                      Profile
                      </a>
                    </li>
                    <li className="tab col s3">
                      <a
                        className="black-text"
                        href="#bookmarks"
                        onClick={() => push({ hash: '#bookmarks' })}
                      >
                        Favorites
                      </a>
                    </li>
                    <li className="tab col s3">
                      <a
                        className="black-text"
                        href="#follow"
                        onClick={() => push({ hash: '#follow' })}
                      >
                        Follows
                      </a>
                    </li>
                    { this.props.user.username === data.username && (
                      <li className="tab col s3">
                        <a
                          className="black-text"
                          href="#settings"
                          onClick={() => push({ hash: '#settings' })}
                        >
                        Settings
                        </a>
                      </li>
                    )
                  }
                  </ul>
                  <hr />
                </div>
                <div id="latest" className="col s12  p-t--30">
                  {results && <UserArticles results={results} />}
                </div>
                <div id="bookmarks" className="col s12  p-t--30">
                  {userBookmarks && this.renderBookmarks(userBookmarks) }
                </div>
                {this.props.user.username === data.username
                && <Settings data={data} update={this.updateProfile} /> }
              </div>
            </React.Fragment>
          )
          }
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
};

const mapStateToProps = state => ({
  profile: state.getProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    retrieveProfile: getUser,
    updateNotification,
    follow: followAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadProfile);
