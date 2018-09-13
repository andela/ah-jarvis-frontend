import * as actions from './actions';
import fetchArticleReducer from './reducer';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
};

describe('Article Reducers', () => {
  it('should set isFetching true when ARTICLE_FETCH_REQUEST is dispatched', () => {
    const action = actions.articleFetch();

    const newState = fetchArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.isFetching).toBe(true);
  });

  it('should set failure True when ARTICLE_FETCH_FAILURE', () => {
    const errors = {
      errors: {
        error: ['Article not found'],
      },
    };
    const action = actions.articleFailure(errors);

    const newState = fetchArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when ARTICLE_FETCH_SUCCESS', () => {
    const payload = {
      article: {
        title: 'test title',
        body: 'test body of the article',
        description: 'Dummy desc',
      },
    };
    const action = actions.articleSuccess(payload);

    const newState = fetchArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.success).toBe(true);
  });
});
