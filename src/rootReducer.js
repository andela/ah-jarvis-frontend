import { combineReducers } from 'redux';
import forgotPass from './containers/ForgotPassword/reducer';
import reset from './containers/ResetPassword/reducer';
import signin from './containers/Signin/reducer';

const message = () => ({ message: 'This is a reducer' });

const rootReducer = combineReducers({
  message, signin, forgotPass, reset,
});

export default rootReducer;
