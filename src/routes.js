import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import Home from './components/Home';
import Signin from './containers/Signin';
import Read from './containers/Profile/Read';
import Update from './containers/Profile/Update';
import NotFound from './components/NotFound';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/profile/:username" component={Read} />
        <Route exact path="/edit/profile/:username" component={Update} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
