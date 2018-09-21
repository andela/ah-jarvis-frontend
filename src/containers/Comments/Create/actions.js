import api from '../../../utils/api';
import {
  COMMENTS_POST_REQUEST,
  COMMENTS_POST_SUCCESS,
  COMMENTS_POST_FAILURE,
} from './constants';
import { getComments } from '../Read/actions';

export const commentFetch = () => ({
  type: COMMENTS_POST_REQUEST,
});

export const commentSuccess = payload => ({
  type: COMMENTS_POST_SUCCESS,
  payload,
});

export const commentFailure = errors => ({
  type: COMMENTS_POST_FAILURE,
  errors,
});

export const createComment = (data, slug) => (dispatch) => {
  api({
    endpoint: `/articles/${slug}/comments/`,
    method: 'POST',
    data,
    authenticated: true,
  })
    .then((res) => {
      dispatch(commentSuccess(res));
      dispatch(getComments(slug));
    })
    .catch(err => dispatch(commentFailure(err)));
};
