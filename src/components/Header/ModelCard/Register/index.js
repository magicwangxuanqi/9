import React from "react";
import { Modal, Input, Checkbox } from "antd";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { register } from "@/redux/action";
@connect(
  null,
  { register }
)
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      checked: true
    };
  }
  // 输入框的回调
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <Modal
        title="账号密码注册"
        okText="注册"
        cancelText="取消"
        visible={this.props.registerStatus}
        onCancel={() => {
          this.props.register_model(false);
        }}
        onOk={() => {
          if (this.state.checked) {
            this.props.register(this.state);
          } else {
            alert("请勾选协议内容选项");
          }
        }}
      >
        <Input.Group size="large" compact>
          <Input
            allowClear
            placeholder="请输入账号"
            onChange={v => this.handleChange("username", v)}
          />
          <Input.Password
            allowClear
            placeholder="请输入密码"
            onChange={v => this.handleChange("password", v)}
          />
          <Input.Password
            allowClear
            placeholder="请再次输入密码"
            onChange={v => this.handleChange("repeatPassword", v)}
          />
        </Input.Group>
        <br />
        {/* 错误提示 */}
        {this.props.msg ? (
          <p style={{ color: "#f55" }}>{this.props.msg}</p>
        ) : null}
        <p style={{ marginTop: "15px" }}>
          <Checkbox
            onChange={e => {
              // 协议验证
              this.setState({ checked: e.target.checked });
            }}
            checked={this.state.checked}
          >
            我已阅读并同意<Link to='/protocol'>《租房用户服务协议》</Link>
          </Checkbox>
        </p>
        <p>
          已有账号?
          <a
            href="jaascript:;"
            onClick={() => {
              this.props.login_model(true);
              this.props.register_model(false);
            }}
          >
            &nbsp;去登陆
          </a>
        </p>
      </Modal>
    );
  }
}
export default Register;
