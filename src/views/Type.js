import React from "react";
import { Empty } from "antd";
import { connect } from "react-redux";
import { getHousingInfo } from "@/redux/action";

import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";
import QS from "qs";

@connect(
  state => state.GetHousingInfoReducer,
  { getHousingInfo }
)
class Type extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    let queryObj = QS.parse(this.props.location.search.split("?")[1]);
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
    this.props.getHousingInfo({ type, queryObj });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="type">
        <NavBar />
        <Search
          path="/secondary"
          history={this.props.history}
          params={this.props.match.params.val}
          searchVal={this.props.history.location.search.split("=")[1]}
          getHousingInfo={this.props.getHousingInfo}
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
