import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthorDetails from '../AuthorDetails';
import thumbsUp from '../../assets/icons/thumbs-up.svg';
import heart from '../../assets/icons/baseline-bookmark_border-24px.svg';
import heartFill from '../../assets/icons/baseline-bookmark-24px.svg';

const Article = ({
  title,
  author,
  image,
  preview,
  date,
  slug,
  readtime,
  likesCount,
  favorited,
}) => (
  <div className="col m11 s12 preview">
    <div className="row author">
      <AuthorDetails user={author} date={date} small readtime={readtime} slug={slug} />
    </div>
    {image && (
      <Link to={`/article/${slug}`} className="black-text">
        <div className="row article__image">
          <img alt="" src={image} className="responsive-img article__preview" />
        </div>
      </Link>
    )}
    <div className="row article__details">
      <Link to={`/article/${slug}`} className="black-text">
        <h2 className="article__preview--title truncate">{title}</h2>
      </Link>
      <div className="article__preview--body truncate">
        <Link to={`/article/${slug}`} className="black-text">
          <p>{preview}</p>
        </Link>
        <Link to={`/article/${slug}`}>Read more...</Link>
      </div>
    </div>
    <div className="row">
      <div className="article__hypes">
        <div className="icon---default">
          <img src={thumbsUp} alt="thumbs-up" />
          <div className="text--small">{likesCount}</div>
        </div>
        <div>
          {favorited ? (
            <img src={heartFill} alt="thumbs-up" />
          ) : (
            <img src={heart} alt="thumbs-up" />
          )}
        </div>
      </div>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  readtime: PropTypes.number,
  likesCount: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
};

export default Article;
