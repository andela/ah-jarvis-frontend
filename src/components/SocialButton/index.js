import React from 'react';
import SocialLogin from 'react-social-login';

export const Button = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin} {...props} type="button">
    {children}
  </button>
);

export default SocialLogin(Button);
