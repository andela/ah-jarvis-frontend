/* eslint camelcase: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import likes from '../../assets/icons/thumbs-up.svg';

const Articles = ({ article, index }) => {
  const {
    preview, image, title, slug, likes_count, average_rating,
  } = article;
  const imageComponent = (
    <div className="card-image">
      <Link to={`/article/${slug}`}>
        <img alt="" src={image} className="responsive-img article-img" />
      </Link>
    </div>
  );

  return (
    <div className="card horizontal">
      {index % 2 === 0 && imageComponent}
      <div className="card-stacked">
        <div className="card-content">
          <Link to={`/article/${slug}`} className="black-text">
            <h5 className="truncate">{title}</h5>
          </Link>
          <p>
            <Link to={`/article/${slug}`} className="black-text">
              {`${preview} ... `}
            </Link>
            <Link to={`/article/${slug}`}>
              <u>Read article</u>
            </Link>
          </p>
        </div>
        <div className="card-action card--reactions">
          <div className="stats">
            <div className="icon---default">
              <img src={likes} alt="thumbs-up" className="p-r--5" />
              <span className="text--small">{likes_count}</span>
            </div>
            <span className="icon-stats">{average_rating}</span>
          </div>
        </div>
      </div>
      {index % 2 === 1 && imageComponent}
    </div>
  );
};

Articles.propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.shape().isRequired,
};

export default Articles;
