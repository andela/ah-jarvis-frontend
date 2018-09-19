import React from 'react';
import { shallow } from 'enzyme';
import CommentBlock from '.';
import configStore from '../../../store';

describe('<CommentBlock />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CommentBlock
        store={configStore()}
        comment={{ isFetching: false, errors: { error: '' } }}
        match={{ params: {} }}
      />,
    );
    expect(wrapper.find('.container-fluid').length).toEqual(0);
  });
});
