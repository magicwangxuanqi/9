import {
  LOGINMODEL,
  REGISTERMODEL,
  ERRORMSG,
  REGISTER,
  LOGIN,
  LOGOUT
} from "./creator_name";
import axios from "axios";
// 登陆模态窗
export const login_model = loginFlag => ({
  type: LOGINMODEL,
  loginFlag
});
// 注册模态窗
export const register_model = registerFlag => ({
  type: REGISTERMODEL,
  registerFlag
});
// 错误提示
export const errorMsg = msg => ({
  type: ERRORMSG,
  msg
});
// 注册
export const register = ({ username, password, repeatPassword }) => {
  if (!username || !password) {
    return errorMsg("必须输入用户名和密码");
  }
  if (password !== repeatPassword) {
    return errorMsg("两次输入的密码不一致");
  }
  return dispatch => {
    axios.post("/user/register", { username, password }).then(res => {
      // 成功
      if (res.staus == 200 && res.data.code == 0) {
        dispatch({ type: REGISTER, data: { username } });
      } else {
        // 失败报错
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
};
// 登陆
export const login = ({ username, password }) => {
  if (!username || !password) {
    return errorMsg("用户名密码必须输入");
  }
  return dispatch => {
    axios.post("/user/login", { username, password }).then(res => {
      console.log(res.data);
      // 成功
      if (res.status == 200 && res.data.code == 0) {
        const { username } = res.data.userInfo;
        dispatch({ type: LOGIN, data: { username } });
        window.localStorage.setItem('username', username)
        // 关闭登陆模态窗
        dispatch(login_model(false));
      } else {
        // 失败报错
        dispatch(errorMsg(res.data.msg));
      }
    });
  };
};
// 退出
export const logout = () => ({ 
  type: LOGOUT
})
