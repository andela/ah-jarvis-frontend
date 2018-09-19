import React from 'react';
import PropTypes from 'prop-types';

import ROUTES from '../../utils/routes';
import capitalize from '../../utils/capitalize';

const FollowList = ({ details }) => (
  <div>
    {details.map(detail => (
      <a href={`${ROUTES.profile}/${detail.username}`} key={detail.username}>
        <div className="card follower hoverable">
          <div className="follower__avatar">
            <img
              src={detail.image}
              alt={detail.username}
              className="responsive-img small--avatar circle-img"
            />
          </div>
          <div className="follower__info">
            <h6>
              <strong>{capitalize(detail.username)}</strong>
            </h6>
            <p className="m-t--10">{detail.bio}</p>
          </div>
        </div>
      </a>
    ))}
  </div>
);

FollowList.propTypes = {
  details: PropTypes.array.isRequired,
};

export default FollowList;
