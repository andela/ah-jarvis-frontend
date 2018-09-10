import { combineReducers } from 'redux';

import signin from './containers/Signin/reducer';
import fetchArticle from './containers/Article/Read/reducer';
import createArticle from './containers/Article/Create/reducer';

const rootReducer = combineReducers({ createArticle, fetchArticle, signin });

export default rootReducer;
