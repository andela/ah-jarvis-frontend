import { shallow } from 'enzyme';
import React from 'react';
import Login from '.';

describe('<Login />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the <Login /> component', () => {
    const wrapper = shallow(<Login history={{ push() {} }} />);
    expect(wrapper.contains(<h1>Authors' Haven</h1>));
  });
  it('Test handleSocialLogin is succesfull', () => {
    fetch.mockResponseOnce(JSON.stringify({ user: {} }));
    const wrapper = shallow(<Login history={{ push() {} }} />);
    wrapper.instance().handleSocialLogin(
      {
        _provider: 'google',
        _token: {
          accessToken: 'fake-token',
        },
      },
    );
  });

  it('Test handleSocialLoginFailure', () => {
    // SVGElement work around
    global.SVGElement = global.Element;
    fetch.mockResponseOnce(JSON.stringify({ user: {} }));
    const wrapper = shallow(<Login history={{ push() {} }} />);
    wrapper.instance().handleSocialLoginFailure();
  });
});
