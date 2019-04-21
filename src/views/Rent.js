import React from "react";
import { connect } from "react-redux";
import { getHousingInfo } from "@/redux/action";

import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";

@connect(
  state => state.GetHousingInfoReducer,
  { getHousingInfo }
)
class Rent extends React.Component {
  componentDidMount() {
    // 获取接口数据信息
    this.props.getHousingInfo();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Search
          history={this.props.history}
          path="/rent"
          searchVal={this.props.history.location.search.split("=")[1]}
        />
        <HouseType title="出租房" data={this.props} />
      </div>
    );
  }
}

export default Rent;
