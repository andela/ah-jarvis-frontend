import {
  EDIT_REQUEST, EDIT_SUCCESS, EDIT_FAILURE, CLEAR_STORE,
} from './constants';
import api from '../../../utils/api';

export const editProfileFetch = () => ({
  type: EDIT_REQUEST,
});

export const editProfileSuccess = payload => ({
  type: EDIT_SUCCESS,
  payload,
});

export const editProfileFailure = errors => ({
  type: EDIT_FAILURE,
  errors,
});

const updateUser = (data, history) => (dispatch) => {
  dispatch(editProfileFetch());
  return api({
    method: 'PUT',
    endpoint: '/user/',
    data,
    authenticated: true,
  })
    .then((res) => {
      dispatch(editProfileSuccess(res));
      dispatch({ type: CLEAR_STORE });
      history.push(`/profile/${res.user.username}`);
    })
    .catch(err => dispatch(editProfileFailure(err)));
};

export default updateUser;
