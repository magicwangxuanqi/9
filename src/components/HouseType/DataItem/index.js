import React from "react";
import "./index.scss";
import { Row, Col, Icon, Tag } from "antd";
import { Link } from "react-router-dom";

class DataItem extends React.Component {
  render() {
    return (
      <div className="data-item">
        <Row>
          <Col span={6}>
            <aside className="left">
              <Link to={`/rent_detail/${this.props.data._id}`}>
                <img
                  src={
                    this.props.data.images[0]
                      ? this.props.data.images[0].thumbUrl
                      : null
                  }
                  alt=""
                />
              </Link>
            </aside>
          </Col>
          <Col span={12}>
            <aside className="middle">
              <div className="title">
                <Link to={`/rent_detail/${this.props.data._id}`}>
                  {this.props.data.houseTitle}
                </Link>
              </div>
              <div className="introduce">
                <Icon type="home" />
                &nbsp;{" "}
                <Link to={`/rent_detail/${this.props.data._id}`}>
                  {this.props.data.region.name}
                </Link>{" "}
                | {this.props.data.region.pattern.room}室
                {/* {this.props.data.region.pattern.hail}厅 */}
                {this.props.data.region.pattern.toilet}卫 |
                {this.props.data.region.area}平米 |{" "}
                {this.props.data.region.direction} |{" "}
                {this.props.data.region.fitment} |{" "}
                {this.props.data.region.elevator ? "有" : "无"}电梯
              </div>
              <div className="floor">
                <Icon type="environment" />
                &nbsp; 第{this.props.data.floor.current}层(共
                {this.props.data.floor.all}层)
              </div>
              <div className="heat">
                <Icon type="star" />
                &nbsp; {this.props.data.attention_number}人关注 / 发布时间：
                {this.props.data.time}
              </div>
              <div>
                <Tag color="#FF8062">有租房需要预约</Tag>
              </div>
            </aside>
          </Col>
          <Col span={6}>
            <aside className="right">
              <div className="price">
                <span className="price-num">{this.props.data.price}</span>
                &nbsp;元
              </div>
              <div className="unit-price">{this.props.data.time}</div>
            </aside>
          </Col>
        </Row>
      </div>
    );
  }
}
export default DataItem;
