import {
  COMMENTS_POST_SUCCESS,
  COMMENTS_POST_FAILURE,
  COMMENTS_POST_REQUEST,
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
};

export default function (state = initialState, action) {
  const { type, payload, errors } = action;
  switch (type) {
    case COMMENTS_POST_REQUEST:
      return { ...state, isFetching: true };
    case COMMENTS_POST_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case COMMENTS_POST_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
        isRating: false,
      };
    default:
      return state;
  }
}
