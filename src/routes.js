import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import Home from './components/Home';
import Signin from './containers/Signin';

import NotFound from './components/NotFound';
import Read from './containers/Article/Read';
import Create from './containers/Article/Create';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/articles/new" component={Create} />
        <Route path="/article/:id" component={Read} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
