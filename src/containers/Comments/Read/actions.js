import api from '../../../utils/api';
import {
  COMMENTS_FETCH_REQUEST,
  COMMENTS_FETCH_SUCCESS,
  COMMENTS_FETCH_FAILURE,
} from './constants';

export const commentsFetch = () => ({
  type: COMMENTS_FETCH_REQUEST,
});

export const commentsSuccess = payload => ({
  type: COMMENTS_FETCH_SUCCESS,
  payload,
});

export const commentsFailure = errors => ({
  type: COMMENTS_FETCH_FAILURE,
  errors,
});

export const getComments = slug => (dispatch) => {
  api({
    endpoint: `/articles/${slug}/comments/`,
    method: 'GET',
    authenticated: true,
  })
    .then((res) => {
      dispatch(commentsSuccess(res));
    })
    .catch(err => dispatch(commentsFailure(err)));
};
