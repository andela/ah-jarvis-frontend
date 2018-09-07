import { combineReducers } from "redux";
import signin from "./containers/Signin/reducer";

import getProfile from "./containers/Profile/Read/reducer";
import editProfile from "./containers/Profile/Update/reducer";

const rootReducer = combineReducers({
  getProfile,
  editProfile,
  signin
});

export default rootReducer;
