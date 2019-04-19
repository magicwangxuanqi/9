import React from "react";

import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";

class Rent extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search
          history={this.props.history}
          path="/rent"
          searchVal={this.props.history.location.search.split("=")[1]}
        />
        <HouseType title="出租房" count={3} />
      </div>
    );
  }
}

export default Rent;
