import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST } from './constants';
import { signinFailure, signingIn, signinSuccess } from './actions';

describe('signin actions', () => {
  describe('signin request action creator', () => {
    it('should create an action to login user', () => {
      const expectedAction = {
        type: SIGNIN_REQUEST,
      };
      expect(signingIn()).toEqual(expectedAction);
    });
  });
  describe('signin failure action creator', () => {
    it('should create an action to dispatch errors to the user', () => {
      const errors = {
        errors: {
          error: ['Incorrect credentials'],
        },
      };
      const expectedAction = {
        type: SIGNIN_FAILURE,
        errors,
      };
      expect(signinFailure(errors)).toEqual(expectedAction);
    });
  });
  describe('signin success action creator', () => {
    it('should create an action to dispatch success response.', () => {
      const payload = {
        user: {
          username: 'testuser',
          email: 'test@info.com',
        },
        access_token: 'sometokenstring',
      };
      const expectedAction = {
        type: SIGNIN_SUCCESS,
        payload,
      };
      expect(signinSuccess(payload)).toEqual(expectedAction);
    });
  });
});
