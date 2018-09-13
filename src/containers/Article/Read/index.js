import Dante from 'Dante2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { fetchArticle } from './actions';
import Header from '../../../components/Header';
import NotFound from '../../../components/NotFound';
import AuthorDetails from '../../../components/AuthorDetails';
import ArticleDetailsLoader from '../../../components/Placehoders/ArticleDetailsLoader ';

class Read extends Component {
  componentDidMount() {
    const { getArticle, match } = this.props;
    getArticle(match.params.id);
  }

  render() {
    const {
      isFetching, success, payload, errors,
    } = this.props.article;
    let data;
    if (payload.article) {
      try {
        data = JSON.parse(payload.article.body);
      } catch (e) {
        return <NotFound />;
      }
    }

    if (errors) {
      return <NotFound />;
    }
    return (
      <React.Fragment>
        <Header />

        <div className="container m-t--30">
          <div className="row">
            <div className="col s12">
              {isFetching || !success ? (
                <ArticleDetailsLoader />
              ) : (
                <React.Fragment>
                  <AuthorDetails
                    user={{ ...payload.article.author }}
                    date={payload.article.created_at}
                  />
                  <Dante read_only content={data} />
                </React.Fragment>
              )}
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
    errors: PropTypes.object,
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
