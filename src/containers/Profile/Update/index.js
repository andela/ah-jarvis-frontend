import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import updateUser from './actions';

class Update extends Component {
  state = {
    username: '',
    bio: '',
    image:
      'https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg',
  };

  componentDidMount() {
    // console.log(this.props.profile);
    // const { updateProfile } = this.props;
    // console.log(updateProfile());
    const { profile } = this.props.profile;
    let data;
    if (profile) {
      data = JSON.parse(JSON.stringify(profile));
    }

    this.setState({
      username: data.username,
      bio: data.bio,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateProfile, history } = this.props;
    updateProfile({ user: this.state }, history);
  };

  render() {
    return (
      <div className="container container--medium">
        {/* Main */}
        <div className="row m-t--20">
          {/* User Profile */}
          <div className="row p-t--20 p-b--20">
            <div className="col s12 m9">
              <div className="m-b--15">
                <input
                  className="input-edit input-edit--large"
                  value={this.state.username}
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Edit your username"
                />
              </div>

              <div className="m-b--15 p-r--100">
                <input
                  className="input-edit input-edit--small"
                  value={this.state.bio}
                  name="bio"
                  onChange={this.handleChange}
                  placeholder="Edit your bio"
                />
              </div>

              <div className="m-b--15">
                <a
                  href="#nn"
                  className="waves-effect waves-light btn btn--rounded"
                  onClick={this.handleSubmit}
                >
                  Save
                </a>
              </div>
            </div>
            <div className="col s12 m3">
              <img
                src={this.state.image}
                alt={this.state.username}
                className="responsive-img circle avatar--large"
              />
            </div>
          </div>
          {/* End of User profile */}
        </div>
      </div>
    );
  }
}

Update.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.getProfile.payload,
  edit: state.editProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateProfile: updateUser,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Update);
