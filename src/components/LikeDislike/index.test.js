import { shallow } from 'enzyme';
import React from 'react';
import thumbsUp from '../../assets/icons/thumbsUp.svg';
import LikeDislike from '.';

describe('<LikeDislike />', () => {
  it('renders  <LikeDislike /> components', () => {
    const snap = shallow(<LikeDislike id="" src={thumbsUp} count="" onClick={() => {}} />);
    expect(snap).toMatchSnapshot();
  });
});
