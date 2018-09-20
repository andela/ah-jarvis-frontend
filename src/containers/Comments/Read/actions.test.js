import fetchMock from 'fetch-mock';

import { COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_FAILURE, COMMENTS_FETCH_REQUEST } from './constants';
import { commentsFailure, commentsFetch, commentsSuccess } from './actions';
import testData from '../../../utils/testData';


describe('comments actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action to read comment', () => {
    const expectedAction = {
      type: COMMENTS_FETCH_REQUEST,
    };
    expect(commentsFetch()).toEqual(expectedAction);
  });

  it('should create an action to dispatch errors on comment read failture', () => {
    const errors = testData.articleErrors;
    const expectedAction = {
      type: COMMENTS_FETCH_FAILURE,
      errors,
    };
    expect(commentsFailure(errors)).toEqual(expectedAction);
  });

  it('should create an action to dispatch read comment success response.', () => {
    const payload = testData.article;
    const expectedAction = {
      type: COMMENTS_FETCH_SUCCESS,
      payload,
    };
    expect(commentsSuccess(payload)).toEqual(expectedAction);
  });
});
