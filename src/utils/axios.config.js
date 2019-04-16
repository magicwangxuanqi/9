import axios from "axios";

axios.interceptors.request.use(request => {
  const token = window.localStorage.getItem("token");
  if (token) {
    // 设置token请求头
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});
axios.interceptors.response.use(
  response => {
    if (response.data.token) {
      console.log(`token: ${response.data.token}`);
      window.localStorage.setItem("token", response.data.token);
    }
    return response;
  },
  err => {
    const error = err.response;
    if (err.status == 401) {
      window.localStorage.removeItem("token");
    }
    return Promise.reject(error.msg);
  }
);
