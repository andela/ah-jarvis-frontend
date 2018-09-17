import * as actions from './actions';
import * as types from './constants';

describe('user get profile actions', () => {
  it('should create a request action to GET a user\'s profile', () => {
    const expectedAction = {
      type: types.GET_REQUEST,
    };
    expect(actions.fetchProfile()).toEqual(expectedAction);
  });
  it('should create an action to dispatch errors to the user', () => {
    const errors = {
      errors: {
        error: ['A user with that profile does not exist'],
      },
    };
    const expectedAction = {
      type: types.GET_FAILURE,
      errors,
    };
    expect(actions.fetchProfileFailure(errors)).toEqual(expectedAction);
  });
  it('should create an action to dispatch success response.', () => {
    const payload = {
      profile: {
        username: 'testuser',
        bio: 'This is a bio',
        image:
          'https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg',
      },
    };
    const expectedAction = {
      type: types.GET_SUCCESS,
      payload,
    };
    expect(actions.fetchProfileSuccess(payload)).toEqual(expectedAction);
  });
});

describe('user follow and unfollow actions', () => {
  it('should create a request action to Follow a user', () => {
    const expectedAction = {
      type: types.FOLLOW_USER_REQUEST,
    };
    expect(actions.followActionRequest()).toEqual(expectedAction);
  });
  it('should create an action to dispatch errors to the user', () => {
    const errors = {
      errors: {
        error: [],
      },
    };
    const expectedAction = {
      type: types.FOLLOW_USER_FAILURE,
      errors,
    };
    expect(actions.followActionFailure(errors)).toEqual(expectedAction);
  });
  it('should create an action to dispatch success response.', () => {
    const payload = {
      profile: {},
    };
    const expectedAction = {
      type: types.FOLLOW_USER_SUCCESS,
      payload,
    };
    expect(actions.followActionSuccess(payload)).toEqual(expectedAction);
  });
});
