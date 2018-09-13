import React from 'react';

import ContentLoader from 'react-content-loader';

const ArticleCardHolderReverse = props => (
  <ContentLoader
    height={100}
    width={400}
    speed={1.5}
    primaryColor="#dfdfdf"
    secondaryColor="#ffffff"
    {...props}
  >
    <rect x="6" y="15" rx="5" ry="5" width="220" height="4.6" />
    <rect x="6" y="30.05" rx="5" ry="5" width="220" height="4.5" />
    <rect x="6" y="44" rx="5" ry="5" width="220" height="4.6" />
    <rect x="5" y="60.05" rx="5" ry="5" width="220" height="4.58" />
    <rect x="236" y="-0.95" rx="0" ry="0" width="172.656" height="117.97" />
    <rect x="319" y="17.05" rx="0" ry="0" width="4" height="0" />
    <rect x="293" y="17.05" rx="0" ry="0" width="0" height="0" />
    <rect x="269" y="19.05" rx="0" ry="0" width="0" height="0" />
    <rect x="220" y="17.05" rx="0" ry="0" width="0" height="0" />
    <rect x="219" y="125.05" rx="0" ry="0" width="0" height="0" />
    <rect x="233" y="121.05" rx="0" ry="0" width="0" height="0" />
    <rect x="8" y="73.05" rx="0" ry="0" width="211" height="1" />
    <circle cx="24.6" cy="86.95" r="3.5" />
    <circle cx="43.84" cy="87.95" r="3.5" />

  </ContentLoader>
);
export default ArticleCardHolderReverse;
