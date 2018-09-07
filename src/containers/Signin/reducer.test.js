import * as actions from './actions';
import loginReducer from './reducer';

describe('signin reducers', () => {
  it('should set isFetching True when SIGNIN_REQUEST', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
      isAuthenticated: false,
    };
    const action = actions.signingIn();

    const newState = loginReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.isFetching).toBe(true);
  });

  it('should set failure True when SIGNIN_FAILURE', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
      isAuthenticated: false,
    };
    const errors = {
      errors: {
        error: ['Incorrect credentials'],
      },
    };
    const action = actions.signinFailure(errors);

    const newState = loginReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when SIGNIN_SUCCESS', () => {
    const initialState = {
      payload: {},
      errors: null,
      success: false,
      failure: false,
      isFetching: false,
      isAuthenticated: false,
    };
    const payload = {
      user: {
        username: 'testuser',
        email: 'test@info.com',
      },
      access_token: 'sometokenstring',
    };
    const action = actions.signinSuccess(payload);

    const newState = loginReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.success).toBe(true);
  });
});
