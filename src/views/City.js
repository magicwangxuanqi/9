import React, { Component } from "react";
import { connect } from "react-redux";

import "./Home.scss";

class City extends Component {
  render() {
    return (
      <div>
          city路由
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps)(City);