import React from "react";
import DataItem from "./DataItem/index";
import "./index.scss";

class HouseType extends React.Component {
  render() {
    const { title } = this.props;
    const { count, result } = this.props.data;
    return (
      <div className="house-type">
        <h1>
          共找到&nbsp;<span>{count}</span>&nbsp;套{title}
        </h1>
        {result.map((item, index) => {
          return <DataItem key={index} data={item} />;
        })}
      </div>
    );
  }
}
export default HouseType;
