import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editorstate from './editorstate';

import createArticleAction from './actions';
import Header from '../../../components/Header';
import Editor from '../../../components/Editor';

class Create extends Component {
  render() {
    const { publishing } = this.props.article;
    console.log(this.props.article);

    return (
      <React.Fragment>
        <Header />
        <Editor
          state={editorstate}
          postArticle={this.props.postArticle}
          history={this.props.history}
          publishing={publishing}
          user={this.props.user}
        />
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
