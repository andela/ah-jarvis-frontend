import React from 'react';
import ContentLoader from 'react-content-loader';


const ArticleLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={1.5}
    primaryColor="#dfdfdf"
    secondaryColor="#ffffff"
    {...props}
  >
    <circle cx="13.42635" cy="14.42635" r="10.42635" />
    <rect x="30" y="7.05" rx="4" ry="4" width="87" height="5.09" />
    <rect x="29" y="16.05" rx="4" ry="4" width="50" height="3.88" />
    <rect x="-1" y="106.05" rx="0" ry="0" width="262.21680000000003" height="9.2682" />
    <circle cx="204" cy="45.05" r="1" />
    <rect x="1" y="29.05" rx="0" ry="0" width="381.76" height="65.45" />
    <rect x="4" y="143.05" rx="0" ry="0" width="0" height="0" />
    <rect x="-6" y="121.88" rx="0" ry="0" width="384.52" height="4.219499999999999" />
    <rect x="1" y="133.81" rx="0" ry="0" width="36.75" height="4.2" />
    <circle cx="5.92" cy="145.97" r="4.2" />
    <circle cx="372.27" cy="141.97" r="4.2" />
  </ContentLoader>

);


export default ArticleLoader;
