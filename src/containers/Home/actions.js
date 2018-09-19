import {
  ARTICLES_REQUEST, ARTICLES_SUCCESS, ARTICLES_FAILURE, SEARCH_SUCCESS, SEARCH_REQUEST,
} from './constants';
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


export default fetchArticlesAction;
