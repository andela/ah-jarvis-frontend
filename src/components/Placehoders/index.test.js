import { shallow } from 'enzyme';
import React from 'react';
import ArticleDetailsLoader from './ArticleDetailsLoader ';
import ArticleCard from './ArticleCard';
import ArticleCardReverse from './ArticleCardReverse';
import ArticleDetails from './ArticleDetails';
import ArticleLoader from './ArticleLoader';

describe('<ArticleDetailsLoader />', () => {
  it('renders  <ArticleDetailsLoader /> components', () => {
    const snap = shallow(<ArticleDetailsLoader />);
    expect(snap).toMatchSnapshot();
  });

  it('renders  <ArticleCard /> components', () => {
    const snap = shallow(<ArticleCard />);
    expect(snap).toMatchSnapshot();
  });

  it('renders  <ArticleCardReverse /> components', () => {
    const snap = shallow(<ArticleCardReverse />);
    expect(snap).toMatchSnapshot();
  });

  it('renders  <ArticleDetails /> components', () => {
    const snap = shallow(<ArticleDetails />);
    expect(snap).toMatchSnapshot();
  });

  it('renders  <ArticleLoader /> components', () => {
    const snap = shallow(<ArticleLoader />);
    expect(snap).toMatchSnapshot();
  });
});
