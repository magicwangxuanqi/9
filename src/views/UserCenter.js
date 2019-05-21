import React from "react";
import Navbar from "@/components/NavBar";
import { Row, Col, Empty } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";

import "./UserCenter.scss";

import Attention from "./UserCenter/Attention";
import HasEstrust from "./UserCenter/HasEstrust";
import ChangePwd from "./UserCenter/ChangePwd";
import Complete from "./UserCenter/Complete";
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
                src={
                  window.sessionStorage.getItem("img")
                    ? window.sessionStorage.getItem("img")
                    : require("@/assets/noImg.svg")
                }
                alt=""
              />
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              欢迎您，
              <i style={{ fontWeight: "bold" }}>
                {window.sessionStorage.getItem("username")}
              </i>
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
                history.push(`${match.path}has-estrust`);
              }}
            >
              <a href="javascript:;">已委托房源</a>
            </Row>
            <Row
              className="left-link"
              onClick={() => {
                history.push(`${match.path}complete`);
              }}
            >
              <a href="javascript:;">完善个人资料</a>
            </Row>
            <Row
              className="left-link"
              onClick={() => {
                history.push(`${match.path}change-pwd`);
              }}
            >
              <a href="javascript:;">修改密码</a>
            </Row>
          </Col>
          <Col span={18} className="usercenter-right">
            <Switch>
              <Route exact path={`${match.path}`} component={Attention} />
              <Redirect from={`${match.path}attention`} to={`${match.path}`} />
              <Route path={`${match.path}has-estrust`} component={HasEstrust} />
              <Route path={`${match.path}complete`} component={Complete} />
              <Route path={`${match.path}change-pwd`} component={ChangePwd} />
              <Route component={Error} />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}
export default UserCenter;
