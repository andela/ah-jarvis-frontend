import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { ARTICLE_SUCCESS, ARTICLE_FAILURE, ARTICLE_REQUEST } from './constants';
import createArticleAction, { articleFailure, articleFetch, articleSuccess } from './actions';
import getAction from '../../../utils/getActions';
import testData from '../../../utils/testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('article actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action to fetch article', () => {
    const expectedAction = {
      type: ARTICLE_REQUEST,
    };
    expect(articleFetch()).toEqual(expectedAction);
  });

  it('should create an action to dispatch errors on article fetch failture', () => {
    const errors = testData.articleErrors;
    const expectedAction = {
      type: ARTICLE_FAILURE,
      errors,
    };
    expect(articleFailure(errors)).toEqual(expectedAction);
  });

  it('should create an action to dispatch success response.', () => {
    const payload = testData.article;
    const expectedAction = {
      type: ARTICLE_SUCCESS,
      payload,
    };
    expect(articleSuccess(payload)).toEqual(expectedAction);
  });

  it('should mock thunk action', async () => {
    const store = mockStore();

    store.dispatch(createArticleAction());
    expect(await getAction(store, ARTICLE_REQUEST)).toEqual({
      type: ARTICLE_REQUEST,
    });
  });
});
