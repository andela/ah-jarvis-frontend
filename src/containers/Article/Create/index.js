import React, { Component } from 'react';
import Dante from 'Dante2';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ImageBlockConfig } from 'Dante2/package/es/components/blocks/image';
import { VideoBlockConfig } from 'Dante2/package/es/components/blocks/video';
import { EmbedBlockConfig } from 'Dante2/package/es/components/blocks/embed';
import { PlaceholderBlockConfig } from 'Dante2/package/es/components/blocks/placeholder';

import createArticleAction from './actions';
import UserInfo from '../../../components/UserInfo';
import Header from '../../../components/Header';
import editorstate from '../../../utils/editorstate';
import config from '../../../config';
import uploader from '../../../utils/uploader';

class Create extends Component {
  state = {
    saving: false,
    tags: [],
  };

  getTags = (_e, d) => {
    this.setState({
      tags: [...this.state.tags, d.childNodes[0].nodeValue],
    });
  };

  removeTag = (_e, d) => {
    this.setState({
      tags: this.state.tags.filter(t => t !== d.childNodes[0].nodeValue),
    });
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
    const { postArticle, history } = this.props;
    const article = JSON.parse(localStorage.getItem('article'));
    article.article.tagList = this.state.tags;
    postArticle(article, history);
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
    const { publishing } = this.props.article;

    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="container m-t--30">
          <UserInfo
            onPublish={this.handlePublish}
            publishing={publishing}
            save={this.state.saving}
            user={this.props.user}
            getTags={this.getTags}
            removeTag={this.removeTag}
          />
          <div className="row">
            <div className="col s12">
              <Dante
                content={editorstate}
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
      </React.Fragment>
    );
  }
}

Create.propTypes = {
  article: PropTypes.shape({
    publishing: PropTypes.bool.isRequired,
  }).isRequired,
  postArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    postArticle: createArticleAction,
  },
  dispatch,
);

const mapStateToProps = ({ createArticle }) => ({
  article: createArticle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);
