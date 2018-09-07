import Dante from 'Dante2';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import Header from '../../../components/Header';
import createArticle from './actions';
import UserInfo from '../../../components/UserInfo';
import editorstate from './editorstate';

class Create extends Component {
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

  render() {
    const { publishing } = this.props.article;
    console.log(this.state);
    return (
      <React.Fragment>
        <Header />
        <div className="container m-t--30">
          <UserInfo
            onPublish={this.handlePublish}
            publishing={publishing}
            save={this.state.saving}
          />
          <div className="row">
            <div className="col s12">
              <Dante
                content={editorstate}
                spellcheck
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
