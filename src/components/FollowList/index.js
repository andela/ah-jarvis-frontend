import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ROUTES from '../../utils/routes';
import capitalize from '../../utils/capitalize';

const FollowList = ({ details }) => (
  <div>
    {details.map(detail => (
      <div className="card follower hoverable" key={detail.username}>
        <div className="follower__avatar">
          <img
            src={detail.image}
            alt={detail.username}
            className="responsive-img small--avatar circle-img"
          />
        </div>
        <div className="follower__info">
          <h6>
            <strong>
              <Link to={`${ROUTES.profile}/${detail.username}`}>{capitalize(detail.username)}</Link>
            </strong>
          </h6>
          <p className="m-t--10">{detail.bio}</p>
        </div>
      </div>
    ))}
  </div>
);

FollowList.propTypes = {
  details: PropTypes.object.isRequired,
};

export default FollowList;
