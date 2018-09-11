import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import Create from './containers/Article/Create';
import NotFound from './components/NotFound';
import Read from './containers/Article/Read';
import SocialAuth from './containers/Login';
import Signin from './containers/Signin';
import Home from './components/Home';
import configStore from './store';
import getCurrentUser from './utils/auth';

const store = configStore();
const user = getCurrentUser();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (user ? (
      <Component {...props} user={user} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article/:id" component={Read} />
        <PrivateRoute exact path="/articles/new" component={Create} />
        <Route exact path="/login" component={SocialAuth} />
        <Route exact path="/signin" component={Signin} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
