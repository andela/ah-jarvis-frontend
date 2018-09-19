import {
  ARTICLES_TRENDING_REQUEST,
  ARTICLES_TRENDING_SUCCESS,
  ARTICLES_TRENDING_FAILURE,
  TAGS_SUCCESS,
  TAGS_FAILURE,
} from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
  tags: null,
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
    case TAGS_SUCCESS:
      return {
        ...state,
        tags: payload,
      };
    case TAGS_FAILURE:
      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
}
