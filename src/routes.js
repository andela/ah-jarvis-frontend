import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import ForgotPasssword from './containers/ForgotPassword';
import ResetPasssword from './containers/ResetPassword';
import NotFound from './components/NotFound';
import SocialAuth from './containers/Login';
import Home from './components/Home';
import Signin from './containers/Signin';
import SignUp from './containers/SignUp';
import ROUTES from './utils/routes';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/login" component={SocialAuth} />
        <Route exact path={ROUTES.resetPassword} component={ForgotPasssword} />
        <Route exact path={ROUTES.verify} component={ResetPasssword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
