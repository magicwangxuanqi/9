import {
  LOGINMODEL,
  REGISTERMODEL,
  ERRORMSG,
  REGISTER,
  LOGIN,
  LOGOUT,
  ENTRUST,
  GETESTRUSTINFO,
  RENTAL,
  GETHOUSINGINFO,
  SERIAL,
  RECOMMEND,
  UPDATERUSTINFO,
  DELETEHOUSINGINFO
} from "./creator_name";

import axios from "axios";
// 导入api
import {
  api_register,
  api_login,
  api_entrust,
  api_info,
  api_rental,
  api_message,
  api_serial,
  api_recommend,
  api_updateStatus,
  api_delserial
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
    axios
      .post(api_register, {
        username,
        password
      })
      .then(res => {
        // 成功
        if (res.staus === 200 && res.data.code === 0) {
          dispatch({
            type: REGISTER,
            data: {
              username
            }
          });
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
    axios
      .post(api_login, {
        username,
        password
      })
      .then(res => {
        console.log(res.data);
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          const { username } = res.data.userInfo;
          dispatch({
            type: LOGIN,
            data: {
              username
            }
          });
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
export const submit_commissioned = formData => {
  return dispatch => {
    axios
      .post(api_entrust, {
        ...formData
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: ENTRUST,
            formData
          });
        }
      })
      .catch(err => {
        // 失败
        throw err;
      });
  };
};

// 获取委托信息
export const getEstrustInfo = filter => {
  return async dispatch => {
    let res = "";
    try {
      if (!filter) {
        res = await axios.get(api_info);
      } else {
        res = await axios.get(api_info, {
          params: filter
        });
      }
      if (res.status === 200 && res.data.code === 0) {
        dispatch({
          type: GETESTRUSTINFO,
          data: res.data,
          loading: false
        });
      }
    } catch (err) {
      throw err;
    }
  };
};

// 修改委托房源信息的接单状态
export const update_estrust = (id, status) => {
  return dispatch => {
    axios
      .post(api_updateStatus, {
        id,
        status
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: UPDATERUSTINFO,
            id,
            status,
            loading: false
          });
        }
      });
  };
};

// 提交房源信息
export const submit_rental = formData => {
  return dispatch => {
    axios
      .post(api_rental, {
        ...formData
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: RENTAL,
            formData
          });
        }
      })
      .catch(err => {
        // 失败
        throw err;
      });
  };
};

// 获取房源信息
export const getHousingInfo = obj => {
  if (obj) {
    return dispatch => {
      axios
        .get(api_message, {
          params: {
            type: obj.type,
            ...obj.queryObj,
            ...obj.sectionObj
          }
        })
        .then(res => {
          // 成功
          if (res.status === 200 && res.data.code === 0) {
            dispatch({
              type: GETHOUSINGINFO,
              data: res.data,
              loading: false
            });
          }
        })
        .catch(err => {
          // 失败
          throw err;
        });
    };
  } else {
    return dispatch => {
      axios
        .get(api_message)
        .then(res => {
          // 成功
          if (res.status === 200 && res.data.code === 0) {
            dispatch({
              type: GETHOUSINGINFO,
              data: res.data,
              loading: false
            });
          }
        })
        .catch(err => {
          // 失败
          throw err;
        });
    };
  }
};

// 根据id获取房源信息
export const serial = id => {
  return dispatch => {
    axios
      .get(api_serial, {
        params: {
          id
        }
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: SERIAL,
            data: res.data
          });
        }
      })
      .catch(err => {
        // 失败
        throw err;
      });
  };
};
// 根据id删除房源
export const del_serial = id => {
  return dispatch => {
    axios
      .post(api_delserial, {
        id
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: DELETEHOUSINGINFO,
            id
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

// 推荐房源
export const recommend = id => {
  return dispatch => {
    axios
      .get(api_recommend, {
        params: {
          id
        }
      })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: RECOMMEND,
            data: res.data
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};
