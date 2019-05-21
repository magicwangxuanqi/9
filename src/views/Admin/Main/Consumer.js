import React from "react";
import { Table, Button, Popconfirm, message, Empty } from "antd";
import { connect } from "react-redux";

import { getUserInfo, delUser } from "@/redux/action";
import "./UserList.scss";

@connect(
  state => state.getUserInfoReducer,
  { getUserInfo, delUser }
)
class Consumer extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
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
        title: "头像",
        dataIndex: "headPortrait",
        className: "fz",
        width: '80px',
        render: text =>
          text ? (
            <img
              src={text.thumbUrl}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          ) : (
            <img
              src={require('@/assets/noImg.svg')}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          )
      },
      {
        title: "姓名",
        dataIndex: "name",
        className: "fz"
      },
      {
        title: "性别",
        dataIndex: "sex",
        className: "fz"
      },
      {
        title: "联系方式",
        dataIndex: "phoneNumber",
        className: "fz"
      },
      {
        title: "身份证号",
        dataIndex: "idCard",
        className: "fz"
      },
      {
        title: "职业",
        dataIndex: "job",
        className: "fz"
      },
      {
        title: "邮箱",
        dataIndex: "email",
        className: "fz"
      },
      {
        title: "操作",
        dataIndex: "operation",
        className: "fz",
        render: (text, record) =>
          window.sessionStorage.getItem("admin_username") === "admin" ? (
            <Popconfirm
              title="确定删除该用户么？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                this.props.getUserInfo();
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
                  this.props.delUser(record.key);
                }}
              >
                {text}
              </Button>
            </Popconfirm>
          ) : null
      }
    ];

    result.forEach((item, index) => {
      data.push({
        key: item._id ? item._id : index,
        username: item.username,
        headPortrait: item.headPortrait ? item.headPortrait[0] : null,
        name: item.name,
        sex: item.sex,
        phoneNumber: item.phoneNumber,
        idCard: item.idCard,
        job: item.job,
        email: item.email,
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
export default Consumer;
