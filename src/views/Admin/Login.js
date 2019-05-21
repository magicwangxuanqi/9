import React from "react";
import { Card, Input, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { admin_login } from "@/redux/action";

@connect(
  state => state.AdminReducer,
  { admin_login }
)
class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div className="admin-login">
        <section className="card">
          <Card bordered={false} style={{ width: 420 }}>
            <Card.Meta title="经纪人登陆" style={{ textAlign: "center" }} />
            <Input
              style={{ marginBottom: "20px", marginTop: "20px" }}
              placeholder="用户名"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={this.state.username}
              onChange={v => this.handleChange("username", v)}
            />
            <Input.Password
              style={{ marginBottom: "20px" }}
              placeholder="登陆密码"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={this.state.password}
              onChange={v => this.handleChange("password", v)}
            />
            <Input
              style={{ marginBottom: "20px" }}
              placeholder="验证码"
              prefix={
                <Icon
                  type="safety-certificate"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
            />
            {/* 错误提示 */}
            {this.props.msg ? (
              <p style={{ color: "#f55" }}>{this.props.msg}</p>
            ) : null}
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={() => {
                this.props.admin_login(this.state);
                setTimeout(() => {
                  this.props.msg === "登陆成功"
                    ? this.props.history.push("/admin/main")
                    : this.setState({
                        username: "",
                        password: ""
                      });
                }, 300);
              }}
            >
              立即登陆
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
                <Icon type="user-add" />
                &nbsp;
                <Link to="/admin/register">经纪人注册</Link>
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
export default Login;
