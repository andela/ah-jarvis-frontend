import { shallow } from 'enzyme';
import React from 'react';

describe('<ForgotPassword />', () => {
  it('renders one <form /> components', () => {
    const wrapper = shallow(<form />);
    expect(wrapper.contains(<h6 className="center">Reset password</h6>));
  });
});
