import React from 'react';

import ContentLoader from 'react-content-loader';

const ArticleCardPlaceHolder = props => (
  <ContentLoader
    height={100}
    width={400}
    speed={1.5}
    primaryColor="#dfdfdf"
    secondaryColor="#ffffff"
    {...props}
  >
    <rect x="165" y="13" rx="5" ry="5" width="220" height="4.6" />
    <rect x="166" y="29.05" rx="5" ry="5" width="220" height="4.5" />
    <rect x="165" y="44" rx="5" ry="5" width="220" height="4.6" />
    <rect x="165" y="64.05" rx="5" ry="5" width="220" height="4.58" />
    <rect x="-7" y="0.05" rx="0" ry="0" width="158.4" height="117.97360000000002" />
    <rect x="319" y="17.05" rx="0" ry="0" width="4" height="0" />
    <rect x="293" y="17.05" rx="0" ry="0" width="0" height="0" />
    <rect x="269" y="19.05" rx="0" ry="0" width="0" height="0" />
    <rect x="220" y="17.05" rx="0" ry="0" width="0" height="0" />
    <rect x="219" y="125.05" rx="0" ry="0" width="0" height="0" />
    <rect x="233" y="121.05" rx="0" ry="0" width="0" height="0" />
    <rect x="164" y="76.05" rx="0" ry="0" width="211" height="1" />
    <circle cx="175.6" cy="88.95" r="3.5" />
    <circle cx="198.84" cy="88.95" r="3.5" />
  </ContentLoader>
);

export default ArticleCardPlaceHolder;
