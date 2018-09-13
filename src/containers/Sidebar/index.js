import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InlineLoader from '../../components/InlineLoader';
import Trending from '../../components/Trending';
import fetchTrendingArticleAction from './actions';
import featured from '../../utils/featured';


const Network = () => (
  <React.Fragment>
    <img src="https://randomuser.me/api/portraits/med/women/2.jpg" alt="" className="small--avatar responsive-img" />
    <img src="https://randomuser.me/api/portraits/med/men/1.jpg" alt="" className="small--avatar responsive-img" />
    <img src="https://randomuser.me/api/portraits/med/men/5.jpg" alt="" className="small--avatar responsive-img" />

    <p className="m-t--15 m-b--20">
            Build your network in seconds
    </p>

    <a href="!#" className="waves-effect waves-light btn btn--rounded">Follow authors</a>
  </React.Fragment>
);

const Tags = () => (
  <React.Fragment>
    <div className="row">
      <div className="chip">Hyper Loop</div>
      <div className="chip">Quantum computing</div>
      <div className="chip">Alien technology</div>
      <div className="chip">Technology</div>
    </div>
  </React.Fragment>
);


class SideBar extends Component {
  componentDidMount() {
    this.props.fetchArticle(30);
  }

  renderPlaceholder = () => (
    <InlineLoader />
  );

  renderArticles = () => {
    const { results } = this.props.articles.payload;
    const featuredArticles = featured(results).filter(a => a !== false).slice(0, 4);
    return (
      <React.Fragment>
        <Trending articles={featuredArticles} />
      </React.Fragment>
    );
  }


  render() {
    const { isFetching, success } = this.props.articles;
    return (
      <aside className="col m3 articles__sidebar">
        <div className="network center p-b--40">
          {this.props.page === 'home' ? <Network /> : <Tags /> }
        </div>

        <div className="divider" />
        {isFetching || !success ? this.renderPlaceholder() : this.renderArticles() }
        <div className="divider" />

        <div className="trending p-b--10">
          <div className="trending__article">
            <div className="title--md">Recommended for you </div>
          </div>
        </div>
        <div className="divider" />
      </aside>
    );
  }
}

SideBar.propTypes = {
  page: PropTypes.string.isRequired,
  articles: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
    errors: PropTypes.object,
  }).isRequired,
  fetchArticle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchArticle: fetchTrendingArticleAction,
  },
  dispatch,
);

const mapStateToProps = ({ trending }) => ({
  articles: trending,
});


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
