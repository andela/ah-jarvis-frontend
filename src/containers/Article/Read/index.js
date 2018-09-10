import Dante from 'Dante2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import ArticleLoader from '../../../components/ArticleLoader';
import Header from '../../../components/Header';
import fetchArticle from './actions';

class Read extends Component {
  componentDidMount() {
    const { getArticle, match } = this.props;
    getArticle(match.params.id);
  }

  render() {
    const { isFetching, success, payload } = this.props.article;
    let data;
    if (payload.article) {
      data = JSON.parse(payload.article.body);
    }
    return (
      <React.Fragment>
        <Header />

        <div className="container m-t--30">
          <div className="row">
            <div className="col s12">
              {isFetching || !success ? <ArticleLoader /> : <Dante read_only content={data} />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Read.propTypes = {
  article: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
  }).isRequired,
  getArticle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ getArticle: fetchArticle }, dispatch);
const mapStateToProps = state => ({
  article: state.fetchArticle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Read);
