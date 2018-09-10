import { combineReducers } from 'redux';
import registerUser from './containers/SignUp/reducer';

const message = () => ({ message: 'This is a reducer' });

const rootReducer = combineReducers({ message, registerUser });

export default rootReducer;
