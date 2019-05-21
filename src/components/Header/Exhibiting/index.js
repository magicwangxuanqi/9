import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";

import { api_home } from "@/utils/api";
class Exhibiting extends React.Component {
  state = {
    二手房: [],
    新房: [],
    租房: []
  };
  componentDidMount() {
    const { condition } = this.props;
    axios.get(api_home, { params: { houseType: condition.type } }).then(res => {
      this.setState({
        [condition.type]: res.data.result
      });
    });
  }
  render() {
    const { condition } = this.props;
    return (
      <div
        className="exhibiting"
        style={{
          backgroundColor: `rgba(${condition.rgba.join(",")})`
        }}
      >
        <Row className="card-title">
          <Col span={18}>
            <b> {condition.title} </b>&nbsp;{condition.subTitle}
            <p>
              <span> {condition.intro} </span>
              <Link to={condition.path}> 更多{condition.type} </Link>
            </p>
          </Col>
        </Row>
        <Row className="card-box">
          {this.state[condition.type].map((item, index) => {
            return (
              <Col
                span={4}
                style={{
                  margin: "0 20px"
                }}
                key={index}
              >
                <Link to={`/rent_detail/${item._id}/${item.houseType}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt=""
                        src={item.images[0].thumbUrl}
                        style={{
                          width: "250px",
                          height: "250px"
                        }}
                      />
                    }
                  >
                    <section>
                      <b>{item.houseTitle}</b>{" "}
                      <p className="card-intro">
                        <span>{item.region.name}</span>{" "}
                        <span>
                          {item.region.pattern.room}室{item.region.pattern.hail}
                          厅{item.region.pattern.toilet}卫{" "}
                        </span>{" "}
                        <span>{item.region.area}平米 </span>{" "}
                      </p>{" "}
                    </section>{" "}
                  </Card>{" "}
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Exhibiting;
