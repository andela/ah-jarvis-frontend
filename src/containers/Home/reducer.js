import {
  ARTICLES_REQUEST,
  ARTICLES_SUCCESS,
  ARTICLES_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_REQUEST,
} from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  isDeleting: false,
  success: false,
  failure: false,
  errors: null,
  deleted: false,
};

export default function (state = initialState, action) {
  const {
    type, payload, errors, slug,
  } = action;
  switch (type) {
    case ARTICLES_REQUEST:
      return { ...state, isFetching: true };

    case DELETE_ARTICLE_REQUEST:
      return { ...state, isDeleting: true };

    case ARTICLES_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };

    case ARTICLES_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
      };

    case DELETE_ARTICLE_SUCCESS: {
      const articles = state.payload.results.filter(article => article.slug !== slug);
      return {
        ...state,
        payload: { ...state.payload, results: articles },
        errors: null,
        success: true,
        failure: false,
        isDeleting: false,
      };
    }

    default:
      return state;
  }
}
