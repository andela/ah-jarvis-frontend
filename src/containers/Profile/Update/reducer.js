import {
  EDIT_REQUEST, EDIT_SUCCESS, EDIT_FAILURE, CLEAR_STORE,
} from './constants';

const InitialState = {
  payload: '',
  success: false,
  failure: false,
  errors: null,
  isFetching: false,
};

export default function (state = InitialState, action) {
  const { type, payload, errors } = action;

  switch (type) {
    case CLEAR_STORE:
      return {
        ...state,
        payload: '',
        success: false,
        failure: false,
        errors: null,
        isFetching: false,
      };

    case EDIT_REQUEST:
      return { ...state, isFetching: true };
    case EDIT_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case EDIT_FAILURE:
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
