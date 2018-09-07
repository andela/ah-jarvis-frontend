import { combineReducers } from 'redux';
import signin from './containers/Signin/reducer';

const message = () => ({ message: 'This is a reducer' });

const rootReducer = combineReducers({ message, signin });

export default rootReducer;
