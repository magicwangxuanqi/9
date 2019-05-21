import React from "react";
import { Row, Col, Card, Tag, Empty, Icon } from "antd";
import { connect } from "react-redux";
import { getEstrustInfo } from "@/redux/action";

@connect(
  state => state.GetEstrustInfoReducer,
  { getEstrustInfo }
)
class HasEstrust extends React.Component {
  componentDidMount() {
    this.props.getEstrustInfo(null, window.sessionStorage.getItem("username"));
  }
  render() {
    return (
      <div>
        <Card
          title={
            <b>
              共&nbsp;<i style={{ color: "#e4393c" }}>{this.props.count}</i>
              &nbsp;套已委托房源
            </b>
          }
        >
          {this.props.count === 0 ? (
            <Empty description="暂无数据" />
          ) : (
            this.props.result.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    borderBottom: "1px solid #e8e8e8",
                    marginBottom: "10px"
                  }}
                >
                  <Row style={{ fontSize: "13px" }}>
                    <Col span={6}>
                      {item.images[0] ? (
                        <img
                          src={item.images[0].thumbUrl}
                          alt=""
                          style={{ width: "173px", height: "130px" }}
                        />
                      ) : (
                        <Empty
                          description="暂无图片"
                          style={{ width: "173px", height: "130px" }}
                        />
                      )}
                    </Col>
                    <Col
                      span={12}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>标题：</i>
                          {item.houseTitle}
                        </Col>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>小区：</i>
                          {item.region.name}
                        </Col>
                      </Row>
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>格局：</i>
                          {item.region.pattern.room}室{item.region.pattern.hail}
                          厅{item.region.pattern.toilet}卫
                        </Col>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>面积：</i>
                          {item.region.area}平米
                        </Col>
                      </Row>
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>朝向：</i>
                          {item.region.direction}
                        </Col>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>装修程度：</i>
                          {item.region.fitment}
                        </Col>
                      </Row>
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>楼层：</i>第
                          {item.floor.current}层（共
                          {item.floor.all}层）
                        </Col>
                        <Col span={12}>
                          <i style={{ color: "#e4393c" }}>价格：</i>
                          {item.price.length > 4
                            ? item.price / 10000
                            : item.price}{" "}
                          {item.houseType === "租房"
                            ? "元/月"
                            : item.price.length > 4
                            ? "万元"
                            : "元"}
                        </Col>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <Row
                        style={{
                          position: "relative",
                          height: "100px",
                          padding: "8px 0",
                          fontWeight: "bold"
                        }}
                      >
                        <Col
                          style={{
                            width: "100px",
                            position: "absolute",
                            top: '8px',
                            left: "50%",
                            marginLeft: "-50px"
                          }}
                        >
                          <Tag color="#2db7f5">{item.houseType}</Tag>
                        </Col>
                        <Col
                          style={{
                            width: "100px",
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            marginLeft: "-50px"
                          }}
                        >
                          <Icon
                            type={`${
                              item["audit-status"] === ""
                                ? "exclamation"
                                : item["audit-status"] === "通过"
                                ? "check"
                                : "close"
                            }-circle`}
                            theme="twoTone"
                            twoToneColor={`${
                              item["audit-status"] === ""
                                ? "#ccc"
                                : item["audit-status"] === "通过"
                                ? "#52c41a"
                                : "#ff6700"
                            }`}
                            style={{ fontSize: "13px" }}
                          />
                          <Tag
                            color={`${
                              item["audit-status"] === ""
                                ? "#ccc"
                                : item["audit-status"] === "通过"
                                ? "#52c41a"
                                : "#ff6700"
                            }`}
                          >
                            {item["audit-status"] === ""
                              ? "待审核"
                              : item["audit-status"] === "通过"
                              ? "审核已通过"
                              : "审核未通过"}
                          </Tag>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              );
            })
          )}
        </Card>
      </div>
    );
  }
}
export default HasEstrust;
