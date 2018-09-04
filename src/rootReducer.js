import { combineReducers } from 'redux';

const message = () => ({ message: 'This is a reducer' });

const rootReducer = combineReducers({ message });

export default rootReducer;
