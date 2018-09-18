import { ARTICLES_REQUEST, ARTICLES_SUCCESS, ARTICLES_FAILURE } from './constants';
import api from '../../utils/api';

export const articlesFetch = () => ({
  type: ARTICLES_REQUEST,
});

export const articlesSuccess = payload => ({
  type: ARTICLES_SUCCESS,
  payload,
});

export const articlesFailure = errors => ({
  type: ARTICLES_FAILURE,
  errors,
});

export const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const fetchArticlesAction = (count, page, search) => (dispatch) => {
  dispatch(articlesFetch());
  return api({
    method: 'GET',
    endpoint: `/articles?${limit(count, page - 1)}&${search && `search=${search}`}`,
  })
    .then((res) => {
      dispatch(articlesSuccess(res));
    })
    .catch(err => dispatch(articlesFailure(err)));
};

export default fetchArticlesAction;
