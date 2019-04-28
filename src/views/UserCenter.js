import React from "react";
import Navbar from "@/components/NavBar";
import { Row, Col } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";

import "./UserCenter.scss";

import Attention from "./UserCenter/Attention";
import ChangePwd from "./UserCenter/ChangePwd";
import Error from "./Err";

class UserCenter extends React.Component {
  render() {
    const { match, history } = this.props;
    return (
      <div className="usercenter">
        <Navbar />
        <Row style={{ width: "1170px", margin: "30px auto 0" }}>
          <Col span={4} className="usercenter-left">
            <Row>
              <img
                src="http://house.boolshop.com/upload/20190427/09e14af63dc0ae5a5a26f9165a4b602d.jpg"
                alt=""
              />
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              欢迎您，{window.sessionStorage.getItem("username")}
            </Row>
            <Row
              className="left-link"
              onClick={() => {
                history.push(`${match.path}attention`);
              }}
            >
              <a href="javascript:;">关注的房源</a>
            </Row>
            <Row
              className="left-link"
              onClick={() => {
                history.push(`${match.path}changepwd`);
              }}
            >
              <a href="javascript:;">修改密码</a>
            </Row>
          </Col>
          <Col span={18} className="usercenter-right">
            <Switch>
              <Route exact path={`${match.path}`} component={Attention} />
              <Redirect from={`${match.path}attention`} to={`${match.path}`} />
              <Route path={`${match.path}changepwd`} component={ChangePwd} />
              <Route component={Error} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}
export default UserCenter;
