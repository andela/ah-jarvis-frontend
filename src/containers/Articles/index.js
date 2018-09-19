import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Article from '../../components/Article';
import Header from '../../components/Header';
import fetchArticleAction, { searchRequest } from '../Home/actions';
import { extractImage, extractDescription } from './filterArticles';
import ArticleLoader from '../../components/Placehoders/ArticleLoader';
import Paginator from '../../components/Pagination';
import config from '../../config';
import Sidebar from '../Sidebar';
import readTime from '../../utils/readtime';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
    this.loading = false;
    this.state = {
      activePage: 1,
      search: null,
    };
  }


  componentDidMount() {
    const { location } = this.props;
    const page = new URLSearchParams(location.search).get('page');
    const search = new URLSearchParams(location.search).get('search');

    if (page) {
      this.setState({ activePage: page });
    }
    this.setState({ search });
    this.props.fetchArticle(
      config.ARTICLES_PER_PAGE, page || this.state.activePage, this.state.search,
    );
  }

  fetchFunc = (search) => {
    this.props.fetchArticle(
      config.ARTICLES_PER_PAGE, this.state.activePage, search,
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchFunc(e.target.value);
  }

  handleChange = (e) => {
    this.props.searchRequest();
    e.preventDefault();
    e.persist();
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.fetchFunc(e.target.value);
    }, 500);
  }

  renderArticles = () => {
    const { results } = this.props.articles.payload;
    const articles = results.map((data) => {
      let b;
      try {
        b = JSON.parse(data.body);
      } catch (e) {
        return false;
      }
      const { blocks } = b;
      if (!blocks) return false;
      const image = extractImage(blocks);
      const p = extractDescription(blocks);
      const preview = p ? p.text : '';
      return (
        <Article
          title={data.title}
          date={data.created_at}
          slug={data.slug}
          preview={preview}
          image={image}
          author={data.author}
          key={data.slug}
          readtime={readTime(b)}
          likesCount={data.likes_count}
        />
      );
    });
    return articles;
  };

  renderLoader = () => {
    const loaders = [];
    for (let index = 0; index <= 4; index += 1) {
      const loader = <ArticleLoader className="col m11 s12 preview" key={index} />;
      loaders.push(loader);
    }
    return loaders;
  };

  handlePageChange = (page) => {
    const activePage = page;
    this.setState({
      activePage,
    });
    this.props.fetchArticle(config.ARTICLES_PER_PAGE, page);
    window.scrollTo(0, 0);
  };

  renderStories = () => {
    const {
      isFetching, success,
    } = this.props.articles;
    return (
      <div className="row articles">
        <div className="col m8 articles__main">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search Authors' Heven..."
              className="search"
              onChange={this.handleChange}
            />
          </form>
          <p className="flow-text m-b--30">Stories</p>
          {(isFetching || !success) ? this.renderLoader() : this.renderArticles()}
        </div>
        <Sidebar />
      </div>
    );
  };

  render() {
    const { payload, isSearching } = this.props.articles;
    return (
      <div>
        <React.Fragment>
          <Header {...this.props} loading={isSearching} />
          <div className="container-fluid">
            {this.renderStories()}
            {payload && (
              <Paginator
                activePage={this.state.activePage}
                total={payload.count}
                onClick={this.handlePageChange}
              />
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
    errors: PropTypes.object,
  }).isRequired,
  fetchArticle: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArticle: fetchArticleAction,
    searchRequest,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
