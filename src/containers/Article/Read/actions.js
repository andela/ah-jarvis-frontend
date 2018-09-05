import api from '../../../utils/api';
import { ARTICLE_FETCH_REQUEST, ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_FAILURE } from './constants';

const articleFetch = () => ({
  type: ARTICLE_FETCH_REQUEST,
});

const articleSuccess = payload => ({
  type: ARTICLE_FETCH_SUCCESS,
  payload,
});

const articleFailure = errors => ({
  type: ARTICLE_FETCH_FAILURE,
  errors,
});

const fetchArticle = id => (dispatch) => {
  dispatch(articleFetch());
  return api({
    method: 'GET',
    endpoint: `/articles/${id}`,
  })
    .then(res => dispatch(articleSuccess(res)))
    .catch(err => dispatch(articleFailure(err)));
};

export default fetchArticle;
