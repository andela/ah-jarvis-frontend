import { shallow } from 'enzyme';
import React from 'react';
import UserInfo from '.';

describe('<UserInfo />', () => {
  it('renders  <UserInfo /> components', () => {
    const snap = shallow(
      <UserInfo
        onPublish={() => ''}
        publishing
        save
        user={{
          user: {
            username: 'test user',
          },
        }}
      />,
    );
    expect(snap).toMatchSnapshot();
  });
});
