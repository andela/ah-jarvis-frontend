import Dante from 'Dante2';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { stateToHTML } from 'draft-js-export-html';

import Header from '../../../components/Header';
import createArticle from './actions';
import UserInfo from '../../../components/UserInfo';
import { convertToHTML } from 'draft-convert';

class Create extends Component {
  handleSave = state => {
    // const data = stateToHTML(state.editorState());
    const editorState = state.editorState();
    console.log(state.editorContent);

    const title = editorState.getCurrentContent().getFirstBlock().text;
    // console.log(convertToHTML(editorState.getCurrentContent()));

    const data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title,
      },
    };
    localStorage.setItem('article', JSON.stringify(data));
  };

  handleSuccess = () => {
    console.log('Saved');
  };

  handlePublish = () => {
    this.props.postArticle(JSON.parse(localStorage.getItem('article')));
  };

  handleFailure = () => {
    console.log('Failed');
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container m-t--30">
          <UserInfo onPublish={this.handlePublish} />
          <div className="row">
            <div className="col s12">
              <Dante
                data_storage={{
                  url: 'http://localhost:9000/api/articles/',
                  method: 'POST',
                  save_handler: this.handleSave,
                  success_handler: this.handleSuccess(),
                  failure_handler: this.handleFailure(),
                  interval: 1500,
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

export default connect(
  null,
  mapDispatchToProps,
)(Create);
