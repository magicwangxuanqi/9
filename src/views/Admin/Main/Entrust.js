import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getEstrustInfo,
  update_estrust,
  audit_status,
  submit_rental
} from "@/redux/action";
import {
  Table,
  Button,
  Input,
  Select,
  notification,
  Popconfirm,
  message,
  Icon
} from "antd";
import "./Entrust.scss";
import formatTime from "@/utils/date.js";

@connect(
  state => state.GetEstrustInfoReducer,
  { getEstrustInfo, update_estrust, audit_status, submit_rental }
)
class Entrust extends React.Component {
  state = {
    appellation: "",
    selectStatus: "未接单",
    auditStatus: ""
  };
  componentDidMount() {
    this.props.getEstrustInfo();
  }
  // 提交审核通过的房源信息
  submit(obj) {
    let newObj = {
      extrustId: obj._id,
      region: {
        ...obj.region,
        name: obj.region.name,
        area: obj.region.area,
        direction: obj.region.direction,
        fitment: obj.region.fitment,
        elevator: obj.region.elevator
      },
      images: [...obj.images],
      houseType: obj.houseType,
      houseTitle: obj.houseTitle,
      floor: {
        ...obj.floor,
        current: obj.floor.current,
        all: obj.floor.all
      },
      attention_number: obj.attention_number,
      time: formatTime(new Date()),
      price: obj.price,
      appellation: obj.appellation,
      phone: obj.phone,
      // 发布人
      issuer: {
        name: window.sessionStorage.getItem("admin_name")
          ? window.sessionStorage.getItem("admin_name")
          : window.sessionStorage.getItem("admin_username"),
        phone: window.sessionStorage.getItem("admin_phone")
      }
    };
    this.props.submit_rental(newObj);
  }
  render() {
    const { result, loading } = this.props;
    let data = [];
    const columns = [
      {
        title: "序号",
        dataIndex: "index",
        className: "fz"
      },
      {
        title: "委托用户",
        dataIndex: "uname",
        className: "fz"
      },
      {
        title: "小区名称",
        dataIndex: "region.name",
        className: "fz",
        width: "100px"
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
        render: text => (
          <span>{text.length > 4 ? `${text / 10000}万元` : `${text}元`}</span>
        ),
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
            {Object.values(arr)[0]}室{Object.values(arr)[1]}厅
            {Object.values(arr)[2]}卫
          </span>
        ),
        className: "fz"
      },
      {
        title: "接单用户",
        dataIndex: "accept.name",
        className: "fz"
      },
      {
        title: "接单状态",
        dataIndex: "accept.status",
        className: "fz"
      },
      {
        title: "审核状态",
        dataIndex: "audit-status",
        width: "110px",
        render: text =>
          text ? (
            <div>
              <Icon
                type={`${text === "通过" ? "check" : "close"}-circle`}
                theme="twoTone"
                twoToneColor={`${text === "通过" ? "#52c41a" : "#ff6700"}`}
                style={{ fontSize: "13px" }}
              />{" "}
              <span>{`审核${text}`}</span>
            </div>
          ) : (
            <div>
              <Icon
                type="exclamation-circle"
                theme="twoTone"
                twoToneColor="#faad14"
                style={{ fontSize: "13px" }}
              />{" "}
              <span>未审核</span>
            </div>
          ),
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
        width: "130px",
        render: (text, record) =>
          text[0] ? (
            text[1] === "" ? (
              <div>
                <Popconfirm
                  title="是否确定此操作？"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {
                    this.props.getEstrustInfo();
                    notification.open({
                      message: "审核通过",
                      icon: (
                        <Icon
                          type="check-circle"
                          theme="twoTone"
                          twoToneColor="#52c41a"
                          style={{ fontSize: "16px" }}
                        />
                      )
                    });
                  }}
                  onCancel={() => {
                    message.error("取消本次操作");
                  }}
                >
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => {
                      this.props.audit_status(record.key, true);
                      // 审核通过提交房源信息
                      this.submit(result[record.index]);
                    }}
                  >
                    通过
                  </Button>
                </Popconfirm>{" "}
                <Popconfirm
                  title="是否确定此操作？"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {
                    this.props.getEstrustInfo();
                    notification.open({
                      message: "审核未通过",
                      icon: (
                        <Icon
                          type="close-circle"
                          theme="twoTone"
                          twoToneColor="#ff6700"
                          style={{ fontSize: "16px" }}
                        />
                      )
                    });
                  }}
                  onCancel={() => {
                    message.error("取消本次操作");
                  }}
                >
                  <Button
                    type="danger"
                    size="small"
                    onClick={() => {
                      this.props.audit_status(record.key, false);
                    }}
                  >
                    不通过
                  </Button>
                </Popconfirm>
              </div>
            ) : text[1] === "通过" ? (
              <Link to="/admin/main/infomation">查看房源列表</Link>
            ) : (
              <Popconfirm
                title="是否确定此操作？"
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  this.props.getEstrustInfo();
                  notification.open({
                    message: "审核通过",
                    icon: (
                      <Icon
                        type="check-circle"
                        theme="twoTone"
                        twoToneColor="#52c41a"
                        style={{ fontSize: "16px" }}
                      />
                    )
                  });
                }}
                onCancel={() => {
                  message.error("取消本次操作");
                }}
              >
                <Button
                  type="primary"
                  size="small"
                  onClick={() => {
                    this.props.audit_status(record.key, true);
                    // 审核通过提交房源信息
                    this.submit(result[record.index]);
                  }}
                >
                  通过
                </Button>
              </Popconfirm>
            )
          ) : (
            <Popconfirm
              title="确定接单么？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                this.props.getEstrustInfo();
                notification.open({
                  message: "接单成功",
                  description: "请尽快审核，审核通过后进行下一步操作"
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
                  this.props.update_estrust(
                    record.key,
                    true,
                    window.sessionStorage.getItem("admin_username")
                  );
                }}
              >
                接单
              </Button>
            </Popconfirm>
          ),
        className: "fz"
      }
    ];
    result.forEach((item, index) => {
      data.push({
        key: item._id ? item._id : index,
        index: index,
        uname: item.uname,
        houseType: item.houseType,
        "region.name": item.region.name,
        appellation: item.appellation,
        phone: item.phone,
        price: item.price,
        "region.area": item.region.area,
        "region.pattern": item.region.pattern,
        "accept.name": item.accept.name,
        "accept.status": item.accept.status ? "已接单" : "未接单",
        "audit-status": item["audit-status"],
        time: formatTime(item.time),
        operation: [item.accept.status, item["audit-status"]]
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
                onPressEnter={e => {
                  this.setState({ appellation: e.target.value }, () => {
                    this.props.getEstrustInfo(this.state);
                  });
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
                      selectStatus: "未接单"
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
              <b>审核情况：</b>
              <Select
                defaultValue={this.state.auditStatus}
                size="small"
                onChange={value => {
                  this.setState({ auditStatus: value });
                }}
              >
                <Select.Option value="">未审核</Select.Option>
                <Select.Option value="未通过">未通过</Select.Option>
                <Select.Option value="通过">通过</Select.Option>
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
                  this.setState(
                    {
                      appellation: ""
                    },
                    () => {
                      this.props.getEstrustInfo();
                    }
                  );
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
