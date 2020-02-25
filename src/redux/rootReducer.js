import { combineReducers } from "redux";

import prosconsReducer from "./proscons/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  proscons: prosconsReducer,
  user: userReducer
});
