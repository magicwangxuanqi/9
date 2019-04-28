import {
  LOGINMODEL,
  REGISTERMODEL,
  ERRORMSG,
  REGISTER,
  LOGIN,
  ENTRUST,
  GETESTRUSTINFO,
  RENTAL,
  GETHOUSINGINFO,
  SERIAL,
  RECOMMEND,
  UPDATERUSTINFO,
  DELETEHOUSINGINFO,
  ADMINERRORMSG,
  ADMINREGISTER,
  ADMINLOGIN,
  ADMINUPDATEMSG,
  ADMINGETADMININFO,
  ADMINDEL,
  ATTENTION,
  RMATTENTION,
  CONTENTATTENTION,
  ITEMATTENTION,
  COUNTATTENTION
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
  api_delserial,
  api_admin_register,
  api_admin_login,
  api_admin_updateMsg,
  api_admin_getAdminInfo,
  api_admin_del,
  api_attention,
  api_rm_attention,
  api_content_attention,
  api_item_attention,
  api_count_attention
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
          window.sessionStorage.setItem("username", username);
          // 关闭登陆模态窗
          dispatch(login_model(false));
        } else {
          // 失败报错
          dispatch(errorMsg(res.data.msg));
        }
      });
  };
};

// admin错误提示
export const adminErrorMsg = msg => ({
  type: ADMINERRORMSG,
  msg
});
// 管理员注册
export const admin_register = ({
  username,
  password,
  repeatPassword,
  time
}) => {
  if (!username || !password) {
    return adminErrorMsg("必须输入用户名和密码");
  }
  if (password !== repeatPassword) {
    return adminErrorMsg("两次输入的密码不一致");
  }
  return dispatch => {
    axios
      .post(api_admin_register, {
        username,
        password,
        time
      })
      .then(res => {
        // 成功
        if (res.staus === 200 && res.data.code === 0) {
          dispatch({
            type: ADMINREGISTER,
            data: {
              username
            },
            msg: res.data.msg
          });
        } else {
          // 失败报错
          dispatch(adminErrorMsg(res.data.msg));
        }
      });
  };
};
// 管理员登陆
export const admin_login = ({ username, password }) => {
  if (!username || !password) {
    return adminErrorMsg("用户名密码必须输入");
  }
  return dispatch => {
    axios
      .post(api_admin_login, {
        username,
        password
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          const { username, _id } = res.data.userInfo;
          dispatch({
            type: ADMINLOGIN,
            // data: {
            //   username,
            //   uid: _id
            // },
            msg: res.data.msg
          });
          window.sessionStorage.setItem("admin_username", username);
          window.sessionStorage.setItem("admin_uid", _id);
        } else {
          // 失败报错
          dispatch(adminErrorMsg(res.data.msg));
        }
      });
  };
};

// 获取管理员信息
export const admin_getAdminInfo = () => {
  return dispatch => {
    axios
      .get(api_admin_getAdminInfo)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: ADMINGETADMININFO,
            loading: false,
            data: res.data.result
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

// 修改管理员用户信息
export const admin_updateMsg = (uid, formData) => {
  return dispatch => {
    axios
      .post(api_admin_updateMsg, {
        uid,
        ...formData
      })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: ADMINUPDATEMSG,
            data: formData
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

// 删除admin用户信息
export const admin_del = id => {
  return dispatch => {
    axios
      .post(api_admin_del, {
        id
      })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: ADMINDEL,
            id
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

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
export const update_estrust = (id, status, name) => {
  return dispatch => {
    axios
      .post(api_updateStatus, {
        id,
        status,
        name
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: UPDATERUSTINFO,
            id,
            status,
            name,
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

// 根据id获取关注数量
export const count_attention = id => { 
  return dispatch => {
    axios
      .get(api_count_attention, { params: { id } })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: COUNTATTENTION, count: res.data.count });
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

// 根据用户获取用户所关注的房源信息
export const content_attention = username => {
  return dispatch => {
    axios
      .get(api_content_attention, { params: { username } })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: CONTENTATTENTION, data: res.data.result });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

// 根据用户和房源Id获取用户所关注的房源信息
export const item_attention = (username, id) => {
  return dispatch => {
    axios
      .get(api_item_attention, { params: { username, id } })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch({ type: ITEMATTENTION, data: res.data.result });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};

// 关注
export const attention = (data, username) => {
  return dispatch => {
    axios
      .post(api_attention, {
        ...data,
        username
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: ATTENTION,
            attentionStatus: true
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
};
// 取消关注
export const rm_attention = (username, id) => {
  return dispatch => {
    axios
      .post(api_rm_attention, {
        username,
        id
      })
      .then(res => {
        // 成功
        if (res.status === 200 && res.data.code === 0) {
          dispatch({
            type: RMATTENTION,
            attentionStatus: false
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
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
export const recommend = (id, type) => {
  return dispatch => {
    axios
      .get(api_recommend, {
        params: {
          id,
          type
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
