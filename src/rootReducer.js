import { combineReducers } from 'redux';

import forgotPass from './containers/ForgotPassword/reducer';
import reset from './containers/ResetPassword/reducer';
import signup from './containers/SignUp/reducer';
import signin from './containers/Signin/reducer';
import fetchArticle from './containers/Article/Read/reducer';
import articles from './containers/Home/reducer';
import createArticle from './containers/Article/Create/reducer';
import trending from './containers/Sidebar/reducer';


const rootReducer = combineReducers({
  createArticle,
  articles,
  trending,
  fetchArticle,
  signin,
  signup,
  forgotPass,
  reset,
});

export default rootReducer;
