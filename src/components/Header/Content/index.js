import React, { Component } from "react";
import "./index.scss";
import { Select, Input, Button, Icon } from "antd";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      placeholderText: "请输入区域、商圈或小区名开始找房"
    };
  }
  handleChange(val) {
    console.log(val);
    switch (val) {
      case "news":
        this.setState({ placeholderText: "请输入楼盘名称开始找房" });
        break;
      case "rent":
        this.setState({ placeholderText: "请输入区域、商圈或小区名开始找房" });
        break;
      default:
        this.setState({ placeholderText: "请输入区域、商圈或小区名开始找房" });
        break;
    }
  }
  render() {
    return (
      <div className="Content">
        {/* home-container */}
        <ul className="choice">
          <li>二手房</li>/<li>新房</li>/<li>租房</li>
        </ul>
        <Input.Group compact>
          <Select
            defaultValue="used"
            style={{ width: 120 }}
            size="large"
            onChange={this.handleChange.bind(this)}
          >
            <Select.Option value="used">找二手房</Select.Option>
            <Select.Option value="news">找新房</Select.Option>
            <Select.Option value="rent">找租房</Select.Option>
          </Select>
          <Input
            allowClear
            placeholder={this.state.placeholderText}
            style={{ width: "30%" }}
            size="large"
          />
          <Button
            type="primary"
            icon="search"
            size="large"
            style={{ width: "50px" }}
          />
        </Input.Group>
        <br />
        <div className="sound">
          <Icon type="sound" />
          <span>北京在售二手房 58626 套</span>
        </div>
      </div>
    );
  }
}
export default Content;
