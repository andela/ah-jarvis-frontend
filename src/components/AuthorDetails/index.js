import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import capitalize from '../../utils/capitalize';
import getCurrentUser from '../../utils/auth';

const AuthorDetails = ({ user, date, small }) => (
  <div className="row">
    <div className={`author ${!small && 'col m9'}`}>
      <Link to="/">
        <div className="author__avatar">
          <img src={user.image} alt="" className={`responsive-img circle ${small ? 'avatar--small' : 'avatar--small'}`} />
        </div>
      </Link>
      <div className={`author_details ${small && 'author--small'}`}>
        <div className="author__info">
          <div className="author-name">
            <Link className="text--small" to="/">{capitalize(user.username)}</Link>
          </div>
          {!small && <a className="btn-flat btn-flat--primary" href="#!">Follow</a>}
        </div>
        <div className="article__highlights">
          {new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
          {small ? (
            <React.Fragment>
              <span className="p-r--5 p-l--5">.</span>
              13 min read
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className="p-r--5 p-l--5">.</span>
              13 min read
            </React.Fragment>
          ) }
        </div>
      </div>
    </div>

    <div className="col m3">
      <div className="m-t--15">
        {!small
        && getCurrentUser() && user.username === getCurrentUser().username && (
        <button type="button" className="btn-flat btn-flat--primary">
          Edit Article
        </button>
        )
      }
      </div>
    </div>
  </div>
);

export default AuthorDetails;

AuthorDetails.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  small: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
};
