import { ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_FAILURE, ARTICLE_FETCH_REQUEST } from './constants';

const initialState = {
  payload: {},
  isFatching: false,
  success: false,
  failure: false,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload, errors } = action;
  switch (type) {
    case ARTICLE_FETCH_REQUEST:
      return { ...state, isFatching: true };
    case ARTICLE_FETCH_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFatching: false,
      };
    case ARTICLE_FETCH_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFatching: false,
      };
    default:
      return state;
  }
}
