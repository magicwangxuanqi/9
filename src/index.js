import React from "react";
import ReactDOM from "react-dom";
// normalize.css => css重置; bulma => css库; index修改一些默认属性
import "normalize.css";
// import "bulma";
import "./index.scss";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// logger导入
import { createLogger } from "redux-logger";
// thunk导入
import thunk from "redux-thunk";
// 导入reducer
import reducer from "./redux/reducers/index";
// 跟组件路由
import App from "./router/App";
// 导入axios
import "./utils/axios.config";
// store
// let store = createStore(reducer, applyMiddleware(thunk));
let store = createStore(reducer, applyMiddleware(createLogger(), thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

