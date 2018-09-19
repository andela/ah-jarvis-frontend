import React from 'react';
import { shallow } from 'enzyme';
import CommentInput from '.';
import configStore from '../../../store';

describe('<CommentInput />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CommentInput
        store={configStore()}
        comment={{ isFetching: false, errors: { error: '' } }}
        match={{ params: {} }}
      />,
    );
    expect(wrapper.find('.container-fluid').length).toEqual(0);
  });
});
