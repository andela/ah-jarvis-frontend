 // Actions -> informs reducers the state that should be uodated in the store
import { SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNIN_REQUEST } from './constants';
import api from '../../utils/api';

const signinSuccess = payload => ({
  type: SIGNIN_SUCCESS,
  payload,
});

const signinFailure = errors => ({
  type: SIGNIN_FAILURE,
  errors,
});

const signingIn = () => ({
  type: SIGNIN_REQUEST,
});

const signinAction = (creds, history) => (dispatch) => {
  dispatch(signingIn());
  api({ endpoint: '/users/login/', method: 'POST', data: creds })
    .then((payload) => {
      localStorage.setItem('user', JSON.stringify(payload));
      dispatch(signinSuccess(payload.user));
      history.push('/');
    })
    .catch((err) => {
      dispatch(signinFailure(err));
    });
};

export default signinAction;
