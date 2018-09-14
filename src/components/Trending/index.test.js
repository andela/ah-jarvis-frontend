import { shallow } from 'enzyme';
import React from 'react';
import Trending from '.';

describe('<Trending />', () => {
  it('renders  <Trending /> components', () => {
    const snap = shallow(<Trending
      articles={[{ preview: 'Article', image: '', title: 'title' }]}
    />);
    expect(snap).toMatchSnapshot();
  });
});
