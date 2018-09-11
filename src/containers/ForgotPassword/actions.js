// Actions -> informs reducers the state that should be uodated in the store
import { LINK_SUCCESS, LINK_FAILURE, LINK_REQUEST } from './constants';
import api from '../../utils/api';

export const linkSuccess = payload => ({
  type: LINK_SUCCESS,
  payload,
});

export const linkFailure = errors => ({
  type: LINK_FAILURE,
  errors,
});

export const forgotPassword = () => ({
  type: LINK_REQUEST,
});

export const forgotPasswordAction = data => (dispatch) => {
  dispatch(forgotPassword());
  api({
    method: 'POST',
    data,
    endpoint: '/users/forgot_password/',
  })
    .then(res => dispatch(linkSuccess(res.message)))
    .catch(err => dispatch(linkFailure(err)));
};

export default forgotPasswordAction;
