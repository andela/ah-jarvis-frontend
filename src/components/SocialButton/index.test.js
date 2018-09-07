import { shallow } from 'enzyme';
import React from 'react';
import { Button } from '.';

describe('<SocialButton />', () => {
  it('renders the <SocialButton /> component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
