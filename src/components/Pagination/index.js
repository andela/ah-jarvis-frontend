import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

const Paginator = (props) => {
  const button = (number) => {
    const onClick = () => {
      props.onClick(number);
    };
    return (
      <li className={`${number === props.activePage ? 'active' : 'waves-effect'}`} key={number}>
        <a href="#!" onClick={onClick}>
          { number }
        </a>
      </li>
    );
  };

  const i = props.activePage > 4 ? props.activePage - 2 : 1;
  const j = i + 4 < props.total / config.ARTICLES_PER_PAGE ? i + 4 : i;

  const buttons = [];
  for (let index = i; index <= j; index += 1) {
    buttons.push(button(index));
  }
  const hasNext = i !== j;
  const hasPre = props.activePage > 1;

  const handlePrevious = () => {
    props.onClick(props.activePage - 1);
  };

  const handleNext = () => {
    props.onClick(props.activePage + 1);
  };

  return (
    <div className="row">
      <ul className="pagination center m-b--20">
        <li className={!hasPre ? 'disabled' : ''}>
          <a href="#!" onClick={handlePrevious}>
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {buttons}
        <li className={hasNext ? 'waves-effect' : 'disabled'}>
          <a href="#!" onClick={handleNext}>
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};


Paginator.propTypes = {
  onClick: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Paginator;
