import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../../components/Header';
import Editor from '../../../components/Editor';
import { fetchArticle } from '../Read/actions';
import createArticleAction from '../Create/actions';

class Update extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.slug);
  }

  render() {
    const {
      isFetching, payload, success, publishing,
    } = this.props.article;
    const { slug } = this.props.match.params;
    console.log(payload);

    return (
      <React.Fragment>
        <Header />
        {success
          && !isFetching && (
            <Editor
              state={JSON.parse(payload.article.body)}
              postArticle={this.props.editArticle}
              slug={slug}
              history={this.props.history}
              publishing={publishing}
              user={this.props.user}
              tags={payload.article.tagList}
              update
            />
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getArticle: fetchArticle,
    editArticle: createArticleAction,
  },
  dispatch,
);

const mapStateToProps = state => ({
  article: state.fetchArticle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Update);

Update.propTypes = {
  article: PropTypes.object.isRequired,
  editArticle: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.object,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
};
