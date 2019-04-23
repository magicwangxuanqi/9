import {
  LOGINMODEL,
  REGISTERMODEL,
  ERRORMSG,
  REGISTER,
  LOGIN,
  LOGOUT,
  ENTRUST,
  GETHOUSINGINFO,
  SERIAL,
  LIKE,
  RECOMMEND
} from "./creator_name";

import axios from "axios";
// 导入api
import {
  api_register,
  api_login,
  api_rental,
  api_message,
  api_serial,
  api_like,
  api_recommend
} from "../utils/api";

/** 用户相关action  */
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
    axios.post(api_register, { username, password }).then(res => {
      // 成功
      if (res.staus === 200 && res.data.code === 0) {
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
    axios.post(api_login, { username, password }).then(res => {
      console.log(res.data);
      // 成功
      if (res.status === 200 && res.data.code === 0) {
        const { username } = res.data.userInfo;
        dispatch({ type: LOGIN, data: { username } });
        window.localStorage.setItem("username", username);
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
});

// 提交委托
export const entrust = formData => {
  return dispatch => {
    axios
      .post(api_rental, { ...formData })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: ENTRUST, formData });
        }
      })
      .catch(err => {
        // 失败
        throw err;
      });
  };
};

// 获取房源信息
export const getHousingInfo = type => {
  return dispatch => {
    axios
      .get(api_message, { params: { type } })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: GETHOUSINGINFO, data: res.data });
        }
      })
      .catch(err => {
        // 失败
        throw err;
      });
  };
};

// 根据id获取房源信息
export const serial = id => {
  return dispatch => {
    axios
      .get(api_serial, { params: { id } })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: SERIAL, data: res.data });
        }
      })
      .catch(err => {
        // 失败
        throw err;
      });
  };
};

// 推荐房源
export const recommend = id => {
  return dispatch => {
    axios
      .get(api_recommend, { params: { id } })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: RECOMMEND, data: res.data });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

// 根据选择条件进行模糊搜索
export const like = keywords => {
  return dispatch => {
    axios
      .get(api_like, { params: keywords })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: LIKE, data: res.data });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};
