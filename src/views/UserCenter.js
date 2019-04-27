import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/NavBar";
import { Row, Col, Card, Tag } from "antd";
import "./UserCenter.scss";

class UserCenter extends React.Component {
  render() {
    return (
      <div className="usercenter">
        <Navbar />
        <Row style={{ width: "1170px", margin: "30px auto 0" }}>
          <Col span={4} className="usercenter-left">
            <Row>
              <img src="http://house.boolshop.com/upload/20190427/09e14af63dc0ae5a5a26f9165a4b602d.jpg" />
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              欢迎您，{window.sessionStorage.getItem("username")}
            </Row>
            <Row className="left-link">
              <Link>关注的房源</Link>
            </Row>
            <Row className="left-link">
              <Link>编辑资料</Link>
            </Row>
          </Col>
          <Col span={18} className="usercenter-right">
            <Card
              title={
                <b>
                  共&nbsp;<i style={{color: '#e4393c'}}>1</i>&nbsp;套关注房源
                </b>
              }
              extra={<Tag color="#2db7f5">租房</Tag>}
            >
              <Row>
                <Col span={6}>
                  <img
                    src="http://house.boolshop.com/upload/20180222/1211b99400e576bd64168e447402692f.jpg"
                    alt=""
                    style={{ width: "173px", height: "130px" }}
                  />
                </Col>
                <Col
                  span={8}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Row style={{ padding: "8px 0" }}>
                    丽景天成二期，两室1厅，朝北
                  </Row>
                  <Row style={{ padding: "8px 0" }}>
                    <Col span={10}>象山公寓（二区）</Col>
                    <Col span={6}>2室1厅1卫</Col>
                    <Col span={6}>65平米</Col>
                    <Col span={2}>东</Col>
                  </Row>
                  <Row style={{ padding: "8px 0" }}>精装 / 底层（共1层）</Row>
                  <Row style={{ padding: "8px 0" }}>
                    <Tag color="#2db7f5">随时看房</Tag>
                  </Row>
                </Col>
                <Col
                  span={8}
                  style={{
                    color: "#e4393c",
                    textAlign: "center",
                    lineHeight: "100px"
                  }}
                >
                  <b style={{ fontSize: "30px" }}>3000</b>元
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default UserCenter;
