import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
} from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
  isFollowing: false,
};

export default function (state = initialState, action) {
  const { type, payload, errors } = action;
  switch (type) {
    case GET_REQUEST:
      return { ...state, isFetching: true };
    case GET_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case GET_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
      };
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        isFollowing: true,
        payload,
      };
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        isFollowing: false,
        errors,
      };
    default:
      return state;
  }
}
