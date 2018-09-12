import * as actions from '../actions';
import testData from '../../../utils/testData';

describe('SignUp actions', () => {
  const { user, errors } = testData;
  it('should return action type and payload for signUpSuccess', () => {
    const action = actions.signUpSuccess(user);
    expect(Object.keys(action).length).toEqual(2);
    expect(action.payload.user.username).toEqual('user');
  });

  it('should return action type and payload for signUpFailure', () => {
    const action = actions.signUpFailure(errors);
    expect(Object.keys(action).length).toEqual(2);
    expect(action.payload.errors).toEqual('This is an error message');
  });

  it('should return action type for signingUp', () => {
    const action = actions.signingUp();
    expect(Object.keys(action).length).toEqual(1);
    expect(action.type).toEqual('SIGNING_UP');
  });
});
