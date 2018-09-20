import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

import capitalize from '../../utils/capitalize';
import getCurrentUser from '../../utils/auth';
import ROUTES from '../../utils/routes';
import ArticleActions from '../../containers/ArticleActions';

const renderTime = readtime => (
  <React.Fragment>
    <span className="p-r--5 p-l--5">.</span>
    {`${readtime} min read`}
  </React.Fragment>
);

const AuthorDetails = ({
  user, date, small, averageRate, readtime, onStarClick, slug,
}) => (
  <div className="row author__panel p-t--20">
    <div className="author col m10">
      <Link to="/">
        <div className="author__avatar">
          <img
            src={user.image}
            alt={user.username}
            className={`responsive-img circle ${small ? 'avatar--small' : 'avatar--small'}`}
          />
        </div>
      </Link>
      <div className={`author_details ${small && 'author--small'}`}>
        <div className="author__info">
          <div className="author-name">
            <Link className="text--small" to={`${ROUTES.profile}/${user.username}`}>
              {capitalize(user.username)}
            </Link>
          </div>
          {!small
            && !getCurrentUser() && (
              <a className="btn-flat btn-flat--primary" href="#!">
                Follow
              </a>
          )}
        </div>

        <div className="article__highlights">
          {new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
          {small ? renderTime(readtime) : renderTime(readtime)}
          {!small && (
            <React.Fragment>
              <span className="p-r--10 p-l--10">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={averageRate}
                  starColor="#03a87c"
                  emptyStarColor="#ccc"
                  onStarClick={onStarClick}
                />
              </span>
              <p>{averageRate}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>

    <div className="col m2 right">
      <div className="m-t--15">
        {getCurrentUser()
          && user.username === getCurrentUser().username
          && small && <ArticleActions slug={slug} />}
        {getCurrentUser()
          && user.username === getCurrentUser().username
          && !small && (
            <Link to={`${slug}/edit`}>
              <button type="button" className="btn-flat btn-flat--primary">
                Edit Article
              </button>
            </Link>
        )}
      </div>
    </div>
  </div>
);

export default AuthorDetails;

AuthorDetails.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  slug: PropTypes.string,
  readtime: PropTypes.string,
  small: PropTypes.bool,
  date: PropTypes.string.isRequired,
  onStarClick: PropTypes.func,
  averageRate: PropTypes.number,
};
