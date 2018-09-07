import { combineReducers } from 'redux';

import createArticle from './containers/Article/Create/reducer';
import fetchArticle from './containers/Article/Read/reducer';

const rootReducer = combineReducers({ createArticle, fetchArticle });

export default rootReducer;
