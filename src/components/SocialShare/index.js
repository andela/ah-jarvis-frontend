import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

const SocialShare = ({ slug, title }) => (
  <React.Fragment>
    <div className="social__icon p-b--20">
      <TwitterShareButton
        url={`http://ah-jarvis-frontend.herokuapp.com/article/${slug}`}
        title={title}
        windowWidth={750}
        windowHeight={600}
        className="social--share"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
    <div className="social__icon p-b--20">
      <FacebookShareButton
        url={`http://ah-jarvis-frontend.herokuapp.com/article/${slug}`}
        title={title}
        windowWidth={750}
        windowHeight={600}
        className="social--share"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
    <div className="social__icon p-b--20">
      <EmailShareButton
        windowWidth={750}
        windowHeight={600}
        url={`http://ah-jarvis-frontend.herokuapp.com/article/${slug}`}
        title={title}
        className="social--share"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  </React.Fragment>
);

export default SocialShare;

SocialShare.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
