import React from 'react';
import { shallow } from 'enzyme';
import Read from '.';
import configStore from '../../../store';

describe('<Read />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <Read
        store={configStore()}
        article={{ isFetching: false, errors: { error: '' } }}
        match={{ params: {} }}
      />,
    );
    expect(wrapper.find('.m-t--30').length).toEqual(0);
  });
});
