import {
  ARTICLES_REQUEST,
  ARTICLES_SUCCESS,
  ARTICLES_FAILURE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_REQUEST,
} from './constants';
import api from '../../utils/api';
import getCurrentUser from '../../utils/auth';

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

export const deleteSuccess = slug => ({
  type: DELETE_ARTICLE_SUCCESS,
  slug,
});

export const deleteFailure = errors => ({
  type: DELETE_ARTICLE_FAILURE,
  errors,
});

export const searchSuccess = payload => ({
  type: SEARCH_SUCCESS,
  payload,
});

export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const fetchArticlesAction = (count, page, search) => (dispatch) => {
  dispatch(articlesFetch());
  return api({
    method: 'GET',
    endpoint: `/articles?${limit(count, page - 1)}&${search && `search=${search}`}`,
    authenticated: !!getCurrentUser(),
  })
    .then((res) => {
      if (search) {
        dispatch(searchSuccess(res));
      } else {
        dispatch(articlesSuccess(res));
      }
    })
    .catch(err => dispatch(articlesFailure(err)));
};

export const deleteArticle = slug => (dispatch) => {
  dispatch({ type: DELETE_ARTICLE_REQUEST });
  return api({
    method: 'DELETE',
    endpoint: `/articles/${slug}/`,
    authenticated: true,
  })
    .then(() => {
      dispatch(deleteSuccess(slug));
    })
    .catch(err => dispatch(deleteFailure(err)));
};

export default fetchArticlesAction;
