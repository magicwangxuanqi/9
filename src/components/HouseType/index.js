import React from "react";
import DataItem from "./DataItem/index";
import "./index.scss";

class HouseType extends React.Component {
  render() {
    const { title, count } = this.props;
    let arr = new Array(count).fill(1);
    return (
      <div className="house-type">
        <h1>
          共找到&nbsp;<span>{count}</span>&nbsp;套{title}
        </h1>
        {arr.map((item, index) => {
          return <DataItem key={index} />;
        })}
      </div>
    );
  }
}
export default HouseType;
