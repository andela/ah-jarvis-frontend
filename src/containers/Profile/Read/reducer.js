import {
  GET_REQUEST, GET_SUCCESS, GET_FAILURE,
  UPDATE_PROFILE_NOTIFICATION_SUCCESS,
  UPDATE_PROFILE_NOTIFICATION_REQUEST,
  FETCH_USER_ARTICLES_SUCCESS,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_REQUEST,
  FETCH_USER_BOOKMARKS_SUCCESS,
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
    case UPDATE_PROFILE_NOTIFICATION_REQUEST:
      return {
        ...state,
        updating: true,
        success: false,
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

    case FETCH_USER_BOOKMARKS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        bookmarks: payload,
      };
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        isFollowing: true,
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        isFollowing: false,
        payload,
      };
    default:
      return state;
  }
}
