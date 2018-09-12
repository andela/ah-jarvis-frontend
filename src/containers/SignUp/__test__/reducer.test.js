import register from '../reducer';
import * as actions from '../actions';
import testData from '../../../utils/testData';

describe('SignUp reducer', () => {
  const { user, errors } = testData;
  it('returns initial state', () => {
    expect(register({}, {})).toEqual({});
  });

  it('should store user for case SIGNUP_SUCCESSFUL', () => {
    const action = actions.signUpSuccess(user);
    const newState = register({}, action);
    expect(Object.keys(newState).length).toEqual(2);
  });

  it('should store user for case SIGNUP_FAILURE', () => {
    const action = actions.signUpFailure(errors);
    const newState = register({}, action);
    expect(newState.error.errors).toEqual('This is an error message');
  });

  it('should set isFetching to true for case SIGNING_UP', () => {
    const action = actions.signingUp();
    const newState = register({}, action);
    expect(newState.isFetching).toEqual(true);
  });
});
