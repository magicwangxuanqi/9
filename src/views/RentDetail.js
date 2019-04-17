import React from "react";
import { Tag, Card, Button } from "antd";
import Search from "@/components/Search/index";
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
            <p>123</p>
          </Card>
        </section>
      </div>
    );
  }
}

export default RentDetail;
