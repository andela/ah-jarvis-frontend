// Responsible for updating the store without mutating it.
import { SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNIN_REQUEST } from './constants';

const initialState = {
  payload: {},
  errors: null,
  success: false,
  failure: false,
  isFetching: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  const { errors, payload, type } = action;
  switch (type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
        isAuthenticated: true,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        errors,
        payload: {},
        failure: true,
        success: false,
        isFetching: false,
        isAuthenticated: false,
      };
    case SIGNIN_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
