import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configStore from './store';
import ForgotPasssword from './containers/ForgotPassword';
import ResetPasssword from './containers/ResetPassword';
import NotFound from './components/NotFound';

const store = configStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/reset/password" component={ForgotPasssword} />
        <Route exact path="/verify/:token" component={ResetPasssword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
