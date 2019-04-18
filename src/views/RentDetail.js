import React from "react";
import { Tag, Card, Button, Row, Col } from "antd";

import Search from "@/components/Search/index";
import MySlider from "@/components/MySlider/index";
import "./RentDetail.scss";

class RentDetail extends React.Component {
  render() {
    return (
      <div className="rent_detail">
        <Search />
        <section className="rent_detail-content">
          <Tag color="green" style={{ margin: "30px 0" }}>
            当前房源
          </Tag>
          <Card
            title={
              <div>
                <h2 style={{ fontWeight: "bold" }}>
                  丽景天成二期，两室1厅，朝北
                </h2>
                <p style={{ fontSize: "14px", color: "#AAA" }}>房东人很好</p>
              </div>
            }
            extra={
              <Button style={{ backgroundColor: "#39ac6a", color: "#fff" }}>
                关注房源
              </Button>
            }
          >
            <div className="card-box">
              <section className="card-box-left">
                <MySlider />
              </section>
              <section className="card-box-right">
                <aside className="info">
                  <Row span={24}>
                    <h1>
                      3000&nbsp;<span className="unit">元/月</span>
                    </h1>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={12}>
                      <p>面积：65平米</p>
                    </Col>
                    <Col span={12}>
                      <p>房屋户型：2室1厅1卫</p>
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={12}>
                      <p>楼层：底层(共1层)</p>
                    </Col>
                    <Col span={12}>
                      <p>房屋朝向：东</p>
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={24}>
                      <p>小区：象山小区(二区)</p>
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={24}>
                      <p>时间：14个月之前发布</p>
                    </Col>
                  </Row>
                </aside>
                <aside className="contact">
                  <Row>
                    <Col span={8} />
                    <Col span={16}>
                      <div className="self_info">
                        <span className="name">张三</span>
                        <span className="identity">平台人员</span>
                      </div>
                      <p className="phone">
                        联系电话：
                        <span style={{ fontWeight: "bold" }}>15659266753</span>
                      </p>
                    </Col>
                  </Row>
                </aside>
              </section>
            </div>
          </Card>
        </section>
      </div>
    );
  }
}

export default RentDetail;
