import React from "react";
import { Table, Button, Input, Select } from "antd";

class Entrust extends React.Component {
  render() {
    const columns = [
      {
        title: "小区名称",
        dataIndex: "region.name"
      },
      {
        title: "委托者姓名",
        dataIndex: "username"
      },
      {
        title: "委托者电话",
        dataIndex: "phone"
      },
      {
        title: "期望价格",
        dataIndex: "price"
      },
      {
        title: "面积",
        dataIndex: "area",
        render: text => (
          <span>
            {text}&nbsp; m<sup>2</sup>
          </span>
        )
      },
      {
        title: "互型",
        dataIndex: "region.pattern",
        render: arr => (
          <span>
            {arr[0]}室{arr[1]}厅{arr[2]}卫
          </span>
        )
      },
      {
        title: "接单人姓名",
        dataIndex: "accept.name"
      },
      {
        title: "接单状态",
        dataIndex: "accept.status"
      },
      {
        title: "添加时间",
        dataIndex: "time"
      },
      {
        title: "操作",
        dataIndex: "operation",
        render: text => <Button type="danger">{text}</Button>
      }
    ];

    const data = [
      {
        key: "1",
        "region.name": "花园小区",
        username: "张三",
        phone: 12345678910,
        price: 2500,
        area: 50,
        "region.pattern": [1, 1, 1],
        "accept.name": "张某某",
        "accept.status": "未接单",
        time: "2018-01-05",
        operation: "接单"
      },
      {
        key: "2",
        "region.name": "绿都小区",
        username: "李四",
        phone: 12345678911,
        price: 2500,
        area: 100,
        "region.pattern": [2, 2, 1],
        "accept.name": "李某某",
        "accept.status": "未接单",
        time: "2018-11-05",
        operation: "接单"
      },
      {
        key: "3",
        "region.name": "森林小区",
        username: "王五",
        phone: 12345678912,
        price: 2500,
        area: 150,
        "region.pattern": [3, 2, 2],
        "accept.name": "刘某某",
        "accept.status": "未接单",
        time: "2019-01-05",
        operation: "接单"
      }
    ];
    // 可选择
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
      <div style={{ backgroundColor: "#fff" }}>
        <Table
          columns={columns}
          rowSelection={rowSelection}
          dataSource={data}
          bordered
          size="middle"
          title={() => (
            <div>
              <b>委托人姓名：</b>
              <Input
                placeholder="请输入委托人姓名"
                size="small"
                style={{ width: "150px" }}
              />&nbsp;&nbsp;&nbsp;&nbsp;
              <b>是否接单：</b>
              <Select defaultValue="未接单" size="small">
                <Select.Option value="未接单">未接单</Select.Option>
                <Select.Option value="已接单">已接单</Select.Option>
              </Select>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" size="small">
                搜索
              </Button>
            </div>
          )}
        />
      </div>
    );
  }
}
export default Entrust;
