import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import Home from './components/Home';
import Signin from './containers/Signin';
import NotFound from './components/NotFound';
import SocialAuth from './containers/Login';
import SignUp from './containers/SignUp';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/login" component={SocialAuth} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
