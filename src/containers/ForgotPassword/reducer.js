// Responsible for updating the store without mutating it.
import { LINK_FAILURE, LINK_SUCCESS, LINK_REQUEST } from './constants';

const initialState = {
  payload: {},
  errors: null,
  success: false,
  failure: false,
  isFetching: false,
};

export default (state = initialState, action) => {
  const { errors, payload, type } = action;
  switch (type) {
    case LINK_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case LINK_FAILURE:
      return {
        ...state,
        errors,
        payload: {},
        failure: true,
        success: false,
        isFetching: false,
      };
    case LINK_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
