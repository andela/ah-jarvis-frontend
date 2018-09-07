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
        <Route exact path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
    `),
    );
  });
});

// describe('rootReducer', () => {
//   it('should return intial state', () => {
//     expect(configStore().getState().message).toEqual({ message: 'This is a reducer' });
//   });
// });
