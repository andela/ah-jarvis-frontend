import {
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_FAILURE,
  ARTICLE_FETCH_REQUEST,
  RATE_ARTICLE_REQUEST,
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS,
  BOOKMARK_ARTICLE_REQUEST,
  BOOKMARK_ARTICLE_SUCCESS,
  CLEAR_STORE,
} from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  isRating: false,
  isLiking: false,
  isDisliking: false,
  success: false,
  failure: false,
  errors: null,
  bookmarking: false,
};

export default function (state = initialState, action) {
  const { type, payload, errors } = action;
  switch (type) {
    case ARTICLE_FETCH_REQUEST:
      return { ...state, isFetching: true };
    case CLEAR_STORE:
      return {
        payload: {},
        isFetching: false,
        isRating: false,
        isLiking: false,
        isDisliking: false,
        success: false,
        failure: false,
        errors: null,
        bookmarking: false,
      };
    case ARTICLE_FETCH_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case ARTICLE_FETCH_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
        isRating: false,
      };
    case RATE_ARTICLE_REQUEST:
      return { ...state, isRating: true };
    case LIKE_ARTICLE_SUCCESS:
      return { ...state, isLiking: true };
    case DISLIKE_ARTICLE_SUCCESS:
      return { ...state, isDisliking: true };
    case BOOKMARK_ARTICLE_REQUEST:
      return { ...state, bookmarking: true };
    case BOOKMARK_ARTICLE_SUCCESS:
      return {
        ...state,
        bookmarking: false,
        payload: { ...state.payload, article: payload.favorite },
      };
    default:
      return state;
  }
}
