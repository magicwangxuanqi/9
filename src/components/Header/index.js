import React, { Component } from "react";
import "./index.scss";
// 组件导入
import Nav from "./Nav/index";
import Content from "./Content/index";
import ModelCard from "./ModelCard/index";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ModelCard />
        <Nav />
        <Content />
      </div>
    );
  }
}
export default Header;
