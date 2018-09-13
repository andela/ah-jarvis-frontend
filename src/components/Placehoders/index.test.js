import { shallow, mount } from 'enzyme';
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
});


test('renders  <ArticleCard /> components', () => {
  const snap = mount(<ArticleCard />);
  expect(snap).toMatchSnapshot();
});

test('renders  <ArticleCardReverse /> components', () => {
  const snap = mount(<ArticleCardReverse />);
  expect(snap).toMatchSnapshot();
});

test('renders  <ArticleDetails /> components', () => {
  const snap = mount(<ArticleDetails />);
  expect(snap).toMatchSnapshot();
});

test('renders  <ArticleLoader /> components', () => {
  const snap = mount(<ArticleLoader />);
  expect(snap).toMatchSnapshot();
});
