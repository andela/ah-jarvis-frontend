import { shallow } from 'enzyme';
import React from 'react';
import Article from '.';

describe('<Article />', () => {
  it('renders  <Article /> components', () => {
    const snap = shallow(<Article author={{ username: 'test user' }} date="" image="" slug="data" preview="data" readtime={2} />);
    expect(snap).toMatchSnapshot();
  });
});
