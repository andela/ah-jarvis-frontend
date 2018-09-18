import Dante from 'Dante2';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';

import { ImageBlockConfig } from 'Dante2/package/es/components/blocks/image';
import { VideoBlockConfig } from 'Dante2/package/es/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/es/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/es/components/blocks/placeholder';

import uploader from '../../utils/uploader';
import config from '../../config';
import UserInfo from '../UserInfo';

export default class Editor extends Component {
  state = {
    saving: false,
  };

  handleSave = (state) => {
    this.setState({ saving: true });
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    const data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title,
      },
    };

    localStorage.setItem('article', JSON.stringify(data));
    setTimeout(() => {
      this.setState({ saving: false });
    }, 500);
  };

  handlePublish = () => {
    const {
      postArticle, history, update, slug,
    } = this.props;
    postArticle(JSON.parse(localStorage.getItem('article')), history, update, slug);
    localStorage.removeItem('article');
  };

  handleFailure = (e) => {
    M.toast({ html: e, classes: 'danger' });
  };

  handleUpload = (img, state) => {
    uploader({
      body: img,
      progress: (e) => {
        state.updateProgressBar(e);
      },
    }).then((data) => {
      state.uploadCompleted(data.secure_url);
    });
  };

  render() {
    const { state, publishing, user } = this.props;
    return (
      <div className="container m-t--30">
        <UserInfo
          onPublish={this.handlePublish}
          publishing={publishing}
          editing
          save={this.state.saving}
          user={user}
        />
        <div className="row">
          <div className="col s12">
            <Dante
              content={state}
              spellcheck
              widgets={[
                ImageBlockConfig({
                  upload_handler: this.handleUpload,
                  options: {
                    upload_url: null,
                    upload_handler: this.handleUpload,
                    upload_callback: this.handleUpload,
                    upload_error_callback: this.handleFailure,
                  },
                }),
                VideoBlockConfig(),
                EmbedBlockConfig(),
                PlaceholderBlockConfig(),
              ]}
              data_storage={{
                url: config.BASE_URL,
                method: 'POST',
                save_handler: this.handleSave,
                success_handler: this.handleSuccess,
                failure_handler: this.handleFailure,
                interval: 1000,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  postArticle: PropTypes.func.isRequired,
  publishing: PropTypes.bool.isRequired,
  update: PropTypes.bool,
  state: PropTypes.string,
};
