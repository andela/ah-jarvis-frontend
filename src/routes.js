import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Read from './containers/Article/Read';
import Create from './containers/Article/Create';
import SocialAuth from './containers/Login';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/new" component={Create} />
        <Route path="/article/:id" component={Read} />
        <Route exact path="/login" component={SocialAuth} />


        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
