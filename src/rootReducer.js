import { combineReducers } from 'redux';
import forgotPasswordAction from './containers/ForgotPassword/reducer';
import resetPasswordAction from './containers/ResetPassword/reducer';
import signin from './containers/Signin/reducer';

const message = () => ({ message: 'This is a reducer' });

const rootReducer = combineReducers({
  message, signin, forgotPasswordAction, resetPasswordAction,
});

export default rootReducer;
