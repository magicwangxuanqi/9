import React from "react";
import { Table } from "antd";

class Rent extends React.Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: text => <a href="javascript:;">{text}</a>
      },
      {
        title: "Cash Assets",
        className: "column-money",
        dataIndex: "money"
      },
      {
        title: "Address",
        dataIndex: "address"
      }
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park"
      }
    ];

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
          title={() => "Header"}
        />
      </div>
    );
  }
}
export default Rent;
