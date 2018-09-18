import { shallow } from 'enzyme';
import React from 'react';
import Scroll from '.';
import configStore from '../../store';

describe('<Scroll />', () => {
  it('renders  <Scroll /> components', () => {
    const snap = shallow(<Scroll store={configStore()} location="" />);
    expect(snap).toMatchSnapshot();
  });
});
