import React from "react";
import { Row, Col, Card, Tag, Empty } from "antd";
import { connect } from "react-redux";
import { content_attention } from "@/redux/action";

@connect(
  state => state.getAttentionInfoReducer,
  { content_attention }
)
class Attention extends React.Component {
  componentDidMount() {
    this.props.content_attention(window.sessionStorage.getItem("username"));
  }
  render() {
    return (
      <div>
        <Card
          title={
            <b>
              共&nbsp;<i style={{ color: "#e4393c" }}>{this.props.count}</i>
              &nbsp;套关注房源
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
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.props.history.push(
                      `/rent_detail/${item.productId}/${item.houseType}`
                    )
                  }
                >
                  <Row>
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
                      span={8}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        {item.houseTitle}
                      </Row>
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        <Col span={9}>{item.region.name}</Col>
                        <Col span={6}>
                          {item.region.pattern.room}室{item.region.pattern.hail}
                          厅{item.region.pattern.toilet}卫
                        </Col>
                        <Col span={6}>{item.region.area}平米</Col>
                        <Col span={3}>{item.region.direction}</Col>
                      </Row>
                      <Row style={{ padding: "8px 0", fontWeight: "bold" }}>
                        {item.region.fitment} / 第{item.floor.current}层（共
                        {item.floor.all}层）
                      </Row>
                      <Row style={{ padding: "8px 0" }}>
                        <Tag color="#2db7f5">{item.houseType}</Tag>
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
                      <b style={{ fontSize: "30px" }}>{item.price}</b>元
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
export default Attention;
