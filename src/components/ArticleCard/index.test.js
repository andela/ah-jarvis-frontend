import { shallow } from 'enzyme';
import React from 'react';
import ArticleCard from '.';

describe('<ArticleCard />', () => {
  it('renders  <ArticleCard /> components', () => {
    const snap = shallow(<ArticleCard article={{
      preview: 'cool', image: '', title: 'cool', slug: 'coll', likes_count: '', average_rating: '',
    }}
    />);
    expect(snap).toMatchSnapshot();
  });
});
