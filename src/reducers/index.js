import { combineReducers } from "redux";
import { loginReducer } from "./auth";

export default combineReducers({
  login: loginReducer,
});
