import React from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { connect } from "react-redux";

import { admin_getAdminInfo, admin_del } from "@/redux/action";
import AdminBreadcrumb from "@/Admin/AdminBreadcrumb";
import "./UserList.scss";
import formatTime from "@/utils/date.js";

@connect(
  state => state.getAdminInfoReducer,
  { admin_getAdminInfo, admin_del }
)
class UserList extends React.Component {
  componentDidMount() {
    this.props.admin_getAdminInfo();
  }
  render() {
    const { result, loading } = this.props;
    let data = [];
    const columns = [
      {
        title: "用户名(账户)",
        dataIndex: "username",
        className: "fz"
      },
      {
        title: "姓名",
        dataIndex: "real_name",
        className: "fz"
      },
      {
        title: "联系电话",
        dataIndex: "phone_number",
        className: "fz"
      },
      {
        title: "性别",
        dataIndex: "sex",
        className: "fz"
      },
      {
        title: "email",
        dataIndex: "email",
        className: "fz"
      },
      {
        title: "身份证",
        dataIndex: "id_number",
        className: "fz"
      },
      {
        title: "状态",
        dataIndex: "status",
        className: "fz"
      },
      {
        title: "所属公司",
        dataIndex: "company",
        className: "fz"
      },
      {
        title: "所属分店",
        dataIndex: "branch",
        className: "fz"
      },
      {
        title: "添加时间",
        dataIndex: "time",
        className: "fz"
      },
      {
        title: "操作/身份",
        dataIndex: "operation",
        className: "fz",
        render: (text, record) =>
          window.sessionStorage.getItem("admin_username") === "admin" ? (
            record.username === "admin" ? (
              "超级管理员"
            ) : (
                <Popconfirm
                title="确定删除该用户么？"
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  this.props.admin_getAdminInfo();
                  message.success("删除成功");
                }}
                onCancel={() => {
                  message.error("点击取消");
                }}
              >
                <Button
                  type="danger"
                  size="small"
                  onClick={() => {
                    this.props.admin_del(record.key)
                  }}
                >
                  {text}
                </Button>
              </Popconfirm>
            )
          ) : record.username ===
            window.sessionStorage.getItem("admin_username") ? (
            "当前用户"
          ) : record.username === "admin" ? (
            "超级管理员"
          ) : (
            "其他用户"
          )
      }
    ];

    result.forEach((item, index) => {
      data.push({
        key: item._id ? item._id : index,
        username: item.username,
        real_name: item.real_name,
        phone_number: item.phone_number,
        sex: item.sex,
        email: item.email,
        id_number: item.id_number,
        company: item.company,
        branch: item.branch,
        time: formatTime(item.time),
        operation: "删除"
      });
    });

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };

    return (
      <div>
        <AdminBreadcrumb />
        <section style={{ backgroundColor: "#fff" }}>
          <Table
            columns={columns}
            rowSelection={rowSelection}
            dataSource={data}
            loading={loading}
            bordered
            size="middle"
          />
        </section>
      </div>
    );
  }
}
export default UserList;
