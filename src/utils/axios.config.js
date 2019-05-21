import axios from "axios";

axios.interceptors.request.use(request => {
  const token = window.sessionStorage.getItem("token");
  const admin_token = window.sessionStorage.getItem("admin_token");
  if (token) {
    // 设置token请求头
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  if (admin_token) {
    request.headers["Authorization"] = `Bearer ${admin_token}`;
  }
  return request;
});
axios.interceptors.response.use(
  response => {
    if (response.data.token) {
      window.sessionStorage.setItem("token", response.data.token);
    }
    if (response.data.admin_token) {
      window.sessionStorage.setItem("admin_token", response.data.admin_token);
    }
    return response;
  },
  err => {
    const error = err.response;
    if (err.status === 401) {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("admin_token");
    }
    return Promise.reject(error.msg);
  }
);