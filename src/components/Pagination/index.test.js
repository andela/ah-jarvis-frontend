import { shallow } from 'enzyme';
import React from 'react';
import Paginator from '.';

describe('<Paginator />', () => {
  it('renders  <Paginator /> components', () => {
    const snap = shallow(<Paginator
      activePage={1}
      total={4}
      onClick={() => null}
    />);
    expect(snap).toMatchSnapshot();
  });
});
