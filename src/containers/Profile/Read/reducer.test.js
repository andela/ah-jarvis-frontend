import * as actions from './actions';
import readProfileReducer from './reducer';

describe('read profile reducers', () => {
  it('should set isFetching True when GET_REQUEST', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
    };
    const action = actions.fetchProfile();

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.isFetching).toBe(true);
  });

  it('should set failure True when GET_FAILURE', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
    };
    const errors = {
      errors: {
        error: ['Incorrect credentials'],
      },
    };
    const action = actions.fetchProfileFailure(errors);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when GET_SUCCESS', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
    };
    const payload = {
      user: {
        username: 'testuser2',
        bio: 'This is a bio',
        image:
          'https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg',
      },
    };
    const action = actions.fetchProfileSuccess(payload);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.success).toBe(true);
  });
});

describe('follow / unfollow reducers', () => {
  it('should set isFollowing True when FOLLOW_USER_REQUEST', () => {
    const initialState = {
      payload: {},
      errors: null,
      isFetching: false,
      isFollowing: false,
    };
    const action = actions.followActionRequest();

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.isFollowing).toBe(true);
  });

  it('should set isFollowing False when FOLLOW_USER_FAILURE', () => {
    const initialState = {
      payload: {},
      errors: null,
      isFetching: false,
      isFollowing: false,
    };
    const errors = {
      errors: {
        error: [],
      },
    };
    const action = actions.followActionFailure(errors);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.isFollowing).toBe(false);
  });

  it('should set isFollowing True when FOLLOW_USER_SUCCESS', () => {
    const initialState = {
      payload: {},
      errors: null,
      isFetching: false,
      isFollowing: false,
    };
    const payload = {};
    const action = actions.followActionSuccess(payload);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.isFollowing).toBe(false);
  });
});

describe('followers reducers', () => {
  it('should set isFetching True when FOLLOWERS_REQUEST', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
      followers: [],
    };
    const action = actions.followersRequest();

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.isFetching).toBe(true);
  });

  it('should set failure True when FOLLOWERS_FAILURE', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
      followers: [],
    };
    const errors = {
      errors: {
        error: [],
      },
    };
    const action = actions.followersFailure(errors);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when FOLLOWERS_SUCCESS', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
      followers: [],
    };
    const payload = {};
    const action = actions.followersSuccess(payload);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.success).toBe(true);
  });
});

describe('following reducers', () => {
  it('should set isFetching True when FOLLOWING_REQUEST', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
      following: [],
    };
    const action = actions.followingRequest();

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.isFetching).toBe(true);
  });

  it('should set failure True when FOLLOWING_FAILURE', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
      following: [],
    };
    const errors = {
      errors: {
        error: [],
      },
    };
    const action = actions.followingFailure(errors);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when FOLLOWING_SUCCESS', () => {
    const initialState = {
      payload: {},
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
      following: [],
    };
    const payload = {};
    const action = actions.followingSuccess(payload);

    const newState = readProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.success).toBe(true);
  });
});
