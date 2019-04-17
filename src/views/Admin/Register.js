import React from "react";
import { Card, Input, Icon, Button } from "antd";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <div className="admin-register">
        <section className="card">
          <Card bordered={false} style={{ width: 420 }}>
            <Card.Meta title="中介注册" style={{ textAlign: "center" }} />
            <Input
              style={{ marginBottom: "20px", marginTop: "20px" }}
              placeholder="用户名"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Input.Password
              style={{ marginBottom: "20px" }}
              placeholder="请输入密码"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Input.Password
              style={{ marginBottom: "20px" }}
              placeholder="请再次输入密码"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Button
              style={{
                width: "100%",
                backgroundColor: "#62ab00",
                color: "#fff"
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
