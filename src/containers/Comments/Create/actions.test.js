import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { COMMENTS_POST_SUCCESS, COMMENTS_POST_FAILURE, COMMENTS_POST_REQUEST } from './constants';
import createComment, { commentFailure, commentFetch, commentSuccess } from './actions';
import getAction from '../../../utils/getActions';
import testData from '../../../utils/testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('comment actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action to create comment', () => {
    const expectedAction = {
      type: COMMENTS_POST_REQUEST,
    };
    expect(commentFetch()).toEqual(expectedAction);
  });

  it('should create an action to dispatch errors on comment create failture', () => {
    const errors = testData.articleErrors;
    const expectedAction = {
      type: COMMENTS_POST_FAILURE,
      errors,
    };
    expect(commentFailure(errors)).toEqual(expectedAction);
  });

  it('should create an action to dispatch comment success response.', () => {
    const payload = testData.article;
    const expectedAction = {
      type: COMMENTS_POST_SUCCESS,
      payload,
    };
    expect(commentSuccess(payload)).toEqual(expectedAction);
  });
});
