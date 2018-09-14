import React from 'react';
import PropTypes from 'prop-types';

const Reaction = ({
  id, src, count, onClick,
}) => (
  <div className="reactions__icon">
    <span>{count}</span>
    <a href="#!" onClick={onClick}>
      <img id={id} src={src} alt="Reaction" className="icon" />
    </a>
  </div>
);

export default Reaction;

Reaction.propTypes = {
  id: PropTypes.func.isRequired,
  src: PropTypes.bool.isRequired,
  count: PropTypes.string.isRequired,
};
