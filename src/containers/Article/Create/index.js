import Dante from 'Dante2';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { ImageBlockConfig } from 'Dante2/package/es/components/blocks/image';
import { VideoBlockConfig } from 'Dante2/package/es/components/blocks/video';
import { PlaceholderBlockConfig } from 'Dante2/package/es/components/blocks/placeholder';
import { EmbedBlockConfig } from 'Dante2/package/es/components/blocks/embed';

import Header from '../../../components/Header';
import createArticle from './actions';
import UserInfo from '../../../components/UserInfo';
import editorstate from './editorstate';
import { getCurrentUser } from '../../../utils/auth';
import { DividerBlockConfig } from './divider';


class Create extends Component {
  state = {
    saving: false,
  };

  handleSave = (state) => {
    this.setState({ saving: true });
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    console.log(title);
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
    }, 1500);
  };

  handleSuccess = () => {
    console.log('Saved');
  };

  handlePublish = () => {
    this.props.postArticle(JSON.parse(localStorage.getItem('article')), this.props.history);
    localStorage.removeItem('article');
  };

  handleFailure = () => {
    console.log('Failed');
  };


  handleUpload =(img, state) => {
    console.log(`Uploading ${img} ${state}`);
    console.log(state);

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const response = JSON.parse(this.responseText);
      state.uploadCompleted(response.secure_url);
    };
    xhr.onerror = function () {
      const response = JSON.parse(this.responseText);
      console.log('ajaxError', response);
    };
    xhr.open('post', 'https://api.cloudinary.com/v1_1/dhgp3cxes/image/upload');
    xhr.upload.addEventListener('progress', (e) => {
      state.updateProgressBar(e);
    });
    const fd = new FormData();
    fd.append('upload_preset', 'jaaktgvk');
    fd.append('file', img);
    xhr.send(fd);
  };

  render() {
    const { publishing } = this.props.article;

    return (
      <React.Fragment>
        <Header />
        <div className="container m-t--30">
          <UserInfo
            onPublish={this.handlePublish}
            publishing={publishing}
            save={this.state.saving}
            user={getCurrentUser()}
          />
          <div className="row">
            <div className="col s12">
              <Dante
                content={editorstate}
                spellcheck
                widgets={[ImageBlockConfig({
                  upload_handler: this.handleUpload,
                  options: {
                    upload_url: null,
                    upload_handler: this.handleUpload,
                    upload_callback: this.handleUpload,
                    upload_error_callback: this.handleFailure,
                  },
                }), VideoBlockConfig(), EmbedBlockConfig(), DividerBlockConfig(), PlaceholderBlockConfig()]}
                data_storage={{
                  url: 'http://localhost:9000/api/articles/',
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
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ postArticle: createArticle }, dispatch);

const mapStateToProps = ({ createArticle }) => ({
  article: createArticle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
