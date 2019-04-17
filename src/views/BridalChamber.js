import React from "react";
import Search from "@/components/Search";
import HouseType from '@/components/HouseType';
import "./BridalChamber.scss";

class BridalChamber extends React.Component {
  render() {
    return (
      <div className="bridalChamber">
        <Search />
        <HouseType title="新房" count={4} />
      </div>
    );
  }
}

export default BridalChamber;
