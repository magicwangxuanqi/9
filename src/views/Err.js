import React, { Component } from "react";
import { Button } from "antd";

import "./Err.scss";

class Err extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="error">
        <img src={require("../assets/404.png")} alt="" />
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
            history.push("/");
          }}
        >
          返回首页
        </Button>
      </div>
    );
  }
}

export default Err;
