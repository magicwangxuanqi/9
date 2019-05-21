import React from "react";
import { connect } from "react-redux";
import {
  serial,
  recommend,
  attention,
  rm_attention,
  item_attention,
  count_attention
} from "@/redux/action";
import { Tag, Card, Button, Row, Col, BackTop, message, Empty } from "antd";
import { Link } from "react-router-dom";

import NavBar from "@/components/NavBar";
import MySlider from "@/components/MySlider/index";
import "./RentDetail.scss";
import formatTime from "@/utils/date.js";

@connect(
  state => state,
  {
    serial,
    recommend,
    attention,
    rm_attention,
    item_attention,
    count_attention
  }
)
class RentDetail extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.serial(match.params.id);
    this.props.recommend(match.params.id, match.params.type);
    this.props.item_attention(
      window.sessionStorage.getItem("username"),
      match.params.id
    );
    this.props.count_attention(match.params.id);
  }
  // 页面重渲染
  HeavyRendering = (id, type) => {
    this.props.serial(id);
    this.props.recommend(id, type);
    this.props.item_attention(window.sessionStorage.getItem("username"), id);
    this.props.count_attention(id);
  };
  render() {
    return (
      <div className="rent_detail" style={{ position: "relative" }}>
        <NavBar />
        <section className="rent_detail-content">
          <Tag color="green" style={{ margin: "30px 0" }}>
            当前房源
          </Tag>
          <Card
            title={
              <div>
                <h2 style={{ fontWeight: "bold" }}>
                  {this.props.SerialReducer.result.houseTitle}
                </h2>
                <p style={{ fontSize: "14px", color: "#AAA" }}>
                  {this.props.SerialReducer.result.houseType}
                </p>
              </div>
            }
            extra={
              <div>
                {this.props.attentionReducer.result.length !== 0 ? (
                  <Button
                    style={{ backgroundColor: "#39ac6a", color: "#fff" }}
                    onClick={() => {
                      this.props.rm_attention(
                        window.sessionStorage.getItem("username"),
                        this.props.match.params.id
                      );
                      message.info("已取消关注");
                      setTimeout(() => {
                        window.location.reload();
                      }, 300);
                    }}
                  >
                    已关注
                  </Button>
                ) : (
                  <Button
                    style={{ backgroundColor: "#39ac6a", color: "#fff" }}
                    onClick={() => {
                      if (window.sessionStorage.getItem("token")) {
                        this.props.attention(
                          this.props.SerialReducer.result,
                          window.sessionStorage.getItem("username")
                        );
                        message.info("已关注房源");
                        setTimeout(() => {
                          window.location.reload();
                        }, 300);
                      } else {
                        message.info("您还未登陆，请先去首页进行登陆", 0.5);
                        setTimeout(() => {
                          this.props.history.push("/");
                        }, 1000);
                      }
                    }}
                  >
                    关注房源
                  </Button>
                )}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Tag color="#f50">{this.props.countReducer.count}人关注</Tag>
              </div>
            }
          >
            <div className="card-box">
              <section className="card-box-left">
                <MySlider images={this.props.SerialReducer.result} />
              </section>
              <section className="card-box-right">
                <aside className="info">
                  <Row span={24}>
                    <h1>
                      {this.props.SerialReducer.result.price}&nbsp;
                      <span className="unit">元</span>
                    </h1>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={12}>
                      <p>
                        面积：{this.props.SerialReducer.result.region.area}平米
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>
                        房屋户型：
                        {this.props.SerialReducer.result.region.pattern.room}室
                        {this.props.SerialReducer.result.region.pattern.hail}厅
                        {this.props.SerialReducer.result.region.pattern.toilet}
                        卫
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={12}>
                      <p>
                        楼层：第{this.props.SerialReducer.result.floor.current}
                        层(共
                        {this.props.SerialReducer.result.floor.all}层)
                      </p>
                    </Col>
                    <Col span={12}>
                      <p>
                        房屋朝向：
                        {this.props.SerialReducer.result.region.direction}
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={24}>
                      <p>小区：{this.props.SerialReducer.result.region.name}</p>
                    </Col>
                  </Row>
                  <Row style={{ margin: "20px 0" }}>
                    <Col span={24}>
                      <p>
                        时间：{formatTime(this.props.SerialReducer.result.time)}
                      </p>
                    </Col>
                  </Row>
                </aside>
                <aside className="contact">
                  <Row>
                    <Col span={8} />
                    <Col span={16}>
                      <div className="self_info">
                        <span className="name">
                          {this.props.SerialReducer.result.issuer.name}
                        </span>
                        <span className="identity">平台人员</span>
                      </div>
                      <p className="phone">
                        联系电话：
                        <span style={{ fontWeight: "bold" }}>
                          {this.props.SerialReducer.result.issuer.phone}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </aside>
              </section>
            </div>
          </Card>
          <br />
          <Card title={<h3>房源介绍</h3>}>
            <div>
              <section>
                <h4
                  style={{
                    paddingBottom: "10px",
                    fontWeight: "bold",
                    borderBottom: "2px solid #333"
                  }}
                >
                  基本属性
                </h4>
                {this.props.SerialReducer.result.houseType === "租房" ? (
                  <Row style={{ padding: "20px 0" }}>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        租赁方式：
                      </span>
                      &nbsp; 押一付三
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        装修情况：
                      </span>
                      &nbsp; 精装
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        供暖方式：
                      </span>
                      &nbsp; 天然气
                    </Col>
                  </Row>
                ) : (
                  <Row style={{ padding: "20px 0" }}>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        户型结构：
                      </span>
                      &nbsp; 平层
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        建筑类型：
                      </span>
                      &nbsp; 塔楼
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        建筑结构：
                      </span>
                      &nbsp; 钢混结构
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        装修情况：
                      </span>
                      &nbsp; {this.props.SerialReducer.result.region.fitment}
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        梯户比例：
                      </span>
                      &nbsp; 2梯4户
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        配备电梯：
                      </span>
                      &nbsp;{" "}
                      {this.props.SerialReducer.result.region.elevator
                        ? "有电梯"
                        : "无电梯"}
                    </Col>
                    <Col span={8}>
                      <span style={{ fontSize: "11px", color: "#999" }}>
                        产权年限：
                      </span>
                      &nbsp; 70年
                    </Col>
                  </Row>
                )}
              </section>
              <section>
                {this.props.SerialReducer.result.houseType === "租房" ? (
                  <div>
                    <h4
                      style={{
                        paddingBottom: "10px",
                        fontWeight: "bold",
                        borderBottom: "2px solid #333"
                      }}
                    >
                      房源特色
                    </h4>
                    <aside style={{ marginTop: "30px" }}>
                      <i className="iconfont icon-yushi" />
                      <i className="iconfont icon-weishengjian" />
                      <i className="iconfont icon-bingxiang" />
                      <i className="iconfont icon-shugui" />
                      <i className="iconfont icon-dianshiji" />
                      <i className="iconfont icon-chufang" />
                      <i className="iconfont icon-kongtiao-" />
                    </aside>
                  </div>
                ) : (
                  <b style={{ color: "#B0B3B4", fontSize: "12px" }}>
                    注：房源所示“房屋用途、交易权属、建成年代、产权年限、建筑结构”仅供参考，购房时请以房本信息为准。
                  </b>
                )}
              </section>
            </div>
          </Card>
          <br />
          <Card title="好房为您推荐">
            <Row>
              {this.props.RecommendReducer.result.length === 0 ? (
                <Empty description="暂无推荐房源" />
              ) : (
                this.props.RecommendReducer.result.map((item, index) => {
                  return (
                    <Col span={6} key={index}>
                      <Link to={`/rent_detail/${item._id}/${item.houseType}`}>
                        <Card
                          hoverable
                          style={{ width: 240 }}
                          cover={
                            <img
                              alt="example"
                              src={
                                item.images[0] ? item.images[0].thumbUrl : null
                              }
                              style={{ width: "238px", height: "278px" }}
                              onClick={() => {
                                this.HeavyRendering(item._id, item.houseType);
                              }}
                            />
                          }
                        >
                          <Card.Meta
                            title={item.region.name}
                            description={`${item.region.pattern.room}室${
                              item.region.pattern.hail
                            }厅${item.region.pattern.toilet}卫 / ${
                              item.region.area
                            }平米`}
                          />
                        </Card>
                      </Link>
                    </Col>
                  );
                })
              )}
            </Row>
          </Card>
          <BackTop />
        </section>
      </div>
    );
  }
}

export default RentDetail;
