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
import Read from './containers/Profile/Read';
import Update from './containers/Profile/Update';
import ROUTES from './utils/routes';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={SocialAuth} />
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.signin} component={Signin} />
        <Route path={ROUTES.signup} component={SignUp} />
        <Route exact path={ROUTES.login} component={SocialAuth} />
        <Route exact path={ROUTES.resetPassword} component={ForgotPasssword} />
        <Route exact path={ROUTES.verify} component={ResetPasssword} />
        <Route exact path={ROUTES.getProfile} component={Read} />
        <Route exact path={ROUTES.updateProfile} component={Update} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
