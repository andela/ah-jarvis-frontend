import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import Home from './components/Home';
import Signin from './containers/Signin';

import NotFound from './components/NotFound';
<<<<<<< HEAD
import Read from './containers/Article/Read';
import Create from './containers/Article/Create';
=======
import SocialAuth from './containers/Login';
>>>>>>> 76e951c0c05a9e9721e3a31a7193432ba0f65b2b

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
<<<<<<< HEAD
        <Route exact path="/articles/new" component={Create} />
        <Route path="/article/:id" component={Read} />
=======
        <Route exact path="/login" component={SocialAuth} />
>>>>>>> 76e951c0c05a9e9721e3a31a7193432ba0f65b2b

        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
