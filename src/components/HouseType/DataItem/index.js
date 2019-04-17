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
              <Link to="/detail">
                <img
                  src="http://house.boolshop.com/upload/20180226/4b43fb2f20f80dfbc73a827d55197c17.jpg"
                  alt=""
                />
              </Link>
            </aside>
          </Col>
          <Col span={12}>
            <aside className="middle">
              <div className="title">
                <Link to="/detail">诚心出售 看房方便 方正格局 两梯四户</Link>
              </div>
              <div className="introduce">
                <Icon type="home" />
                &nbsp; <Link to="/detail">万象新天一区</Link> | 1室1厅 |68.22平米 | 北 | 精装 | 无电梯
              </div>
              <div className="floor">
                <Icon type="environment" />
                &nbsp; 低楼层(共12层)
              </div>
              <div className="heat">
                <Icon type="star" />
                &nbsp; 23人关注 / 14个月以前发布
              </div>
              <div>
                <Tag color="#FF8062">有租房需要预约</Tag>
              </div>
            </aside>
          </Col>
          <Col span={6}>
            <aside className="right">
              <div className="price">
                <span className="price-num">390</span>&nbsp;万
              </div>
              <div className="unit-price">单价57168元/平米</div>
            </aside>
          </Col>
        </Row>
      </div>
    );
  }
}
export default DataItem;
