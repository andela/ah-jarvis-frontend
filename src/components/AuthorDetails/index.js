import React from 'react';
import PropTypes from 'prop-types';

import capitalize from '../../utils/capitalize';

const AuthorDetails = ({ user, date }) => (
  <div className="row">
    <div className="author col m9">
      <div className="author__avatar">
        <img src={user.image} alt="" className="responsive-img circle avatar--medium" />
      </div>
      <div className="author_details">
        <div className="author__info">
          <div className="author-name">
            <p>{capitalize(user.username)}</p>
          </div>
          <button type="button" className="btn-flat btn-flat--primary">
            Follow
          </button>
        </div>
        <div className="article__highlights">
          {new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
          <span className="p-r--10 p-l--10">.</span>
        </div>
      </div>
    </div>

    <div className="col m3">
      <div className="m-t--15">
        <button type="button" className="btn-flat btn-flat--primary">
          Edit Article
        </button>
      </div>
    </div>
  </div>
);

export default AuthorDetails;

AuthorDetails.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};
