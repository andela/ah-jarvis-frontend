import { combineReducers } from 'redux';

import createArticle from './containers/Article/Create/reducer';
import fetchArticle from './containers/Article/Read/reducer';
import signin from './containers/Signin/reducer';

const rootReducer = combineReducers({ createArticle, fetchArticle, signin });

export default rootReducer;
