import { combineReducers } from "redux";
import UserReducer from "./user.reducer";// 用户reducer
import HousingReducer from "./housing.reducer";// 房源信息reducer
import GetHousingInfoReducer from "./getHousingInfo.reducer";// 获取房源信息reducer
import SerialReducer from "./serial.reducer";// 根据房源id获取房源信息reducer
import RecommendReducer from "./recommend.reducer";// 推荐房源reducer
import GetEstrustInfoReducer from "./getEstrustInfo.reducer";
import EstrustReducer from "./estrust.reducer";// 委托方源reducer
export default combineReducers({
  UserReducer,
  HousingReducer,
  GetHousingInfoReducer,
  SerialReducer,
  RecommendReducer,
  GetEstrustInfoReducer,
  EstrustReducer
});
