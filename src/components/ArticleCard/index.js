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
      <img alt="" src={image} className="responsive-img article-img" />
    </div>
  );

  return (
    <div className="card horizontal">
      {index % 2 === 0 && imageComponent }
      <div className="card-stacked">
        <div className="card-content">
          <h5 className="truncate">{title}</h5>
          <p>
            {`${preview} ... `}
            <Link to={`/article/${slug}`}>
              <u>Read article</u>
            </Link>
          </p>
        </div>
        <div className="card-action card--reactions">
          <div className="stats">
            <span className="icon-stats">
              <img src={likes} alt="likes" />
              {likes_count}
            </span>
            <span className="icon-stats">
              { average_rating }
            </span>
          </div>

        </div>
      </div>
      {index % 2 === 1 && imageComponent }
    </div>
  );
};

Articles.propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.shape().isRequired,
};

export default Articles;
