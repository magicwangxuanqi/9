import {
  ADMINERRORMSG,
  ADMINREGISTER,
  ADMINLOGIN,
  ADMINUPDATEMSG
} from "../creator_name";
const initState = {
  // 是否登陆
  isAuth: window.localStorage.getItem("admin_token") ? true : false,
  //报错信息
  msg: "",
  // 数据信息
  result: {
    username: "",
    branch: "",
    company: "",
    email: "",
    id_number: "",
    phone_number: "",
    real_name: "",
    sex: "男"
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    // 错误信息
    case ADMINERRORMSG:
      return {
        ...state,
        msg: action.msg
      };
    // 注册
    case ADMINREGISTER:
      return {
        ...state,
        msg: action.msg
      };
    // 登陆
    case ADMINLOGIN:
      return {
        ...state,
        isAuth: window.sessionStorage.getItem("admin_token") ? true : false,
        msg: action.msg
      };
    // 更新用户信息
    case ADMINUPDATEMSG:
      return {
        ...state,
        result: {
          ...action.data
        }
      };
    default:
      return state;
  }
};
