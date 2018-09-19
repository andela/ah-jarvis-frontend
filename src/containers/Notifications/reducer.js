import { NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE } from './constants';

const initialState = {
  notifications: {},
  success: false,
  failure: false,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, notifications, errors } = action;
  switch (type) {
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications,
        errors: null,
        success: true,
        failure: false,
      };
    case NOTIFICATION_FAILURE:
      return {
        ...state,
        errors,
        notifications: '',
        failure: true,
        success: false,
      };
    default:
      return state;
  }
}
