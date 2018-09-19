import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_REQUEST,
  FOLLOWERS_REQUEST,
  FOLLOWERS_SUCCESS,
  FOLLOWERS_FAILURE,
  FOLLOWING_REQUEST,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE,
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

export const followersFailure = errors => ({
  type: FOLLOWERS_FAILURE,
  errors,
});

export const followersSuccess = payload => ({
  type: FOLLOWERS_SUCCESS,
  payload,
});

export const followersRequest = () => ({
  type: FOLLOWERS_REQUEST,
});

export const followingFailure = errors => ({
  type: FOLLOWING_FAILURE,
  errors,
});

export const followingSuccess = payload => ({
  type: FOLLOWING_SUCCESS,
  payload,
});

export const followingRequest = () => ({
  type: FOLLOWING_REQUEST,
});

export const myFollowings = username => (dispatch) => {
  dispatch(followingRequest());
  return api({
    method: 'GET',
    endpoint: `/profiles/${username}/following/`,
    authenticated: true,
  })
    .then(res => dispatch(followingSuccess(res)))
    .catch(err => dispatch(followingFailure(err)));
};

export const myFollowers = username => (dispatch) => {
  dispatch(followersRequest());
  return api({
    method: 'GET',
    endpoint: `/profiles/${username}/followers/`,
    authenticated: true,
  })
    .then(res => dispatch(followersSuccess(res)))
    .catch(err => dispatch(followersFailure(err)));
};

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
  api({
    method: 'GET',
    endpoint: `/profiles/${username}/`,
    authenticated: true,
  })
    .then((res) => {
      dispatch(fetchProfileSuccess(res));
    })
    .catch(err => dispatch(fetchProfileFailure(err)));
};

export default getUser;
