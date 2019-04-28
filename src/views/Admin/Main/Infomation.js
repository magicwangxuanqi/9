import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHousingInfo, del_serial } from "@/redux/action";
import { Table, Button, Icon, Breadcrumb, Popconfirm, message } from "antd";
import "./Information.scss";

@connect(
  state => state.GetHousingInfoReducer,
  { getHousingInfo, del_serial }
)
class Infomation extends React.Component {
  componentDidMount() {
    this.props.getHousingInfo();
  }
  render() {
    const { result, loading } = this.props;
    let data = [];
    const columns = [
      {
        title: "房源类型",
        dataIndex: "houseType",
        className: "fz"
      },
      {
        title: "标题",
        dataIndex: "houseTitle",
        className: "fz"
      },
      {
        title: "小区名称",
        dataIndex: "region.name",
        className: "fz"
      },
      {
        title: "房屋图片",
        dataIndex: "images",
        render: val => (
          <img src={val} style={{ width: "40px", height: "40px" }} alt="" />
        ),
        className: "fz"
      },
      {
        title: "发布者姓名",
        dataIndex: "accept.name",
        className: "fz"
      },
      {
        title: "价格",
        dataIndex: "price",
        render: text => <span>{text}&nbsp;元</span>,
        className: "fz"
      },
      {
        title: "户型",
        dataIndex: "region.pattern",
        render: val => (
          <span>
            {val["room"]}室{val["hail"]}厅{val["toilet"]}卫
          </span>
        ),
        className: "fz"
      },
      {
        title: "楼层",
        dataIndex: "floor.current",
        className: "fz"
      },
      {
        title: "总楼层",
        dataIndex: "floor.all",
        className: "fz"
      },
      {
        title: "面积",
        dataIndex: "region.area",
        render: text => (
          <span>
            {text}&nbsp;/m<sup>2</sup>
          </span>
        ),
        className: "fz"
      },
      {
        title: "朝向",
        dataIndex: "region.direction",
        className: "fz"
      },
      {
        title: "装修情况",
        dataIndex: "region.fitment",
        className: "fz"
      },
      {
        title: "是否有电梯",
        dataIndex: "region.elevator",
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
        render: (text, record) => (
          <Popconfirm
            title="确定删除么？"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              this.props.getHousingInfo();
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
                this.props.del_serial(record.key);
              }}
            >
              {text}
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
        houseTitle: item.houseTitle,
        "region.name": item.region.name,
        images: item.images[0] ? item.images[0].thumbUrl : null,
        "accept.name": "张三",
        price: item.price,
        "region.pattern": item.region.pattern,
        "floor.current": item.floor.current,
        "floor.all": item.floor.all,
        "region.area": item.region.area,
        "region.direction": item.region.direction,
        "region.fitment": item.region.fitment,
        "region.elevator": item.region.elevator ? "是" : "否",
        time: item.time,
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
        <section style={{ padding: "20px" }}>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontWeight: "bold" }}>
              房源管理
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/admin/main/infomation">房源信息列表</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/admin/main/addrental">房源设置</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section style={{ backgroundColor: "#fff" }}>
          <Table
            columns={columns}
            rowSelection={rowSelection}
            dataSource={data}
            loading={loading}
            bordered
            size="middle"
            title={() => (
              <section>
                <Link to="/admin/main/addrental">
                  <Button type="primary" size="small">
                    添加
                    <Icon type="file-add" />
                  </Button>
                </Link>
              </section>
            )}
          />
        </section>
      </div>
    );
  }
}
export default Infomation;
