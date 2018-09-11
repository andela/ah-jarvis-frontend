import api from '../../utils/api';

export const signUpSuccess = payload => ({
  type: 'SIGNUP_SUCCESSFUL',
  payload,
});

export const signUpFailure = payload => ({
  type: 'SIGNUP_FAILURE',
  payload,
});

export const signingUp = () => ({ type: 'SIGNING_UP' });

export const registerUser = (user, history) => (dispatch) => {
  dispatch(signingUp());
  api({ endpoint: '/users/', method: 'POST', data: user })
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(signUpSuccess(data));
      localStorage.setItem(
        'success',
        'Sign Up is Successful! An activation link has been sent to your email',
      );
      history.push('/');
    })
    .catch((error) => {
      dispatch(signUpFailure(error));
    });
};
