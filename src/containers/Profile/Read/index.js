import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getUser from './actions';
import capitalize from '../../../utils/capitalize';
import Header from '../../../components/Header';

export class ReadProfile extends Component {
  componentDidMount() {
    const { retrieveProfile, match } = this.props;
    const urlUsername = match.params.username;
    retrieveProfile(urlUsername);
  }

  render() {
    const { success, payload, errors } = this.props.profile;

    let data;
    if (payload.profile) {
      data = JSON.parse(JSON.stringify(payload.profile));
    }

    let error;
    if (errors) {
      data = JSON.parse(JSON.stringify(errors));
      error = data.profile.detail;
    }

    return (
      <React.Fragment>
        <Header {...this.props} />
        {/* Main */}
        <div className="container container--medium">
          <div className="row m-t--20">
            {/* User Profile */}
            <div className="row p-t--20 p-b--20">
              <div className="col s12 m9">
                <div className="m-b--15 username-line">
                  <h4>{success ? capitalize(data.username) : error}</h4>
                </div>

                <div className="m-b--15 p-r--100 line-space">
                  <p>{success ? data.bio : error}</p>
                </div>

                {data && (
                  <div className="m-b--15">
                    {this.props.user.email === data.email ? (
                      <Link
                        to={`/profile/${data.username}/edit`}
                        className="waves-effect waves-light btn btn--rounded"
                      >
                        Edit
                      </Link>
                    ) : (
                      <div>
                        {success && (
                          <Link to="#!" className="waves-effect waves-light btn btn--rounded">
                            Follow
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="col s12 m3">
                {data && (
                  <img
                    src={data.image}
                    alt={data.username}
                    className="responsive-img circle avatar--large"
                  />
                )}
              </div>
            </div>
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
};

const mapStateToProps = state => ({
  profile: state.getProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    retrieveProfile: getUser,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadProfile);
