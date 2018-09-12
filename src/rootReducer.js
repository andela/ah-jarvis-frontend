import { combineReducers } from 'redux';
import forgotPass from './containers/ForgotPassword/reducer';
import reset from './containers/ResetPassword/reducer';
import signup from './containers/SignUp/reducer';
import signin from './containers/Signin/reducer';

import getProfile from './containers/Profile/Read/reducer';
import editProfile from './containers/Profile/Update/reducer';

const rootReducer = combineReducers({
  getProfile,
  editProfile,
  signin,
  forgotPass,
  reset,
  signup,
});

export default rootReducer;
