import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Empty } from "antd";
import { connect } from "react-redux";
import { getHousingInfo, like } from "@/redux/action";

import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";

@connect(
  state => state.GetHousingInfoReducer,
  { getHousingInfo, like }
)
class Type extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    let type = "";
    switch (match.params.val) {
      case "secondary":
        type = "二手房";
        break;
      case "bridalChamber":
        type = "新房";
        break;
      case "rent":
        type = "租房";
        break;
    }
    // 获取接口数据信息
    this.props.getHousingInfo(type);
  }
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div className="type">
        <NavBar />
        <Search
          like={this.props.like}
          history={this.props.history}
          path="/secondary"
          searchVal={this.props.history.location.search.split("=")[1]}
        />
        <HouseType
          title={
            match.params.val === "secondary"
              ? "二手房"
              : match.params.val === "bridalChamber"
              ? "新房"
              : match.params.val === "rent"
              ? "租房"
              : null
          }
          data={this.props}
        />
        {this.props.result.length === 0 ? (
          <Empty description="暂无数据" />
        ) : null}
      </div>
    );
  }
}

export default Type;
