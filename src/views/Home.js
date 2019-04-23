import React, { Component } from "react";
import "./Home.scss";

// 组件导入
import Header from "../components/Header/index";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header history={this.props.history} />
      </div>
    );
  }
}

export default Home;
