import { NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE } from './constants';
import api from '../../utils/api';

export const fetchNotificationRequest = () => ({
  type: NOTIFICATION_REQUEST,
});

export const fetchNotificationSuccess = data => ({
  type: NOTIFICATION_SUCCESS,
  notifications: data,
});

export const fetchNotificationFailure = error => ({
  type: NOTIFICATION_FAILURE,
  error,
});

export const read = id => () => {
  api({
    method: 'PUT',
    endpoint: `/notifications/${id}/read/`,
    data: {},
    authenticated: true,
  });
};

const fetchNotifications = () => (dispatch) => {
  dispatch(fetchNotificationRequest());
  api({
    method: 'GET',
    endpoint: '/notifications/',
    authenticated: true,
  }).then(res => dispatch(fetchNotificationSuccess(res)))
    .catch(err => dispatch(fetchNotificationFailure(err)));
};

export default fetchNotifications;
