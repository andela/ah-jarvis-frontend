import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_REQUEST,
} from './constants';
import api from '../../../utils/api';

export const fetchProfile = () => ({
  type: GET_REQUEST,
});

export const fetchProfileSuccess = payload => ({
  type: GET_SUCCESS,
  payload,
});

export const fetchProfileFailure = errors => ({
  type: GET_FAILURE,
  errors,
});

export const followActionFailure = errors => ({
  type: FOLLOW_USER_FAILURE,
  errors,
});

export const followActionSuccess = payload => ({
  type: FOLLOW_USER_SUCCESS,
  payload,
});

export const followActionRequest = () => ({
  type: FOLLOW_USER_REQUEST,
});

export const followAction = (username, method) => (dispatch) => {
  dispatch(followActionRequest());
  api({
    method,
    endpoint: `/profiles/${username}/follow/`,
    authenticated: true,
  })
    .then(res => dispatch(followActionSuccess(res)))
    .catch(error => dispatch(followActionFailure(error)));
};

const getUser = username => (dispatch) => {
  dispatch(fetchProfile());
  return api({
    method: 'GET',
    endpoint: `/profiles/${username}/`,
    authenticated: true,
  })
    .then(res => dispatch(fetchProfileSuccess(res)))
    .catch(err => dispatch(fetchProfileFailure(err)));
};

export default getUser;
