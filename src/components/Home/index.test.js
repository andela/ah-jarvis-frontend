import { shallow } from 'enzyme';
import React from 'react';
import Home from '.';

describe('<Home />', () => {
  it('renders three <Home /> components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<h1>Home Page</h1>));
  });
});
