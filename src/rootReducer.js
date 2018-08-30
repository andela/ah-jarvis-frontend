import { combineReducers } from 'redux';

import message from './containers/ExampleContainer/reducer';

const rootReducer = combineReducers({ message });

export default rootReducer;
