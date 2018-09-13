import { shallow } from 'enzyme';
import React from 'react';
import ArticleDetailsLoader from './ArticleDetailsLoader ';

describe('<ArticleDetailsLoader />', () => {
  it('renders  <ArticleDetailsLoader /> components', () => {
    const snap = shallow(<ArticleDetailsLoader />);
    expect(snap).toMatchSnapshot();
  });
});
