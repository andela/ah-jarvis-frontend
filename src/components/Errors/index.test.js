import { shallow, mount, render } from 'enzyme';
import React from 'react';

import Errors from './index';

describe('Errors --- Shallow Render Errors COMPONENT', () => {
  let wrapper;
  const errors = {
    errors: {
      error: ['Incorrect credentials'],
    },
  };
  const failure = true;
  beforeEach(() => {
    wrapper = shallow(<Errors
      name="error"
      errors={errors}
      failure={failure}
    />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('+++ contains span', () => {
    expect(wrapper.find('span.red-text').length).toEqual(1);
  });
});
