import * as actions from './actions';
import createArticleReducer from './reducer';

const initialState = {
  payload: {},
  publishing: false,
  success: false,
  failure: false,
  errors: null,
};

describe('Article Reducers', () => {
  it('should set publishing true when ARTICLE_REQUEST is dispatched', () => {
    const action = actions.articleFetch();

    const newState = createArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.publishing).toBe(true);
  });

  it('should set failure True when ARTICLE_FAILURE', () => {
    const errors = {
      errors: {
        error: ['Article not found'],
      },
    };
    const action = actions.articleFailure(errors);

    const newState = createArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when ARTICLE_SUCCESS', () => {
    const payload = {
      article: {
        title: 'test title',
        body: 'test body of the article',
        description: 'Dummy desc',
      },
    };
    const action = actions.articleSuccess(payload);

    const newState = createArticleReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.success).toBe(true);
  });
});
