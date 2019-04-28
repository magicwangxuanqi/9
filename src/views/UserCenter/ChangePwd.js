import React from "react";
import { Input, Row, Col, Button, message } from "antd";
import "./ChangePwd.scss";
import axios from "axios";
import { api_changePwd } from "@/utils/api";

class Attention extends React.Component {
  state = {
    oldPassword: "",
    setNewPassword: "",
    confirmPassword: ""
  };
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  saveModification() {
    console.log(this.state);
    const { setNewPassword, confirmPassword } = this.state;
    if (setNewPassword === confirmPassword) {
      axios
        .post(api_changePwd, {
          ...this.state,
          username: window.sessionStorage.getItem("username")
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code === 0) {
            // 成功
            message.success(res.data.msg + "请重新登陆");
            // 退出登陆状态并跳转到登陆界面
            window.sessionStorage.removeItem("token");
            window.sessionStorage.removeItem("username");
            setTimeout(() => {
              // 返回首页
              this.props.history.push("/");
            }, 500);
          } else {
            // 失败
            message.error(res.data.msg);
            // 重新清空表单
            this.setState({
              ldPassword: "",
              setNewPassword: "",
              confirmPassword: ""
            });
          }
        })
        .catch(err => {
          throw err;
        });
    } else {
      message.error("两次输入的新密码不一致，请重新输入");
      this.setState({
        setNewPassword: "",
        confirmPassword: ""
      });
    }
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          marginBottom: "20px",
          padding: "100px",
          textAlign: "center",
          border: "1px solid #e6e5e5"
        }}
      >
        <Row className="chang-pwd-input">
          <Col span={8}>
            <b> 请输入旧密码： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input.Password
              placeholder="请输入旧密码"
              value={this.state.oldPassword}
              onChange={v => this.handleChange("oldPassword", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="chang-pwd-input">
          <Col span={8}>
            <b> 设置新密码： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input.Password
              placeholder="请输入新密码"
              value={this.state.setNewPassword}
              onChange={v => this.handleChange("setNewPassword", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="chang-pwd-input">
          <Col span={8}>
            <b> 确认新密码： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input.Password
              placeholder="请确认新密码"
              value={this.state.confirmPassword}
              onChange={v => this.handleChange("confirmPassword", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="chang-pwd-input">
          <Button
            type="primary"
            style={{
              width: "100%",
              marginTop: "10px"
            }}
            onClick={() => this.saveModification()}
          >
            保存修改{" "}
          </Button>{" "}
        </Row>{" "}
      </div>
    );
  }
}
export default Attention;
