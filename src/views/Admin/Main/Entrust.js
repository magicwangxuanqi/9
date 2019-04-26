import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEstrustInfo, update_estrust } from "@/redux/action";
import {
  Table,
  Button,
  Input,
  Select,
  notification,
  Popconfirm,
  message
} from "antd";
import "./Entrust.scss";

@connect(
  state => state.GetEstrustInfoReducer,
  { getEstrustInfo, update_estrust }
)
class Entrust extends React.Component {
  state = {
    appellation: "",
    selectStatus: '未接单'
  };
  componentDidMount() {
    this.props.getEstrustInfo();
  }
  render() {
    const { result, loading } = this.props;
    let data = [];
    const columns = [
      {
        title: "小区名称",
        dataIndex: "region.name",
        className: "fz"
      },
      {
        title: "房源类型",
        dataIndex: "houseType",
        className: "fz"
      },
      {
        title: "委托者姓名",
        dataIndex: "appellation",
        className: "fz"
      },
      {
        title: "委托者电话",
        dataIndex: "phone",
        className: "fz"
      },
      {
        title: "期望价格",
        dataIndex: "price",
        render: text => <span>{text}元</span>,
        className: "fz"
      },
      {
        title: "面积",
        dataIndex: "region.area",
        render: text => (
          <span>
            {text}&nbsp; m<sup>2</sup>
          </span>
        ),
        className: "fz"
      },
      {
        title: "互型",
        dataIndex: "region.pattern",
        render: arr => (
          <span>
            {arr[0]}室{arr[1]}厅{arr[2]}卫
          </span>
        ),
        className: "fz"
      },
      {
        title: "接单人姓名",
        dataIndex: "accept.name",
        className: "fz"
      },
      {
        title: "接单状态",
        dataIndex: "accept.status",
        className: "fz"
      },
      {
        title: "添加时间",
        dataIndex: "time",
        className: "fz"
      },
      {
        title: "操作",
        dataIndex: "operation",
        render: (text, record) =>
          text ? null : (
            <Popconfirm
              title="确定接单么？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                this.props.getEstrustInfo();
                notification.open({
                  message: "接单成功",
                  description: "请尽快联系用户，以便尽快满足用户需要"
                });
              }}
              onCancel={() => {
                message.error("取消接单");
              }}
            >
              <Button
                type="danger"
                size="small"
                onClick={() => {
                  this.props.update_estrust(record.key, true);
                }}
              >
                未接单
              </Button>
            </Popconfirm>
          ),
        className: "fz"
      }
    ];
    result.forEach((item, index) => {
      data.push({
        key: item._id ? item._id : index,
        houseType: item.houseType,
        "region.name": item.region.name,
        appellation: item.appellation,
        phone: item.phone,
        price: item.price,
        "region.area": item.region.area,
        "region.pattern": item.region.pattern,
        "accept.name": item.accept.name,
        "accept.status": item.accept.status ? "已接单" : "未接单",
        time: item.time,
        operation: item.accept.status
      });
    });

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
          loading={loading}
          bordered
          size="middle"
          title={() => (
            <div style={{ margin: "5px" }}>
              <b>委托人姓名：</b>
              <Input
                placeholder="请输入委托人姓名"
                size="small"
                style={{ width: "150px" }}
                value={this.state.appellation}
                onChange={e => {
                  this.setState({ appellation: e.target.value });
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  this.setState(
                    {
                      appellation: "",
                      selectStatus: '未接单'
                    },
                    () => {
                      this.props.getEstrustInfo(this.state);
                    }
                  );
                }}
              >
                初始化搜索条件
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <b>是否接单：</b>
              <Select
                defaultValue={this.state.selectStatus}
                size="small"
                onChange={value => {
                  this.setState({ selectStatus: value });
                }}
              >
                <Select.Option value="未接单">未接单</Select.Option>
                <Select.Option value="已接单">已接单</Select.Option>
              </Select>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  this.props.getEstrustInfo(this.state);
                }}
              >
                搜索
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                type="dashed"
                size="small"
                onClick={() => {
                  this.props.getEstrustInfo();
                }}
              >
                显示所有数据
              </Button>
            </div>
          )}
        />
      </div>
    );
  }
}
export default Entrust;
