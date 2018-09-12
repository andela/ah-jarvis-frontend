import { combineReducers } from 'redux';

import signup from './containers/SignUp/reducer';
import signin from './containers/Signin/reducer';
import fetchArticle from './containers/Article/Read/reducer';
import createArticle from './containers/Article/Create/reducer';

const rootReducer = combineReducers({
  createArticle,
  fetchArticle,
  signin,
  signup,
});

export default rootReducer;
