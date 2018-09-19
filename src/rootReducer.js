import { combineReducers } from 'redux';

import forgotPass from './containers/ForgotPassword/reducer';
import reset from './containers/ResetPassword/reducer';
import signup from './containers/SignUp/reducer';
import signin from './containers/Signin/reducer';

import getProfile from './containers/Profile/Read/reducer';
import editProfile from './containers/Profile/Update/reducer';
import fetchArticle from './containers/Article/Read/reducer';
import articles from './containers/Home/reducer';
import createArticle from './containers/Article/Create/reducer';
import createComment from './containers/Comments/Create/reducer';
import getComments from './containers/Comments/Read/reducer';
import trending from './containers/Sidebar/reducer';


const rootReducer = combineReducers({
  getProfile,
  editProfile,
  createArticle,
  createComment,
  getComments,
  articles,
  trending,
  fetchArticle,
  signin,
  forgotPass,
  reset,
  signup,
});

export default rootReducer;
