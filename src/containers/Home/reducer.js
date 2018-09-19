import {
  ARTICLES_REQUEST, ARTICLES_SUCCESS, ARTICLES_FAILURE, SEARCH_SUCCESS, SEARCH_REQUEST,
} from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
  isSearching: false,
};

export default function (state = initialState, action) {
  const {
    type, payload, errors,
  } = action;
  switch (type) {
    case ARTICLES_REQUEST:
      return { ...state, isFetching: true };
    case ARTICLES_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
        isSearching: false,
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

    case SEARCH_REQUEST:
      return { ...state, isSearching: true };
    case SEARCH_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
        isSearching: false,
      };
    default:
      return state;
  }
}
