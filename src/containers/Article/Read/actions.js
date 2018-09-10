import api from '../../../utils/api';
import { ARTICLE_FETCH_REQUEST, ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_FAILURE } from './constants';

export const articleFetch = () => ({
  type: ARTICLE_FETCH_REQUEST,
});

export const articleSuccess = payload => ({
  type: ARTICLE_FETCH_SUCCESS,
  payload,
});

export const articleFailure = errors => ({
  type: ARTICLE_FETCH_FAILURE,
  errors,
});

export const fetchArticle = id => (dispatch) => {
  dispatch(articleFetch());
  return api({
    method: 'GET',
    endpoint: `/articles/${id}`,
  })
    .then(res => dispatch(articleSuccess(res)))
    .catch(err => dispatch(articleFailure(err)));
};
