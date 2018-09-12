import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import ResetPassword from '../index';
import testData from '../../../utils/testData';

describe('<ResetPassword />', () => {
  const mockStore = configureStore();
  let wrapper;
  let store;
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore(testData.initialState);
    wrapper = shallow(
      <ResetPassword store={store} history={{}} reset={{ errors: {}, failure: true }} />,
    );
  });

  it('should render Reset Password component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
