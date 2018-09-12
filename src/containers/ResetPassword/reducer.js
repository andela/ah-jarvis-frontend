// Responsible for updating the store without mutating it.
import { RESET_FAILURE, RESET_SUCCESS, RESET_REQUEST } from './constants';

const initialState = {
  payload: {},
  errors: null,
  success: false,
  failure: false,
  isFetching: false,
  flash: '',
};

export default (state = initialState, action) => {
  const { errors, payload, type } = action;
  switch (type) {
    case RESET_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case RESET_FAILURE:
      return {
        ...state,
        errors,
        payload: {},
        failure: true,
        success: false,
        isFetching: false,
      };
    case RESET_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
