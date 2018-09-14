import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '.';
import configStore from '../../store';

describe('<SideBar />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <SideBar
        store={configStore()}
        article={{ isFetching: false, errors: { error: '' } }}
        match={{ params: {} }}
      />,
    );
    expect(wrapper.find('.container-fluid').length).toEqual(0);
  });
});
