import { combineReducers } from "redux";
import UserReducer from "./user.reducer";// 用户reducer
import getUserInfoReducer from "./getUserInfo.reducer";// 获取用户信息
import HousingReducer from "./housing.reducer";// 房源信息reducer
import GetHousingInfoReducer from "./getHousingInfo.reducer";// 获取房源信息reducer
import SerialReducer from "./serial.reducer";// 根据房源id获取房源信息reducer
import RecommendReducer from "./recommend.reducer";// 推荐房源reducer
import GetEstrustInfoReducer from "./getEstrustInfo.reducer";
import EstrustReducer from "./estrust.reducer";// 委托方源reducer
import AdminReducer from "./admin.reducer";// admin的reducer
import getAdminInfoReducer from "./getAdminInfo.reducer";// admin的reducer
import getAttentionInfoReducer from "./getAttentionInfo.reducer";// 根据id获取房源的reducer
import attentionReducer from "./attention.reducer";// 根据id获取房源的reducer
import countReducer from "./count.reducer";// 获取关注人数的reducer

export default combineReducers({
  UserReducer,
  getUserInfoReducer,
  HousingReducer,
  GetHousingInfoReducer,
  SerialReducer,
  RecommendReducer,
  GetEstrustInfoReducer,
  EstrustReducer,
  AdminReducer,
  getAdminInfoReducer,
  getAttentionInfoReducer,
  attentionReducer,
  countReducer
});
