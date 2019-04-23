import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { entrust } from "@/redux/action";

import { Input, Button, Select, Popconfirm, message } from "antd";
import "./Rental.scss";
import NavBar from "@/components/NavBar";
import PicturesWall from "@/components/PicturesWall";

@connect(
  state => state.HousingReducer,
  { entrust }
)
class Rent extends Component {
  constructor() {
    super();
    this.state = {
      houseType: "二手房",
      houseTitle: "",
      images: [],
      region: {
        name: "",
        pattern: {
          room: 1,
          hail: 0,
          toilet: 0
        },
        area: "",
        direction: "正东",
        fitment: "普通装修",
        elevator: true
      },
      //   楼层相关
      floor: {
        //当前楼层
        current: "",
        // 总楼层
        all: ""
      },
      //   关注人数
      attention_number: 0,
      //   创建时间
      time: moment().format("YYYY-MM-DD HH:mm:ss"),
      //   价格
      price: "",
      // 称呼
      appellation: "",
      //   手机号
      phone: ""
    };
  }
  render() {
    const type = ["二手房", "新房", "租房"]; // 房源类型
    const direction = [
      "正东",
      "正南",
      "正西",
      "正北",
      "东北",
      "东南",
      "西北",
      "西南",
      "东西",
      "南北"
    ]; // 朝向
    const fitment = ["精装修", "普通装修", "毛坯房"]; // 装修情况
    const pattern = {
      room: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      hall: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      toilet: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }; // 格局
    return (
      <div className="rent">
        <NavBar />
        <p className="title">发布房源</p>
        {/* 房源类型 */}
        <section>
          <aside>
            <span className="label">类型</span>
            <Select
              defaultValue={this.state.houseType}
              onChange={value => {
                this.setState({ houseType: value });
              }}
            >
              {type.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
        </section>
        {/* 房源标题 */}
        <section>
          <aside>
            <span className="label">标题</span>
            <Input
              placeholder="请输入发布房源的标题"
              value={this.state.houseTitle}
              onChange={e => {
                this.setState({ houseTitle: e.target.value });
              }}
              style={{ width: "50%" }}
            />
          </aside>
        </section>
        {/* 地区名称 */}
        <section>
          <aside>
            <span className="label">小区名称</span>
            <Input
              placeholder="请输入小区的名称"
              value={this.state.region.name}
              onChange={e => {
                this.setState({
                  region: {
                    ...this.state.region,
                    name: e.target.value
                  }
                });
              }}
              style={{ width: "50%" }}
            />
          </aside>
        </section>
        {/* 房屋格局 */}
        <section>
          <aside>
            <span className="label">房屋格局</span>
            <div style={{ display: "inline-block" }}>
              <Select
                defaultValue={this.state.region.pattern.room}
                onChange={value => {
                  this.setState({
                    region: {
                      ...this.state.region,
                      pattern: {
                        ...this.state.region.pattern,
                        room: value
                      }
                    }
                  });
                }}
              >
                {pattern.room.map((item, index) => {
                  return (
                    <Select.Option value={item} key={index}>
                      {item}室
                    </Select.Option>
                  );
                })}
              </Select>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Select
                defaultValue={this.props.region.pattern.hail}
                onChange={value => {
                  this.setState({
                    region: {
                      ...this.state.region,
                      pattern: {
                        ...this.state.region.pattern,
                        hail: value
                      }
                    }
                  });
                }}
              >
                {pattern.hall.map((item, index) => {
                  return (
                    <Select.Option value={item} key={index}>
                      {item}厅
                    </Select.Option>
                  );
                })}
              </Select>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Select
                defaultValue={this.props.region.pattern.toilet}
                onChange={value => {
                  this.setState({
                    region: {
                      ...this.state.region,
                      pattern: {
                        ...this.state.region.pattern,
                        toilet: value
                      }
                    }
                  });
                }}
              >
                {pattern.toilet.map((item, index) => {
                  return (
                    <Select.Option value={item} key={index}>
                      {item}卫
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </aside>
        </section>
        {/* 房屋面积 */}
        <section>
          <aside>
            <span className="label">面积</span>
            <Input
              placeholder="请输入房屋面积"
              value={this.state.region.area}
              min={1}
              onChange={e => {
                this.setState({
                  region: {
                    ...this.state.region,
                    area: e.target.value
                  }
                });
              }}
              type="number"
              style={{ width: "50%" }}
            />
            &nbsp;平米
          </aside>
        </section>
        {/* 房屋朝向 */}
        <section>
          <aside>
            <span className="label">房屋朝向</span>
            <Select
              defaultValue={this.state.region.direction}
              onChange={value => {
                this.setState({
                  region: {
                    ...this.state.region,
                    direction: value
                  }
                });
              }}
            >
              {direction.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
        </section>
        {/* 装修情况 */}
        <section>
          <aside>
            <span className="label">装修情况</span>
            <Select
              defaultValue={this.state.region.fitment}
              onChange={value => {
                this.setState({
                  region: {
                    ...this.state.region,
                    fitment: value
                  }
                });
              }}
            >
              {fitment.map((item, index) => {
                return (
                  <Select.Option value={item} key={index}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </aside>
        </section>
        {/* 是否有电梯 */}
        <section>
          <aside>
            <span className="label">是否有电梯</span>
            <Select
              defaultValue={this.state.region.elevator ? "是" : "否"}
              onChange={value => {
                this.setState({
                  region: {
                    ...this.state.region,
                    elevator: value
                  }
                });
              }}
            >
              <Select.Option value={true}>是</Select.Option>
              <Select.Option value={false}>否</Select.Option>
            </Select>
          </aside>
        </section>
        {/* 图片上传 */}
        <section>
          <aside>
            <span className="label">图片上传</span>
            <PicturesWall
              fileList={this.state.images}
              handleChange={({ fileList }) => {
                console.log(fileList);
                this.setState({
                  images: fileList
                });
              }}
            />
          </aside>
        </section>
        {/* 楼层 */}
        <section>
          <aside>
            <span className="label">楼层相关</span>
            <Input
              placeholder="请输入当前所在楼层数"
              value={this.state.floor.current}
              min={1}
              onChange={e => {
                this.setState({
                  ...this.state,
                  floor: {
                    ...this.state.floor,
                    current: e.target.value
                  }
                });
              }}
              type="number"
              style={{ width: "30%" }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Input
              placeholder="请输入总楼层数"
              value={this.state.floor.all}
              min={1}
              onChange={e => {
                this.setState({
                  ...this.state,
                  floor: {
                    ...this.state.floor,
                    all: e.target.value
                  }
                });
              }}
              type="number"
              style={{ width: "30%" }}
            />
          </aside>
        </section>
        {/* 价格 */}
        <section>
          <aside>
            <span className="label">价格</span>
            ￥&nbsp;&nbsp;&nbsp;&nbsp;
            <Input
              placeholder="请输入价格，单位/元"
              value={this.state.price}
              min={0}
              onChange={e => {
                this.setState({
                  price: e.target.value
                });
              }}
              style={{ width: "50%" }}
              type="number"
            />
          </aside>
        </section>
        {/* 称呼 */}
        <section>
          <aside>
            <span className="label">称呼</span>
            <Input
              placeholder="我们应该如何称呼您"
              value={this.state.appellation}
              onChange={e => {
                this.setState({
                  appellation: e.target.value
                });
              }}
              style={{ width: "50%" }}
            />
          </aside>
        </section>
        {/* 手机号码 */}
        <section>
          <aside>
            <span className="label">手机号码</span>
            <Input
              placeholder="请输入手机号码"
              value={this.state.phone}
              onChange={e => {
                this.setState({
                  phone: e.target.value
                });
              }}
              style={{ width: "50%" }}
              maxLength={11}
            />
          </aside>
        </section>
        {/* 提交 */}
        <div className="submit">
          <Popconfirm
            title="是否确认提交所有数据？"
            onConfirm={() => {
              this.judge();
            }}
            onCancel={() => {
              // 取消后的反馈
              message.error("已取消发布房源信息");
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">提交委托</Button>
          </Popconfirm>
        </div>
      </div>
    );
  }

  // 各种判断
  judge = () => {
    if (this.state.houseTitle === "") {
      message.warning("标题不能为空， 请输入标题");
    } else if (this.state.region.name === "") {
      message.warning("小区名称不能为空，请输入小区名称");
    } else if (this.state.region.area === "") {
      message.warning("面积不能为空，请输入面积");
    } else if (this.state.images === []) {
      message.warning("请您上传图片");
    } else if (this.state.floor.current === "") {
      message.warning("当前所在楼层数为空，请输入当前所在楼层数");
    } else if (this.state.floor.all === "") {
      message.warning("总楼层数为空，请输入总楼层数");
    } else if (this.state.price === "") {
      message.warning("价格不能为空，请输入价格");
    } else if (this.state.appellation === "") {
      message.warning("称呼不能为空，请输入称呼");
    } else if (this.state.phone === "") {
      message.warning("手机号码不能为空，请输入手机号码");
    } else {
      try {
        // 确认后的反馈，同时提交数据到action
        this.props.entrust(this.state);
        setTimeout(() => {
          // window.location.reload();
        }, 1000);
      } catch (error) {
        message.error("发布房源信息失败");
      }
      message.success("发布房源信息成功");
    }
  };
}

export default Rent;
