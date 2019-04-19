import React, { Component } from "react";
import "./Home.scss";

// 组件导入
import Header from "../components/Header/index";
import Container from "../components/Container/index";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header history={this.props.history} />
        <Container />
      </div>
    );
  }
}

export default Home;
