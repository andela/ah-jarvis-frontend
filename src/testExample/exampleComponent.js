import React from 'react';

const Hello = (
  { name = 'Unknown' }, // eslint-disable-line
) => (
  <p>
    Hello,
    {name}
!
  </p>
);

export default Hello;
