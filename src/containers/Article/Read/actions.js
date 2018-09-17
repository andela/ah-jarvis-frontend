import api from '../../../utils/api';
import {
  ARTICLE_FETCH_REQUEST,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_FAILURE,
  RATE_ARTICLE_REQUEST,
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS,
  BOOKMARK_ARTICLE_SUCCESS,
  BOOKMARK_ARTICLE_REQUEST
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
export const bookmarkArticleSuccess = () => ({ type: BOOKMARK_ARTICLE_SUCCESS });
export const bookmarkArticleRequest = () => ({ type: BOOKMARK_ARTICLE_REQUEST });


export const likeArticle = slug => (dispatch) => {
  api({
    endpoint: `/articles/${slug}/like/`,
    method: 'PUT',
    authenticated: true,
  })
    .then((res) => {
      dispatch(likeArticleSuccess());
      dispatch(articleSuccess(res));
    })
    .catch(err => dispatch(articleFailure(err)));
};

export const bookmarkArticle = slug => (dispatch) => {
  dispatch(bookmarkArticleRequest());
  api({
    endpoint: `/articles/${slug}/favorite/`,
    method: 'POST',
    authenticated: true,
  })
    .then((res) => {
      dispatch(bookmarkArticleSuccess(res));
    })
    .catch(err => dispatch(articleFailure(err)));
};

export const dislikeArticle = slug => (dispatch) => {
  api({
    endpoint: `/articles/${slug}/dislike/`,
    method: 'PUT',
    authenticated: true,
  })
    .then((res) => {
      dispatch(dislikeArticleSuccess());
      dispatch(articleSuccess(res));
    })
    .catch(err => dispatch(articleFailure(err)));
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
