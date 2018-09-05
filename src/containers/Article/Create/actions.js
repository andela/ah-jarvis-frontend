import { ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE } from './constants';
import api from '../../../utils/api';

const articleFetch = () => ({
  type: ARTICLE_REQUEST,
});

const articleSuccess = payload => ({
  type: ARTICLE_SUCCESS,
  payload,
});

const articleFailure = errors => ({
  type: ARTICLE_FAILURE,
  errors,
});

const createArticle = data => (dispatch) => {
  dispatch(articleFetch());
  return api({
    method: 'POST',
    endpoint: '/articles/',
    data,
  })
    .then(res => dispatch(articleSuccess(res)))
    .catch(err => dispatch(articleFailure(err)));
};

export default createArticle;
