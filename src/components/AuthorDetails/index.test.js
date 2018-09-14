import { shallow } from 'enzyme';
import React from 'react';
import AuthorDetails from '.';

describe('<AuthorDetails />', () => {
  it('renders  <AuthorDetails /> components', () => {
    const snap = shallow(<AuthorDetails user={{ username: 'test user' }} date="" small />);
    expect(snap).toMatchSnapshot();
  });

  it('renders  <AuthorDetails /> components  without small', () => {
    const snap = shallow(<AuthorDetails user={{ username: 'test user' }} date="" />);
    expect(snap).toMatchSnapshot();
  });
});
