import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import SignUp from '../index';
import testData from '../../../utils/testData';

describe('<SignUp />', () => {
  const mockStore = configureStore();
  let wrapper;
  let store;
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(testData.initialState);
    wrapper = shallow(
      <SignUp store={store} history={{}} register={{ errors: {}, failure: true }} />,
    );
  });

  it('should render Sign Up component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
