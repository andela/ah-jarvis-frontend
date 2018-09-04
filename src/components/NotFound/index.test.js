import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '.';

describe('<NotFound />', () => {
  it('renders three <NotFound /> components', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.contains(<h1>Page Not Found</h1>));
  });
});
