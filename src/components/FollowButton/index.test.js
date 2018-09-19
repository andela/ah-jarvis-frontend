import { shallow } from 'enzyme';
import React from 'react';

import Follow from './index';

describe('Shallow Render FollowButton COMPONENT', () => {
  let wrapper;
  const user = {
    username: '',
  };
  const follow = () => {};
  beforeEach(() => {
    wrapper = shallow(<Follow user={user} follow={follow} classname="" />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('+++ contains button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
