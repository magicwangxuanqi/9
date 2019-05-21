import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./index.scss";

class Methods extends React.Component {
  state = {
    condition: [
      {
        id: 1,
        title: "找二手房",
        content: "真实二手房源，真实在售，所见即真",
        src: "/type/secondary"
      },
      {
        id: 2,
        title: "找新房",
        content: "真实新售房源，真实在售，所见即真",
        src: "/type/bridalChamber"
      },
      {
        id: 3,
        title: "找租房",
        content: "最新租赁房源，随时联系，随时看房",
        src: "/type/rent"
      },
      {
        id: 4,
        title: "房源发布",
        content: "欢迎提供优秀房源",
        src: "/rental"
      }
    ]
  };
  render() {
    return (
      <div className="methods">
        <Row className="methods-box">
          {this.state.condition.map((item, index) => {
            return (
              <Col span={6} className="methods-box-item" key={index}>
                <Link to={item.src}>
                  <img src={require(`@/assets/widget${item.id}.png`)} alt="" />
                </Link>
                <b>{item.title}</b>
                <p>{item.content}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Methods;
