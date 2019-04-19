import React from "react";

import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import HouseType from "@/components/HouseType";
import "./BridalChamber.scss";

class BridalChamber extends React.Component {
  render() {
    return (
      <div className="bridalChamber">
        <NavBar />
        <Search
          history={this.props.history}
          path="/bridalChamber"
          searchVal={this.props.history.location.search.split("=")[1]}
        />
        <HouseType title="新房" count={4} />
      </div>
    );
  }
}

export default BridalChamber;
