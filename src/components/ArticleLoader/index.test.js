import { shallow } from 'enzyme';
import React from 'react';
import ArticleLoader from '.';

describe('<ArticleLoader />', () => {
  it('renders  <ArticleLoader /> components', () => {
    const snap = shallow(<ArticleLoader />);
    expect(snap).toMatchSnapshot();
  });
});
