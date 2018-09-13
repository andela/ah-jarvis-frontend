import * as actions from './actions';
import updateProfileReducer from './reducer';

describe('update profile reducers', () => {
  it('should set isFetching True when EDIT_REQUEST', () => {
    const initialState = {
      payload: '',
      success: false,
      failure: false,
      errors: null,
      isFetching: false,
    };
    const action = actions.editProfileFetch();

    const newState = updateProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.isFetching).toBe(true);
  });

  it('should set failure True when EDIT_FAILURE', () => {
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
    const action = actions.editProfileFailure(errors);

    const newState = updateProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when EDIT_SUCCESS', () => {
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
    const action = actions.editProfileSuccess(payload);

    const newState = updateProfileReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.success).toBe(true);
  });
});
