import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedRead from './index';

describe('<Read />', () => {
  const initialState = {
    payload: {},
    isFetching: false,
    success: false,
    failure: false,
    errors: null,
  };
  const mockStore = configureStore();
  let wrapper;
  let store;
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    wrapper = shallow(<ConnectedRead store={store} />);
  });

  it('renders Read component successfully', () => {
    expect(wrapper.length).toEqual(1);
  });
});
