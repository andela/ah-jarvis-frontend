import { ARTICLES_TRENDING_REQUEST, ARTICLES_TRENDING_SUCCESS, ARTICLES_TRENDING_FAILURE } from './constants';
import api from '../../utils/api';

export const articlesFetch = () => ({
  type: ARTICLES_TRENDING_REQUEST,
});

export const articlesSuccess = payload => ({
  type: ARTICLES_TRENDING_SUCCESS,
  payload,
});

export const articlesFailure = errors => ({
  type: ARTICLES_TRENDING_FAILURE,
  errors,
});

export const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const fetchTrendingArticleAction = (count, page) => (dispatch) => {
  dispatch(articlesFetch());
  return api({
    method: 'GET',
    endpoint: `/articles?${limit(count, page - 1)}?rate__ratings=5`,
  })
    .then((res) => {
      dispatch(articlesSuccess(res));
    })
    .catch(err => dispatch(articlesFailure(err)));
};

export default fetchTrendingArticleAction;
