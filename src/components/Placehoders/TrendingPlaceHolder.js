import React from 'react';
import ContentLoader from 'react-content-loader';

const TrendingPlaceHolder = props => (
  <ContentLoader
    height={60}
    width={250}
    speed={1.5}
    primaryColor="#dfdfdf"
    secondaryColor="#ffffff"
    {...props}
  >
    <rect x="4" y="3.2" rx="0" ry="0" width="97.3" height="57.339999999999996" />
    <rect x="107" y="5.2" rx="0" ry="0" width="176" height="18" />
    <rect x="106" y="33.2" rx="0" ry="0" width="175" height="7.9799999999999995" />
  </ContentLoader>
);


export default TrendingPlaceHolder;
