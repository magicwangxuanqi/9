import React from "react";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";

class Secondary extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <HouseType title="二手房" count={2} />
      </div>
    );
  }
}
export default Secondary;
