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

describe('user follow / unfollow actions', () => {
  it('should create a request action to FOLLOW/UNFOLLOW a user', () => {
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
    const payload = {};
    const expectedAction = {
      type: types.FOLLOW_USER_SUCCESS,
      payload,
    };
    expect(actions.followActionSuccess(payload)).toEqual(expectedAction);
  });
});

describe('followers actions', () => {
  it('should create a request action to list followers of a user', () => {
    const expectedAction = {
      type: types.FOLLOWERS_REQUEST,
    };
    expect(actions.followersRequest()).toEqual(expectedAction);
  });
  it('should create an action to dispatch errors to the user', () => {
    const errors = {
      errors: {
        error: [],
      },
    };
    const expectedAction = {
      type: types.FOLLOWERS_FAILURE,
      errors,
    };
    expect(actions.followersFailure(errors)).toEqual(expectedAction);
  });
  it('should create an action to dispatch success response.', () => {
    const payload = {};
    const expectedAction = {
      type: types.FOLLOWERS_SUCCESS,
      payload,
    };
    expect(actions.followersSuccess(payload)).toEqual(expectedAction);
  });
});

describe('followers actions', () => {
  it('should create a request action to list followings of a user', () => {
    const expectedAction = {
      type: types.FOLLOWING_REQUEST,
    };
    expect(actions.followingRequest()).toEqual(expectedAction);
  });
  it('should create an action to dispatch errors to the user', () => {
    const errors = {
      errors: {
        error: [],
      },
    };
    const expectedAction = {
      type: types.FOLLOWING_FAILURE,
      errors,
    };
    expect(actions.followingFailure(errors)).toEqual(expectedAction);
  });
  it('should create an action to dispatch success response.', () => {
    const payload = {};
    const expectedAction = {
      type: types.FOLLOWING_SUCCESS,
      payload,
    };
    expect(actions.followingSuccess(payload)).toEqual(expectedAction);
  });
});
