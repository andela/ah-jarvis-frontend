import register from '../reducer';
import * as actions from '../actions';

describe('SignUp reducer', () => {
  it('returns initial state', () => {
    expect(register({}, {})).toEqual({});
  });

  it('should store user when passed SIGNUP_SUCCESSFUL', () => {
    const user = {
      user: {
        email: 'test@test.com',
        username: 'user',
        token: 'AfdhjIYEIBFHGiu3849',
      },
    };
    const action = actions.signUpSuccess(user);
    const newState = register({}, action);
    expect(Object.keys(newState).length).toEqual(1);
  });

  it('should store user when passed SIGNUP_FAILURE', () => {
    const errors = {
      errors: 'This is an error message',
    };
    const action = actions.signUpFailure(errors);
    const newState = register({}, action);
    expect(newState.errors.errors).toEqual('This is an error message');
  });
});
