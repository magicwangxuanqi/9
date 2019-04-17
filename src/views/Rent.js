import React from "react";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";

class Rent extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <HouseType title="出租房" count={3} />
      </div>
    );
  }
}

export default Rent;
