import React from "react";

import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";

class Secondary extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search
          history={this.props.history}
          path="/secondary"
          searchVal={this.props.history.location.search.split("=")[1]}
        />
        <HouseType title="二手房" count={2} />
      </div>
    );
  }
}
export default Secondary;
