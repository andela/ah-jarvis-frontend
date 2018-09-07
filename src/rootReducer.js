import { combineReducers } from 'redux';
import forgotPasswordAction from './containers/ForgotPassword/reducer';
import resetPasswordAction from './containers/ResetPassword/reducer';

const rootReducer = combineReducers({ forgotPasswordAction, resetPasswordAction });

export default rootReducer;
