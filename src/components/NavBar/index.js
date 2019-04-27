import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHousingInfo } from "@/redux/action";
import "./index.scss";

@connect(
  null,
  { getHousingInfo }
)
class NavBar extends React.Component {
  handleClick(val) {
    if (val) {
      this.props.getHousingInfo({ type: val });
    }
  }
  render() {
    const linkTag = [
      { title: "首页", path: "/" },
      { title: "二手房", path: "/type/secondary", val: "二手房" },
      { title: "新房", path: "/type/bridalChamber", val: "新房" },
      { title: "租房", path: "/type/rent", val: "租房" },
      { title: "发布房源", path: "/rental" },
      {
        title: "管理系统",
        path: window.sessionStorage.getItem("admin_token")
          ? "/admin/main"
          : "/admin"
      }
    ];
    return (
      <div className="nav-bar">
        <ul>
          {linkTag.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={val => this.handleClick(item.val)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default NavBar;
