import React, { Component } from "react";
import { connect } from "react-redux";
import { login_model, register_model, logout } from "@/redux/action";

import "./index.scss";
import { Row, Col, Icon, Button } from "antd";
import { Link } from "react-router-dom";

@connect(
  state => state.UserReducer,
  { login_model, register_model, logout }
)
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      linkTag: [
        {
          text: "二手房",
          path: "/type/secondary"
        },
        {
          text: "新房",
          path: "/type/bridalChamber"
        },
        {
          text: "租房",
          path: "/type/rent"
        },
        {
          text: "发布房源",
          path: "/rental"
        },
        {
          text: "中介登陆",
          path: "/admin"
        }
      ]
    };
  }
  render() {
    return (
      <div className="Nav">
        {/* Nav-nav */}
        <Row className="Nav-nav">
          <Col span={12} className="Nav-left">
            <div className="Nav-left-logo">
              <Icon type="home" />
              <span>找房</span>
            </div>
          </Col>
          <Col span={8} className="Nav-middle">
            {/* 面包屑 */}
            <ul className="choice">
              {this.state.linkTag.map((item, index) => {
                return (
                  <Link key={index} to={item.path}>
                    <li>{item.text}</li>
                  </Link>
                );
              })}
            </ul>
          </Col>
          <Col span={4} className="Nav-right">
            <Icon type="user" />
            {this.props.isAuth ? (
              <div className="noAuth">
                <span style={{ padding: "5px 10px" }}>
                  <Link to="/userCenter">
                    {window.localStorage.getItem("username")}
                  </Link>
                </span>
                <Button
                  type="danger"
                  size="small"
                  onClick={() => {
                    window.localStorage.clear();
                    this.props.logout();
                  }}
                >
                  退出
                </Button>
              </div>
            ) : (
              <div className="isAuth">
                <Button
                  type="primary"
                  size="small"
                  className="login btn"
                  onClick={() => {
                    this.props.login_model(true);
                  }}
                >
                  登陆
                </Button>
                <Button
                  type="primary"
                  size="small"
                  className="register btn"
                  onClick={() => {
                    this.props.register_model(true);
                  }}
                >
                  注册
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Nav;
