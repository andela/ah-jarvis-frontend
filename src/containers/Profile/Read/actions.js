import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from './constants';
import api from '../../../utils/api';

export const fetchProfile = () => ({
  type: GET_REQUEST,
});

export const fetchProfileSuccess = payload => ({
  type: GET_SUCCESS,
  payload,
});

export const fetchProfileFailure = errors => ({
  type: GET_FAILURE,
  errors,
});

const getUser = username => (dispatch) => {
  dispatch(fetchProfile());
  return api({
    method: 'GET',
    endpoint: `/profiles/${username}/`,
    authenticated: true,
  })
    .then(res => dispatch(fetchProfileSuccess(res)))
    .catch(err => dispatch(fetchProfileFailure(err)));
};

export default getUser;
