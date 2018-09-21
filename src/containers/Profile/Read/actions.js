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
  UPDATE_PROFILE_NOTIFICATION_SUCCESS,
  UPDATE_PROFILE_NOTIFICATION_REQUEST,
  FETCH_USER_BOOKMARKS_REQUEST,
  FETCH_USER_BOOKMARKS_SUCCESS,
  FETCH_USER_BOOKMARKS_FAILURE,
  FETCH_USER_ARTICLES_REQUEST,
  FETCH_USER_ARTICLES_SUCCESS,
  FETCH_USER_ARTICLES_FAILURE,
} from './constants';
import api from '../../../utils/api';
import { limit } from '../../Home/actions';

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

export const updateProfileNotification = () => ({
  type: UPDATE_PROFILE_NOTIFICATION_REQUEST,
});


export const updateProfileSuccess = payload => ({
  type: UPDATE_PROFILE_NOTIFICATION_SUCCESS,
  payload,
});

export const updateNotification = notification => (dispatch) => {
  dispatch(updateProfileNotification());
  api({
    method: 'PUT',
    endpoint: '/user/',
    data: {
      user: {
        get_notifications: notification,
      },
    },
    authenticated: true,
  }).then(res => dispatch(updateProfileSuccess(res)))
    .catch(err => dispatch(fetchProfileFailure(err)));
};

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

export const fetchUserBookMarks = () => ({
  type: FETCH_USER_BOOKMARKS_REQUEST,
});

export const fetchUserBookmarksSuccess = payload => ({
  type: FETCH_USER_BOOKMARKS_SUCCESS,
  payload,
});

export const fetchUserBookMarksFailure = errors => ({
  type: FETCH_USER_BOOKMARKS_FAILURE,
  errors,
});

export const getBookMarks = username => (dispatch) => {
  dispatch(fetchUserBookMarks());
  api({
    method: 'GET',
    endpoint: `/articles?users_favorites__user__username=${username}&${limit(10)}`,
  }).then((res) => {
    dispatch(fetchUserBookmarksSuccess(res));
  }).catch(err => dispatch(fetchUserBookMarksFailure(err)));
};

export const fetchUserArticles = () => ({
  type: FETCH_USER_ARTICLES_REQUEST,
});

export const fetchUserArticlesSuccess = payload => ({
  type: FETCH_USER_ARTICLES_SUCCESS,
  payload,
});

export const fetchUserArticlesFailure = errors => ({
  type: FETCH_USER_ARTICLES_FAILURE,
  errors,
});

export const getUserArticles = username => (dispatch) => {
  dispatch(fetchUserArticles());
  api({
    method: 'GET',
    endpoint: `/articles?author__user__username=${username}&${limit(10)}`,
  }).then((res) => {
    dispatch(fetchUserArticlesSuccess(res));
  }).catch(err => dispatch(fetchUserArticlesFailure(err)));
};

export default getUser;
