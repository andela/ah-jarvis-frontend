import { ARTICLES_TRENDING_REQUEST, ARTICLES_TRENDING_SUCCESS, ARTICLES_TRENDING_FAILURE } from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload, errors } = action;
  switch (type) {
    case ARTICLES_TRENDING_REQUEST:
      return { ...state, isFetching: true };
    case ARTICLES_TRENDING_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case ARTICLES_TRENDING_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
      };
    default:
      return state;
  }
}
