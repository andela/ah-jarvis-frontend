import Dante from 'Dante2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import UserInfo from '../../../components/UserInfo';
import Header from '../../../components/Header';
import editorstate from './editorstate';
import createArticleAction from './actions';

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

  handlePublish = () => {
    const { postArticle, history } = this.props;
    postArticle(JSON.parse(localStorage.getItem('article')), history);
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

Create.propTypes = {
  article: PropTypes.shape({
    publishing: PropTypes.bool.isRequired,
  }).isRequired,
  postArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
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
