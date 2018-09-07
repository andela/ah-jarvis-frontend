// Actions -> informs reducers the state that should be uodated in the store
import { LINK_SUCCESS, LINK_FAILURE, LINK_REQUEST } from './constants';
import api from '../../utils/api';

const linkSuccess = payload => ({
  type: LINK_SUCCESS,
  payload,
});

const linkFailure = errors => ({
  type: LINK_FAILURE,
  errors,
});

const forgotPassword = () => ({
  type: LINK_REQUEST,
});

const forgotPasswordAction = mail => (dispatch) => {
  dispatch(forgotPassword());
  api({
    method: 'POST',
    data: mail.email,
    endpoint: '/users/forgot_password/',
  })
    .then(res => dispatch(linkSuccess(res.message)))
    .catch(error => dispatch(linkFailure(error)));
};

export default forgotPasswordAction;
