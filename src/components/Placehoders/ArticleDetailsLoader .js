import React from 'react';

import ContentLoader from 'react-content-loader';

const ArticleDetailsLoader = props => (
  <ContentLoader
    height={475}
    width={400}
    speed={1.5}
    primaryColor="#dfdfdf"
    secondaryColor="#ffffff"
    {...props}
  >
    <circle cx="18.956999999999997" cy="18.956999999999997" r="18.956999999999997" />
    <rect x="48" y="8.05" rx="4" ry="4" width="87" height="5.53" />
    <rect x="49" y="21.05" rx="4" ry="4" width="50" height="3.43" />
    <rect x="2" y="65" rx="5" ry="5" width="400" height="400" />
    <rect x="3" y="52.05" rx="0" ry="0" width="146.3" height="5.7" />
    <circle cx="204" cy="45.05" r="1" />
  </ContentLoader>
);

export default ArticleDetailsLoader;
