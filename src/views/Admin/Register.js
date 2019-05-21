import React from "react";
import { Card, Input, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { admin_register } from "@/redux/action";
import moment from 'moment';

@connect(
  state => state.AdminReducer,
  { admin_register }
)
class Register extends React.Component {
  state = {
    username: "",
    password: "",
    repeatPassword: "",
    time: moment().format("YYYY-MM-DD HH:mm:ss")
  };
  // 输入框的回调
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div className="admin-register">
        <section className="card">
          <Card bordered={false} style={{ width: 420 }}>
            <Card.Meta title="经纪人注册" style={{ textAlign: "center" }} />
            <Input
              style={{ marginBottom: "20px", marginTop: "20px" }}
              placeholder="用户名"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={this.state.username}
              onChange={v => this.handleChange("username", v)}
            />
            <Input.Password
              style={{ marginBottom: "20px" }}
              placeholder="请输入密码"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={this.state.password}
              onChange={v => this.handleChange("password", v)}
            />
            <Input.Password
              style={{ marginBottom: "20px" }}
              placeholder="请再次输入密码"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={this.state.repeatPassword}
              onChange={v => this.handleChange("repeatPassword", v)}
            />
            {/* 错误提示 */}
            {this.props.msg ? (
              <p style={{ color: "#f55" }}>{this.props.msg}</p>
            ) : null}
            <Button
              style={{
                width: "100%",
                backgroundColor: "#62ab00",
                color: "#fff"
              }}
              onClick={() => {
                this.props.admin_register(this.state);
                setTimeout(() => {
                  this.props.msg === "注册成功"
                    ? this.props.history.push("/admin/login")
                    : this.setState({
                        username: "",
                        password: "",
                        repeatPassword: ""
                      });
                }, 300);
              }}
            >
              立即注册
            </Button>
            <aside
              className="footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 5px 0"
              }}
            >
              <span>
                <Icon type="user" />
                &nbsp;
                <Link to="/admin">已注册？马上去登陆</Link>
              </span>
              <span>
                <Icon type="rollback" />
                &nbsp;
                <Link to="/">回到首页</Link>
              </span>
            </aside>
          </Card>
        </section>
      </div>
    );
  }
}
export default Register;
