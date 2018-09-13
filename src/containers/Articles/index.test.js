import React from 'react';
import { shallow } from 'enzyme';
import Articles from '.';
import configStore from '../../store';

describe('<Articles />', () => {
  it('renders without crushing', () => {
    const wrapper = shallow(
      <Articles
        store={configStore()}
        article={{ isFetching: false, errors: { error: '' } }}
        match={{ params: {} }}
      />,
    );
    expect(wrapper.find('.container-fluid').length).toEqual(0);
  });
});
