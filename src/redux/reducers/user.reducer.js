import {
  LOGINMODEL,
  REGISTERMODEL,
  ERRORMSG,
  REGISTER,
  LOGIN,
  LOGOUT
} from "../creator_name";
const initState = {
  // 注册模态框显示状态
  registerStatus: false,
  // 登陆模态框显示状态
  loginStatus: false,
  // 是否登陆
  isAuth: window.localStorage.getItem("token") ? true : false,
  //报错信息
  msg: "",
  // 用户信息
  userInfo: {
    username: "" // 用户名
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    // 登陆模态弹窗
    case LOGINMODEL:
      return {
        ...state,
        loginStatus: action.loginFlag
      };
    // 注册模态弹窗
    case REGISTERMODEL:
      return {
        ...state,
        registerStatus: action.registerFlag
      };
    // 错误信息
    case ERRORMSG:
      return {
        ...state,
        msg: action.msg
      };
    // 注册
    case REGISTER:
      return {
        ...state,
        msg: "",
        userInfo: { ...action.data }
      };
    // 登陆
    case LOGIN:
      return {
        ...state,
        isAuth: window.localStorage.getItem("token") ? true : false,
        msg: "",
        userInfo: { ...action.data }
      };
    // 推出登陆
    case LOGOUT:
      return {
        ...state,
        isAuth: window.localStorage.getItem("token") ? true : false,
        msg: ""
      };
    default:
      return state;
  }
};
