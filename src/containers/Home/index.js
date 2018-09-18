import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import fetchArticlesAction from './actions';
import ArticleCard from '../../components/ArticleCard';

import ArticleCardPlaceHolder from '../../components/Placehoders/ArticleCard';
import ArticleCardHolderReverse from '../../components/Placehoders/ArticleCardReverse';
import featured from '../../utils/featured';
import Sidebar from '../Sidebar';

class Home extends Component {
  componentDidMount() {
    this.props.fetchArticles(30);
  }

  renderArticles = () => {
    const { results } = this.props.articles.payload;
    const featuredArticles = featured(results).filter(a => a !== false);
    const articles = featuredArticles.map((data, index) => (
      <ArticleCard key={data.slug} article={data} index={index} />
    ));
    return <React.Fragment>{articles}</React.Fragment>;
  };

  renderPlaceholder = () => {
    const loaders = [];
    for (let index = 0; index < 4; index += 1) {
      const loader = index % 2 === 0 ? (
        <ArticleCardPlaceHolder className="card horizontal" key={index} />
      ) : (
        <ArticleCardHolderReverse className="card horizontal" key={index} />
      );
      loaders.push(loader);
    }
    return loaders;
  };

  render() {
    const { isFetching, success } = this.props.articles;
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row articles">
            <div className="col m8 articles__main">
              <p className="flow-text m-b--30">Featured articles</p>

              {isFetching || !success ? this.renderPlaceholder() : this.renderArticles()}
            </div>
            <Sidebar page="home" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  articles: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
    errors: PropTypes.object,
  }).isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArticles: fetchArticlesAction,
  },
  dispatch,
);

const mapStateToProps = ({ articles }) => ({
  articles,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
