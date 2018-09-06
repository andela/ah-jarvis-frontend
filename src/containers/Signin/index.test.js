import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedSignin, { Signin } from './index';

describe('<Signin />', () => {
  const initialState = {
    payload: {},
    errors: null,
    success: false,
    failure: false,
    isFetching: false,
    isAuthenticated: false,
  };
  const mockStore = configureStore();
  let wrapper;
  let store;
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedSignin store={store} />);
  });

  it('should render SMART login component', () => {
    expect(wrapper.length).toEqual(1);
  });

});
