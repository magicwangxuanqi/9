import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Dropdown } from "antd";
import "./AdminHeader.scss";

class AdminHeader extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/admin/main/setting">
            <Icon type="setting" />
            个人设置
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Icon type="poweroff" />
          退出
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="admin-header">
        <section className="title">房屋中介管理系统</section>
        <section className="message">
          <span className="symbol">
            <Link to="/admin/main/entrust" style={{ color: "#fff" }}>
              <Icon type="bell" />
              <span className="right-count">3</span>
            </Link>
          </span>
          <span style={{ marginLeft: "10px" }}>
            <Dropdown overlay={menu}>
              <span
                className="ant-dropdown-link"
                href="javascript:;"
                style={{ cursor: "pointer" }}
              >
                用户操作 <Icon type="down" />
              </span>
            </Dropdown>
          </span>
        </section>
      </div>
    );
  }
}
export default AdminHeader;
