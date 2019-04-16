import React, { Component } from "react";

import { connect } from "react-redux";
import { login_model, register_model } from "@/redux/action";
// Login组件
import Login from "./Login/index";
import Register from "./Register/index";

@connect(
  state => state.UserReducer,
  { login_model, register_model }
)
class ModelCard extends Component {
  render() {
    return (
      <div className="ModelCard">
        {/* 登陆模态窗 */}
        <Login {...this.props} />
        {/* 注册模态窗 */}
        <Register {...this.props} />
      </div>
    );
  }
}

export default ModelCard;
