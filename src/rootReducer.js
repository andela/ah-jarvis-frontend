import { combineReducers } from 'redux';
import signup from './containers/SignUp/reducer';
import signin from './containers/Signin/reducer';

const message = () => ({ message: 'This is a reducer' });

const rootReducer = combineReducers({ message, signin, signup });

export default rootReducer;
