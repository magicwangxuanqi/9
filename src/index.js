import React from "react";
import ReactDOM from "react-dom";
// normalize.css => css重置; bulma => css库; index修改一些默认属性
import "normalize.css";
// import "bulma";
import "./index.scss";
// PWA
import * as serviceWorker from "./serviceWorker";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// logger导入
import { createLogger } from "redux-logger";
// thunk导入
import thunk from "redux-thunk";
// 导入reducer
import reducer from "./reducer/index";
// 跟组件路由
import App from "./router/App";

// store
let store = createStore(reducer, applyMiddleware(createLogger(), thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
