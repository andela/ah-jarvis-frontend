import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import updateUser from './actions';
import validateInput from '../../../utils/validateInput';
import uploader from '../../../utils/uploader';

class Update extends Component {
  state = {
    profile: {
      username: '',
      bio: '',
      image:
        'https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg',
    },
    validation: {},
    fileInput: React.createRef(),
    uploaded: null,
  };

  componentDidMount() {
    const { profile } = this.props.profile;
    let data;
    if (profile) {
      data = JSON.parse(JSON.stringify(profile));
    }
    this.setState({
      profile: {
        username: data.username,
        bio: data.bio,
        image: data.image,
      },
    });
  }

  handleChange = (event) => {
    this.setState({
      profile: {
        ...this.state.profile,
        [event.target.name]: event.target.value,
      },
      validation: {
        [event.target.name]: validateInput(event.target.name, event.target.value),
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { updateProfile, history } = this.props;
    updateProfile({ user: this.state.profile }, history);
  };

  updateProgress = (e) => {
    this.setState({
      uploaded: Math.round((e.loaded / e.total) * 100),
    });
  };

  handleUpload = (event) => {
    event.preventDefault();
    const reader = new FileReader();

    reader.onload = (e) => {
      this.setState({
        profile: {
          ...this.state.profile,
          image: e.target.result,
        },
      });
    };
    reader.readAsDataURL(this.state.fileInput.current.files[0]);

    uploader({ body: this.state.fileInput.current.files[0], progress: this.updateProgress })
      .then((response) => {
        console.log(response);
        this.setState({
          profile: {
            ...this.state.profile,
            image: response.secure_url,
          },
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { isFetching } = this.props.edit;
    if (this.state.uploaded === 100) {
      this.setState({
        uploaded: null,
      });
    }

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
                  value={this.state.profile.username}
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Edit your username"
                />
                <span className="green-text small">{this.state.validation.username}</span>
              </div>

              <div className="m-b--15 p-r--100">
                <input
                  className="input-edit input-edit--small"
                  value={this.state.profile.bio}
                  name="bio"
                  onChange={this.handleChange}
                  placeholder="Edit your bio"
                />
                <span className="green-text small">{this.state.validation.bio}</span>
              </div>

              <div className="m-b--15">
                <button
                  type="submit"
                  className="waves-effect waves-light btn btn--rounded"
                  onClick={this.handleSubmit}
                  disabled={isFetching}
                >
                  {isFetching ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="edit-hover">
                <label htmlFor="image">
                  <img
                    className={`circle avatar--profile image ${
                      this.state.uploaded ? 'image-loading' : ''
                    }`}
                    src={this.state.profile.image}
                    alt={this.state.profile.username}
                  />
                  <div className="toggle">
                    <div className={this.state.uploaded ? 'toggle-loading' : 'toggle-text'}>
                      {this.state.uploaded && `${this.state.uploaded}%`}
                    </div>
                  </div>
                </label>
                <input
                  id="image"
                  className="change-image"
                  type="file"
                  onChange={this.handleUpload}
                  ref={this.state.fileInput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Update.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  history: PropTypes.object,
  edit: PropTypes.object,
  profile: PropTypes.object,
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
