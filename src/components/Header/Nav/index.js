import React, { Component } from "react";
import { connect } from "react-redux";
import { login, register } from "../../../action/index";

import "./index.scss";
import { Row, Col, Icon, Button } from "antd";
import { Link } from "react-router-dom";

class Nav extends Component {
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
            <Link to="/city">
              <Button type="primary" size="small">
                <Icon type="environment" />
                哈尔滨
              </Button>
            </Link>
          </Col>
          <Col span={8} className="Nav-middle">
            {/* 面包屑 */}
            <ul className="choice">
              <Link to="/city">
                <li>二手房</li>
              </Link>
              <Link to="/city">
                <li>新房</li>
              </Link>
              <Link to="/city">
                <li>租房</li>
              </Link>
              <Link to="/city">
                <li>海外</li>
              </Link>
              <Link to="/city">
                <li>小区</li>
              </Link>
              <Link to="/city">
                <li>估价</li>
              </Link>
            </ul>
          </Col>
          <Col span={4} className="Nav-right">
            <Icon type="user" />
            <Button
              type="primary"
              size="small"
              className="login btn"
              onClick={() => {
                this.props.dispatch(login(true));
              }}
            >
              登陆
            </Button>
            <Button
              type="primary"
              size="small"
              className="register btn"
              onClick={() => {
                this.props.dispatch(register(true));
              }}
            >
              注册
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.UserStatusReducer
  };
};
export default connect(mapStateToProps)(Nav);
