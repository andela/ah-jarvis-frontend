import { LINK_SUCCESS, LINK_FAILURE, LINK_REQUEST } from './constants';
import { linkFailure, forgotPassword, linkSuccess } from './actions';

describe('forgot actions', () => {
  describe('forgot request action creator', () => {
    it('should create an action to send link', () => {
      const expectedAction = {
        type: LINK_REQUEST,
      };
      expect(forgotPassword()).toEqual(expectedAction);
    });
  });
  describe('link failure action creator', () => {
    it('should create an action to dispatch errors to the user', () => {
      const errors = {
        errors: {
          error: ['User with this email doesn\'t exist'],
        },
      };
      const expectedAction = {
        type: LINK_FAILURE,
        errors,
      };
      expect(linkFailure(errors)).toEqual(expectedAction);
    });
  });
  describe('signin success action creator', () => {
    it('should create an action to dispatch success response.', () => {
      const payload = {
        email: 'tito@tito.com',
      };
      const expectedAction = {
        type: LINK_SUCCESS,
        payload,
      };
      expect(linkSuccess(payload)).toEqual(expectedAction);
    });
  });
});
