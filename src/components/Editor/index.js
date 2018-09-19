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
    tags: [],
    editorState: null,
    article: {},
  };

  componentDidMount() {
    this.setState({
      article: {
        ...this.state.article,
        body: this.props.state,
        tags: [],
      },
    });
  }

  static getDerivedStateFromProps(props, state) {
    const propsNewTags = props.tags ? props.tags.filter(tag => state.tags.includes(tag)) : [];
    if (!props.tags) {
      return {
        ...state,
        tags: [...state.tags],
        editorState: props.state,
      };
    }
    return {
      ...state,
      tags: propsNewTags.length === 0 ? props.tags : [...propsNewTags, ...state.tags],
      editorState: props.state,
    };
  }

  getTags = (_e, d) => {
    this.setState({
      tags: [...this.state.tags, d.childNodes[0].nodeValue],
    });
  };

  removeTag = (_e, d) => {
    this.setState({
      tags: this.state.tags.filter(tag => tag !== d.childNodes[0].nodeValue),
    });
  };

  handleSave = (state) => {
    this.setState({ saving: true });
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    let data;
    if (state.editorContent.blocks.length === 1 && state.editorContent.blocks[0].text === '') {
      data = {
        article: {
          body: JSON.stringify(this.state.editorState),
          title,
          description: title,
          tagList: this.state.tags,
        },
      };
      localStorage.setItem('article', JSON.stringify(data));
      this.setState({ saving: false });
      return;
    }
    data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title,
        tagList: this.state.tags,
      },
    };

    localStorage.setItem('article', JSON.stringify(data));
    this.setState({ saving: false });
  };

  handlePublish = () => {
    const { postArticle, history } = this.props;
    const article = JSON.parse(localStorage.getItem('article'));
    article.article.tagList = this.state.tags;
    postArticle(article, history);
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

  renderTags = tags => tags.map(tag => <div className="chip">{tag}</div>);

  render() {
    const {
      state, publishing, tags, update, user,
    } = this.props;
    return (
      <div className="container m-t--30">
        <UserInfo
          onPublish={this.handlePublish}
          publishing={publishing}
          save={this.state.saving}
          user={user}
          getTags={this.getTags}
          removeTag={this.removeTag}
          tags={this.state.tags}
          update={!!update}
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
                interval: 100,
              }}
            />

            {update && <div className="row">{this.renderTags(tags)}</div>}
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
  history: PropTypes.object.isRequired,
  postArticle: PropTypes.func.isRequired,
  publishing: PropTypes.bool.isRequired,
  update: PropTypes.bool,
  state: PropTypes.string,
  tags: PropTypes.array.isRequired,

};
