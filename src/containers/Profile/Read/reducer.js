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
  UPDATE_PROFILE_NOTIFICATION_REQUEST,
  UPDATE_PROFILE_NOTIFICATION_SUCCESS,
  FETCH_USER_BOOKMARKS_SUCCESS,
  FETCH_USER_ARTICLES_SUCCESS,
} from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
  updating: false,
  articles: {},
  isFollowing: false,
  bookmarks: {},
  followers: [],
  following: [],
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
        isFollowing: true,
      };
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        errors,
        isFollowing: false,
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        isFollowing: false,
        payload,
      };
    case FOLLOWERS_REQUEST:
      return { ...state, isFetching: true };
    case FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case FOLLOWERS_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
      };
    case FOLLOWING_REQUEST:
      return { ...state, isFetching: true };
    case FOLLOWING_SUCCESS:
      return {
        ...state,
        following: payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case FOLLOWING_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
      };
    case UPDATE_PROFILE_NOTIFICATION_REQUEST:
      return {
        ...state,
        updating: true,
        success: false,
      };
    case FETCH_USER_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: payload,
      };

    case UPDATE_PROFILE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          profile: {
            ...state.payload.profile,
            get_notifications: payload.user.get_notifications,
          },
        },
        errors: null,
        updating: false,
        success: true,
        failure: false,
        isFetching: false,
      };
    case FETCH_USER_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload,
      };

    default:
      return state;
  }
}
