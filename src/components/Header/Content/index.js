import React, { Component } from "react";
import "./index.scss";
import { Select, Input, Button, Icon } from "antd";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      placeholderText: "请输入标题或小区或房屋朝向查找二手房",
      optionVal: "secondary",
      searchMsg: ""
    };
  }
  handleChange(val) {
    switch (val) {
      case "bridalChamber":
        this.setState({
          placeholderText: "请输入标题或小区或房屋朝向查找新房",
          optionVal: "bridalChamber"
        });
        break;
      case "rent":
        this.setState({
          placeholderText: "请输入标题或小区或房屋朝向查找租房",
          optionVal: "rent"
        });
        break;
      default:
        this.setState({
          placeholderText: "请输入标题或小区或房屋朝向查找二手房",
          optionVal: "secondary"
        });
        break;
    }
  }
  jumpUrl(optionVal, searchMsg, history) {
    let url = `/type/${optionVal}`;
    url = searchMsg === "" ? url : `${url}?s=${searchMsg}`;
    switch (optionVal) {
      case "secondary":
        history.push(url);
        break;
      case "bridalChamber":
        history.push(url);
        break;
      default:
        history.push(url);
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
            defaultValue="secondary"
            style={{ width: 120 }}
            size="large"
            onChange={this.handleChange.bind(this)}
          >
            <Select.Option value="secondary">找二手房</Select.Option>
            <Select.Option value="bridalChamber">找新房</Select.Option>
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
            onPressEnter={() => this.jumpUrl(optionVal, searchMsg, history)}
          />
          <Button
            type="primary"
            icon="search"
            size="large"
            style={{ width: "50px" }}
            onClick={() => this.jumpUrl(optionVal, searchMsg, history)}
          />
        </Input.Group>
        <br />
        {/* <div className="sound">
          <Icon type="sound" />
          <span>北京在售二手房 58626 套</span>
        </div> */}
      </div>
    );
  }
}
export default Content;
