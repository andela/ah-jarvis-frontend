import { shallow } from 'enzyme';
import React from 'react';
import Routes from './routes';
// import rootReducer from './rootReducer';
import configStore from './store';

describe('<Routes />', () => {
  it('renders three <Routes /> components', () => {
    const wrapper = shallow(<Routes />);
    expect(
      wrapper.contains(`
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles/new" component={Create} />
            <Route path="/article/:id" component={Read} />
            <Route exact path="/login" component={SocialAuth} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    `),
    );
  });
});
