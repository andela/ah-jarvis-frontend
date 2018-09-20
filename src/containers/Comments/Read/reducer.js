import {
  COMMENTS_FETCH_SUCCESS,
  COMMENTS_FETCH_FAILURE,
  COMMENTS_FETCH_REQUEST,
} from './constants';

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
    case COMMENTS_FETCH_REQUEST:
      return { ...state, isFetching: true };
    case COMMENTS_FETCH_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case COMMENTS_FETCH_FAILURE:
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
