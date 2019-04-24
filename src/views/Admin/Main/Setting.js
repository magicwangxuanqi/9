import React from "react";
import { Input, Button, Select, Icon } from "antd";
import AdminBreadcrumb from "@/Admin/AdminBreadcrumb";
import "./Setting.scss";

class Setting extends React.Component {
  render() {
    return (
      <div className="setting">
        <AdminBreadcrumb />
        <section className="setting-form">
          <p>中介名称</p>
          <Input placeholder="请输入管理员名称" style={{ width: "50%" }} />
          <p>中介密码</p>
          <Input.Password placeholder="请输入管理员密码" style={{ width: "50%" }} />
          <p>姓名</p>
          <Input placeholder="请输入真实姓名" style={{ width: "50%" }} />
          <p>性别</p>
          <Select defaultValue="男" style={{width: '611px'}}>
            <Select.Option value="男">男</Select.Option>
            <Select.Option value="女">女</Select.Option>
          </Select>
          <p>头像</p>
          <Input placeholder="请输入管理员名称" style={{ width: "50%" }} />
          <p>手机号</p>
          <Input placeholder="请输入手机号" maxLength="11" style={{ width: "50%" }} />
          <p>email</p>
          <Input placeholder="请输入邮箱" style={{ width: "50%" }} />
          <p>身份证号</p>
          <Input placeholder="请输入身份证号码" maxLength="18" style={{ width: "50%" }} />
          <p>所属公司</p>
          <Input placeholder="请输入所属公司" style={{ width: "50%" }} />
          <p>所属分店</p>
          <Input placeholder="请输入所属分店" style={{ width: "50%" }} />
        </section>
        <br />
        <section className="setting-btn">
          <Button type="primary" size="small">
            保存
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="danger" size="small">
            返回
          </Button>
        </section>
      </div>
    );
  }
}
export default Setting;
