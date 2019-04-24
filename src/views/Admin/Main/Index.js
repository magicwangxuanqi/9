import React from "react";
import { Card, Col, Row } from "antd";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Card title="系统信息" style={{ width: "100%" }}>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              操作系统
            </Col>
            <Col span={3}>Windows</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              运行环境
            </Col>
            <Col span={3}>nginx</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              node运行环境
            </Col>
            <Col span={3}>centos7</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              node运行方式
            </Col>
            <Col span={3}>pm2</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              node版本
            </Col>
            <Col span={3}>v10.4.1</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              mongodb版本
            </Col>
            <Col span={3}>v4.0.4</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              上传附件限制
            </Col>
            <Col span={3}>50M</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              开发工具
            </Col>
            <Col span={3}>vscode</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              开发方式
            </Col>
            <Col span={3}>前后分离</Col>
          </Row>
        </Card>
        <br />
        <Card
          title="基本信息"
          style={{ width: '100%' }}
        >
           <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              开发者
            </Col>
            <Col span={3}>王宣棋</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              邮箱
            </Col>
            <Col span={3}>778506985@qq.com</Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col span={3} style={{ fontWeight: "bold" }}>
              电话
            </Col>
            <Col span={3}>13100970071</Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default Index;
