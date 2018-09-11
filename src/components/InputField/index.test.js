import { shallow } from 'enzyme';
import React from 'react';

import InputField from './index';

describe('InputField --- Shallow Render InputField COMPONENT', () => {
  let wrapper;
  const errors = null;
  const failure = false;
  const onChange = () => {};
  beforeEach(() => {
    wrapper = shallow(
      <InputField
        name="email"
        label="Enter Email"
        type="email"
        value=""
        onChange={onChange}
        failure={failure}
        errors={errors}
        validation=""
      />,
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('+++ contains span', () => {
    expect(wrapper.find('div.input-field').length).toEqual(1);
  });
});
