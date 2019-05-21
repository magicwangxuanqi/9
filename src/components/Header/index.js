import React, { Component } from "react";
import "./index.scss";
// 组件导入
import Nav from "./Nav/index";
import Content from "./Content/index";
import ModelCard from "./ModelCard/index";
import Methods from "./Methods/index";
import Exhibiting from "./Exhibiting/index";

class Header extends Component {
  state = {
    condition: [
      {
        title: "二手好房",
        type: '二手房',
        subTitle: "为你而选",
        intro: "好房源那么多，我们为你精选",
        rgba: [245, 245, 245, 0.7],
        path: '/type/secondary'
      },
      {
        title: "新房",
        type: '新房',
        subTitle: "新的启航",
        intro: "真实信息准确同步，楼盘动态一手掌握",
        rgba: [225, 225, 225, 0.6],
        path: '/type/bridalChamber'
      },
      {
        title: "租房",
        type: '租房',
        subTitle: "居家旅行必备",
        intro: "花最少的钱，租最好的房",
        rgba: [235, 235, 235, 0.55],
        path: '/type/rent'
      }
    ]
  };
  render() {
    return (
      <div className="Header">
        <ModelCard />
        {/* 导航 */}
        <Nav />
        {/* 搜索 */}
        <Content history={this.props.history} />
        {/* 方式 */}
        <Methods />
        {/* 基础房源展示 */}
        {this.state.condition.map((item, index) => {
          return <Exhibiting key={index} condition={item} />;
        })}
      </div>
    );
  }
}
export default Header;
