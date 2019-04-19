import React, { Component } from "react";
import "./index.scss";
import { Select, Input, Button, Icon } from "antd";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      placeholderText: "请输入区域、商圈或小区名开始找房",
      optionVal: "used",
      searchMsg: ""
    };
  }
  handleChange(val) {
    console.log(val);
    switch (val) {
      case "news":
        this.setState({
          placeholderText: "请输入楼盘名称开始找房",
          optionVal: "news"
        });
        break;
      case "rent":
        this.setState({
          placeholderText: "请输入区域、商圈或小区名开始找房",
          optionVal: "rent"
        });
        break;
      default:
        this.setState({
          placeholderText: "请输入区域、商圈或小区名开始找房",
          optionVal: "used"
        });
        break;
    }
  }
  render() {
    const { placeholderText, optionVal, searchMsg } = this.state;
    const { history } = this.props;
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
            placeholder={placeholderText}
            style={{ width: "30%" }}
            size="large"
            ref="input"
            value={searchMsg}
            onChange={e => {
              this.setState({
                searchMsg: e.target.value
              });
            }}
          />
          <Button
            type="primary"
            icon="search"
            size="large"
            style={{ width: "50px" }}
            onClick={() => {
              console.log(searchMsg);
              switch (optionVal) {
                case "used":
                  history.push(`/secondary?search=${searchMsg}`);
                  break;
                case "news":
                  history.push(`/bridalChamber?search=${searchMsg}`);
                  break;
                default:
                  history.push(`/rent?search=${searchMsg}`);
                  break;
              }
            }}
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
