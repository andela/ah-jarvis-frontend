import { shallow } from 'enzyme';
import React from 'react';
import InlineLoader from '.';

describe('<InlineLoader />', () => {
  it('renders  <InlineLoader /> components', () => {
    const snap = shallow(<InlineLoader />);
    expect(snap).toMatchSnapshot();
  });
});
