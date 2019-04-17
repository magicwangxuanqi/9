import React from "react";
import { Card, Input, Icon, Button } from "antd";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="admin-login">
        <section className="card">
          <Card bordered={false} style={{ width: 420 }}>
            <Card.Meta title="中介登陆" style={{ textAlign: "center" }} />
            <Input
              style={{ marginBottom: "20px", marginTop: "20px" }}
              placeholder="用户名"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Input.Password
              style={{ marginBottom: "20px" }}
              placeholder="登陆密码"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
            <Button type="primary" style={{ width: "100%" }}>
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
                <Link to="/admin/register">中介注册</Link>
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
