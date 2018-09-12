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
