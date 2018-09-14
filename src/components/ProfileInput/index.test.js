import { shallow } from 'enzyme';
import React from 'react';

import ProfileInput from './index';

describe('ProfileInput --- Shallow Render ProfileInput COMPONENT', () => {
  let wrapper;
  const onChange = () => {};
  beforeEach(() => {
    wrapper = shallow(
      <ProfileInput
        name="bio"
        type="text"
        value=""
        onChange={onChange}
        validation=""
        classValue="input-edit input-edit--small"
        holder="Edit your bio"
      />,
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('+++ contains span', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
