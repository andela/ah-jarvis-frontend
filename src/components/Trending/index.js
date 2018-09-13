import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Trending = ({ articles }) => {
  const articlesList = articles.map(article => (
    <div className="trending__article">
      <div className="trending__article--img">
        <img src={article.image} alt="" className="responsive-img" />
      </div>
      <div className="trending__article--body">
        <Link to={`/article/${article.slug}`} className="black-text"><p className="article__title truncate">{article.title}</p></Link>
        <Link to={`/article/${article.slug}`} className="black-text"><p className="article__info">{`${article.preview.substring(1, 50)}...`}</p></Link>
      </div>
    </div>
  ));
  return (
    <div className="trending p-b--10">
      <div className="trending__article">
        <div className="title--md">Trending articles</div>
      </div>
      {articlesList}
    </div>
  );
};

Trending.propTypes = {
  articles: PropTypes.shape().isRequired,
};

export default Trending;
