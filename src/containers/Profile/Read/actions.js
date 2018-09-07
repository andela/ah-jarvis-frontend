import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from './constants';
import api from '../../../utils/api';

const fetchProfile = () => ({
  type: GET_REQUEST,
});

const fetchProfileSuccess = payload => ({
  type: GET_SUCCESS,
  payload,
});

const fetchProfileFailure = errors => ({
  type: GET_FAILURE,
  errors,
});

const getUser = username => (dispatch) => {
  dispatch(fetchProfile());
  return api({
    method: 'GET',
    endpoint: `/profiles/${username}/`,
  })
    .then(res => dispatch(fetchProfileSuccess(res)))
    .catch(err => dispatch(fetchProfileFailure(err)));
};

export default getUser;
