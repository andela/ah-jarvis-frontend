import React from 'react';
import { shallow } from 'enzyme';
import InputField from './index';

describe('<InputField/>', () => {
  it('renders Input field successfully', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('div.input-field').length).toEqual(1);
  });
});
