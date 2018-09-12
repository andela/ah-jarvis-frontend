import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import Create from './containers/Article/Create';
import NotFound from './components/NotFound';
import Read from './containers/Article/Read';
import SocialAuth from './containers/SocialAuth';
import Signin from './containers/Signin';
import Home from './components/Home';
import configStore from './store';
import getCurrentUser from './utils/auth';
import SignUp from './containers/SignUp';
import ROUTES from './utils/routes';

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
        <Route exact path={ROUTES.home} component={Home} />
        <Route path={ROUTES.getArticleUrl} component={Read} />
        <PrivateRoute exact path={ROUTES.createArticleUrl} component={Create} />
        <Route exact path={ROUTES.signinWithEmail} component={Signin} />
        <Route exact path={ROUTES.signup} component={SignUp} />
        <Route exact path={ROUTES.signin} component={SocialAuth} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
