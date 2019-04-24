import React, { Component } from "react";
import { Button } from "antd";

import "./404.scss";

class Err extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="admin-error">
        <img src={require("@/assets/404.png")} alt="" />
        <br />
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          返回前一页
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          type="primary"
          onClick={() => {
            history.push("/admin/main");
          }}
        >
          返回首页
        </Button>
      </div>
    );
  }
}

export default Err;
