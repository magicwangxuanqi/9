import { combineReducers } from "redux";
import UserReducer from "./user.reducer";
import HousingReducer from "./housing.reducer";
import GetHousingInfoReducer from "./getHousingInfo.reducer";
import SerialReducer from "./serial.reducer";

export default combineReducers({
  UserReducer,
  HousingReducer,
  GetHousingInfoReducer,
  SerialReducer
});
