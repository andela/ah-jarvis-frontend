import { ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE } from './constants';
import api from '../../../utils/api';

export const articleFetch = () => ({
  type: ARTICLE_REQUEST,
});

export const articleSuccess = payload => ({
  type: ARTICLE_SUCCESS,
  payload,
});

export const articleFailure = errors => ({
  type: ARTICLE_FAILURE,
  errors,
});

const createArticleAction = (data, history, update = false, slug) => (dispatch) => {
  dispatch(articleFetch());
  let endpoint = '/articles/';

  if (update) {
    endpoint = `/articles/${slug}/`;
  }
  return api({
    method: `${update ? 'PUT' : 'POST'}`,
    endpoint,
    data,
    authenticated: true,
  })
    .then((res) => {
      dispatch(articleSuccess(res));
      history.push(`/article/${res.article.slug}`);
    })
    .catch(err => dispatch(articleFailure(err)));
};

export default createArticleAction;
