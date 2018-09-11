import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';
import InputField from '../../../components/InputField';

describe('<Form/>', () => {
  it('renders sign up form successfully', () => {
    const wrapper = shallow(<Form onClick={() => ''} register={{}} />);
    expect(wrapper.find('button.btn--block').length).toEqual(1);
  });

  it('should change user state', () => {
    const wrapper = shallow(<Form register={{ failure: false }} onClick={() => ''} />);
    const event = {
      target: { name: 'username', value: 'user' },
    };
    wrapper
      .find(InputField)
      .filter({ name: 'username' })
      .simulate('change', event);
    expect(wrapper.state('user').username).toEqual('user');
  });

  it('should prevent default when clicking button', () => {
    const wrapper = shallow(<Form register={{ failure: false }} onClick={() => {}} />);
    wrapper.find('#signup_button').simulate('click', { preventDefault() {} });
  });
});
