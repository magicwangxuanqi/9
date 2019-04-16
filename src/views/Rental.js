import React, { Component } from "react";
import { Input, Button } from "antd";
import "./Rental.scss";
import NavBar from "@/components/NavBar";

class Rent extends Component {
  render() {
    return (
      <div className="rent">
        <NavBar />
        <p className="title">发布出租房源</p>
        <section>
          <aside>
            <span className="label">小区</span>
            <Input placeholder="请输入小区名" style={{ width: "50%" }} />
          </aside>
        </section>
        <section>
          <aside>
            <span className="label">房屋地址</span>
            <div style={{ display: "inline-block" }}>
              <Input.Group style={{ display: "flex" }}>
                <Input placeholder="楼栋号" style={{ marginRight: "20px" }} />
                <Input placeholder="单元号" style={{ marginRight: "20px" }} />
                <Input placeholder="门牌号" />
              </Input.Group>
            </div>
          </aside>
        </section>
        <section>
          <aside>
            <span className="label">期望租金</span>
            <Input
              placeholder="请输入您期望卖出的价格"
              style={{ width: "47%" }}
            />
            &nbsp;
            <b>元/月</b>
          </aside>
        </section>
        <section>
          <aside>
            <span className="label">称呼</span>
            <Input placeholder="我们应该如何称呼您" style={{ width: "50%" }} />
          </aside>
        </section>
        <section>
          <aside>
            <span className="label">手机号码</span>
            <Input
              placeholder="请输入手机号码"
              style={{ width: "50%" }}
              maxLength={11}
            />
          </aside>
        </section>
        <div className="submit">
          <Button type="primary">提交委托</Button>
        </div>
      </div>
    );
  }
}

export default Rent;
