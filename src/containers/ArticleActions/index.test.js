import { shallow } from 'enzyme';
import React from 'react';
import ArticleActions from '.';
import configStore from '../../store';

describe('<ArticleActions />', () => {
  it('renders  <ArticleActions /> components', () => {
    const snap = shallow(<ArticleActions store={configStore()} slug="" />);
    expect(snap).toMatchSnapshot();
  });
});
