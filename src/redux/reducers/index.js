import { combineReducers } from "redux";
import UserReducer from "./user.reducer";
import HousingReducer from "./housing.reducer";

export default combineReducers({
  UserReducer,
  HousingReducer
});
