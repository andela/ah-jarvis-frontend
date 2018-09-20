import { shallow } from 'enzyme';
import React from 'react';
import SocialShare from '.';
import configStore from '../../store';

describe('<SocialShare />', () => {
  it('renders  <SocialShare /> components', () => {
    const snap = shallow(<SocialShare store={configStore()} location="" />);
    expect(snap).toMatchSnapshot();
  });
});
