import reset from '../reducer';
import * as actions from '../actions';
import testData from '../../../utils/testData';

describe('reset reducer', () => {
  const { resetData, errors } = testData;
  it('returns initial state', () => {
    expect(reset({}, {})).toEqual({});
  });

  it('should store payload', () => {
    const action = actions.resetSuccess(resetData);
    const newState = reset({}, action);
    expect(newState.success).toEqual(true);
  });

  it('should return error for RESET_FAILURE', () => {
    const action = actions.resetFailure(errors);
    const newState = reset({}, action);
    expect(newState.errors.errors).toEqual('This is an error message');
  });

  it('should set isFetching to true for case RESET_REQUEST', () => {
    const action = actions.resetPassword();
    const newState = reset({}, action);
    expect(newState.isFetching).toEqual(true);
  });
});
