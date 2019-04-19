import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const NavBar = () => {
  const linkTag = [
    { title: "首页", path: "/" },
    { title: "二手房", path: "/secondary?search=" },
    { title: "新房", path: "/bridalChamber?search=" },
    { title: "租房", path: "/rent?search=" },
    { title: "发布房源", path: "/rental" },
    { title: "中介登陆", path: "/admin" }
  ];
  return (
    <div className="nav-bar">
      <ul>
        {linkTag.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NavBar;
