import { combineReducers } from 'redux';

import getProfile from './containers/Profile/Read/reducer';
import editProfile from './containers/Profile/Update/reducer';

const rootReducer = combineReducers({ getProfile, editProfile });

export default rootReducer;
