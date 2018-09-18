import {
  ARTICLES_TRENDING_REQUEST,
  ARTICLES_TRENDING_SUCCESS,
  ARTICLES_TRENDING_FAILURE,
  TAGS_SUCCESS,
  TAGS_FAILURE,
} from './constants';
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

const fetchTagsSuccess = tags => ({ type: TAGS_SUCCESS, payload: tags });
const fetchTagsFailure = errors => ({ type: TAGS_FAILURE, payload: errors });

export const getAllTags = () => (dispatch) => {
  api({ endpoint: '/tags/', method: 'GET' })
    .then((data) => {
      dispatch(fetchTagsSuccess(data));
    })
    .catch((err) => {
      dispatch(fetchTagsFailure(err));
    });
};

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
