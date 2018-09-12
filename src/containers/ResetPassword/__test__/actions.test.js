import { RESET_SUCCESS, RESET_FAILURE, RESET_REQUEST } from '../constants';
import { resetFailure, resetPassword, resetSuccess } from '../actions';

describe('reset actions', () => {
  describe('reset request action creator', () => {
    it('should create an action to reset password', () => {
      const expectedAction = {
        type: RESET_REQUEST,
      };
      expect(resetPassword()).toEqual(expectedAction);
    });
  });
  describe('reset failure action creator', () => {
    it('should create an action to dispatch errors to the user', () => {
      const errors = {
        errors: {
          error: ['Password should have at least 8 characters'],
        },
      };
      const expectedAction = {
        type: RESET_FAILURE,
        errors,
      };
      expect(resetFailure(errors)).toEqual(expectedAction);
    });
  });
  describe('reset success action creator', () => {
    it('should create an action to dispatch success response.', () => {
      const payload = {
        reset_data: {
          token: 'token_sent_to_email',
          email: 'validemail@example.com',
          new_password: 'new_password',
        },
      };
      const expectedAction = {
        type: RESET_SUCCESS,
        payload,
      };
      expect(resetSuccess(payload)).toEqual(expectedAction);
    });
  });
});
