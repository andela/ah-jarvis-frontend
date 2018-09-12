// Actions -> informs reducers the state that should be uodated in the store
import { RESET_SUCCESS, RESET_FAILURE, RESET_REQUEST } from './constants';
import api from '../../utils/api';

const resetSuccess = payload => ({
  type: RESET_SUCCESS,
  payload,
});

const resetFailure = errors => ({
  type: RESET_FAILURE,
  errors,
});

const resetPassword = () => ({
  type: RESET_REQUEST,
});

const resetPasswordAction = (data, history) => (dispatch) => {
  dispatch(resetPassword());
  api({
    method: 'PUT',
    data,
    endpoint: '/users/resetpassword/',
  })
    .then((res) => {
      dispatch(resetSuccess(res));
      localStorage.setItem('flash', res);
      history.push('/signin');
    })
    .catch((errors) => {
      dispatch(resetFailure(errors));
    });
};

export default resetPasswordAction;
