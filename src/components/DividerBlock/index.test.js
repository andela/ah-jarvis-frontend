import { shallow } from 'enzyme';
import React from 'react';
import DividerBlock from '.';

describe('<DividerBlock />', () => {
  it('renders  <DividerBlock /> components', () => {
    const snap = shallow(<DividerBlock />);
    expect(snap).toMatchSnapshot();
  });
});
