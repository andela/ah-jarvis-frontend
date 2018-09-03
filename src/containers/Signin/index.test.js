import { shallow } from 'enzyme';
import React from 'react';
import Signin from '.';

describe('<Signin />', () => {
  it('renders three <Signin /> components', () => {
    const wrapper = shallow(<Signin />);
    expect(wrapper.contains(<h1>Sign in page</h1>));
  });
});
