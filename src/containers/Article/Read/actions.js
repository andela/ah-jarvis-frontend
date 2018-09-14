import api from '../../../utils/api';
import {
  ARTICLE_FETCH_REQUEST,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_FAILURE,
  RATE_ARTICLE_REQUEST,
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS,
} from './constants';

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

export const rateSuccess = () => ({
  type: RATE_ARTICLE_REQUEST,
});

export const likeArticleSuccess = () => ({ type: LIKE_ARTICLE_SUCCESS });
export const dislikeArticleSuccess = () => ({ type: DISLIKE_ARTICLE_SUCCESS });

export const likeArticle = slug => (dispatch) => {
  api({
    endpoint: `/articles/${slug}/like/`,
    method: 'PUT',
    authenticated: true,
  })
    .then((data) => {
      dispatch(likeArticleSuccess());
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const dislikeArticle = slug => (dispatch) => {
  api({
    endpoint: `/articles/${slug}/dislike/`,
    method: 'PUT',
    authenticated: true,
  })
    .then((data) => {
      dispatch(dislikeArticleSuccess());
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchArticle = id => (dispatch) => {
  dispatch(articleFetch());
  return api({
    method: 'GET',
    endpoint: `/articles/${id}`,
  })
    .then(res => dispatch(articleSuccess(res)))
    .catch(err => dispatch(articleFailure(err)));
};
