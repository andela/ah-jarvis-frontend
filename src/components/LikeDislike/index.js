import React from 'react';
import PropTypes from 'prop-types';

const Reaction = ({
  id, src, count, onClick,
}) => (
  <div className="reactions__icon p-b--20">
    <span>{count}</span>
    <a href="#!" onClick={onClick} className="">
      <img id={id} src={src} alt="Reaction" className="waves-effect waves-teal" />
    </a>
  </div>
);

export default Reaction;

Reaction.propTypes = {
  id: PropTypes.any.isRequired,
  src: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
