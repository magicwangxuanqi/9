import React from "react";
import { Modal, Input } from "antd";
import { connect } from "react-redux";
import { login } from "@/redux/action";
@connect(
  null,
  { login }
)
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <Modal
        title={"账号密码登陆"}
        okText="登陆"
        cancelText="取消"
        visible={this.props.loginStatus}
        onCancel={() => this.props.login_model(false)}
        onOk={() => {
          this.props.login(this.state);
        }}
      >
        <div className="login-tradition">
          <Input.Group size="large" compact>
            <Input
              placeholder="请输入账号"
              onChange={v => this.handleChange("username", v)}
            />
            <Input.Password
              placeholder="请输入密码"
              onChange={v => this.handleChange("password", v)}
            />
          </Input.Group>
        </div>
        <br />
        <p>
          还没有账号?
          <a
            href="jaascript:;"
            onClick={() => {
              this.props.login_model(false);
              this.props.register_model(true);
            }}
          >
            &nbsp;去注册
          </a>
        </p>
      </Modal>
    );
  }
}
export default Login;
