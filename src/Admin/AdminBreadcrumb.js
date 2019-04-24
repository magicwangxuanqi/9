import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
class AdminBreadcrumb extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: "20px" }}>
        <Breadcrumb>
          <Breadcrumb.Item style={{ fontWeight: 'bold' }}>用户管理</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/admin/main/userlist">中介用户列表</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/admin/main/setting">中介设置</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default AdminBreadcrumb;
