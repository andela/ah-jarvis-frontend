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

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/login" component={SocialAuth} />
        <Route exact path="/reset/password" component={ForgotPasssword} />
        <Route exact path="/verify/:token" component={ResetPasssword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
