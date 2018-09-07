import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getUser from './actions';

export class Read extends Component {
  // change to component will mount

  componentDidMount() {
    const { retrieveProfile, match } = this.props;
    const urlUsername = match.params.username;
    const users = {
      user: {
        email: 'ianduncan08@gmail.com',
        username: urlUsername,
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjAsImV4cCI6MTUzNjM0MjMxN30.kdMybS2US9UXn_hw8XHlpjftZxokGR16FoYhkQejXlY',
      },
    };
    localStorage.setItem('user', JSON.stringify(users));
    retrieveProfile(urlUsername);
    console.log(this.props);
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
      <div>
        {/* Main */}
        <div className="container container--medium">
          <div className="row m-t--20">
            {/* User Profile */}
            <div className="row p-t--20 p-b--20">
              <div className="col s12 m9">
                <div className="m-b--15">
                  <h4>{success ? data.username : error}</h4>
                </div>

                <div className="m-b--15 p-r--100">
                  <p>{success ? data.bio : error}</p>
                </div>

                <div className="m-b--15">
                  {data && (
                    <Link
                      to={`/edit/profile/${data.username}`}
                      className="waves-effect waves-light btn btn--rounded"
                    >
                      Edit
                    </Link>
                  )}
                </div>
              </div>
              <div className="col s12 m3">
                {data && (
                  <img
                    src="https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg"
                    // {data.image}
                    alt={data.username}
                    className="responsive-img circle avatar--large"
                  />
                )}
              </div>
            </div>
            {/* End of User profile */}
          </div>
        </div>
      </div>
    );
  }
}

Read.propTypes = {
  retrieveProfile: PropTypes.func.isRequired,
  match: PropTypes.func,
  profile: PropTypes.object,
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
)(Read);
