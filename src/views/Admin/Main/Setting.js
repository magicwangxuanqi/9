import React from "react";
import { Input, Button, Select, Popconfirm, message } from "antd";
import AdminBreadcrumb from "@/Admin/AdminBreadcrumb";
import "./Setting.scss";
import { connect } from "react-redux";
import { admin_updateMsg } from "@/redux/action";
import moment from 'moment';

@connect(
  null,
  { admin_updateMsg }
)
class Setting extends React.Component {
  state = {
    username: window.sessionStorage.getItem("admin_username"),
    password: "",
    real_name: "",
    sex: "男",
    phone_number: "",
    email: "",
    id_number: "",
    company: "",
    branch: ""
  };
  handleChange = (key, event) => {
    if (event.target) {
      this.setState({
        [key]: event.target.value
      });
    } else {
      this.setState({
        [key]: event
      });
    }
  };
  judge = () => { 
    if (this.state.password === "") {
      message.warning("密码不能为空");
    } else if (this.state.real_name === "") {
      message.warning("真实姓名不能为空");
    } else if (this.state.phone_number === '') {
      message.warning("手机号不能为空");
    } else if (this.state.email === "") {
      message.warning("邮箱不能为空");
    } else if (this.state.id_number === "") {
      message.warning("身份证号码不能为空");
    } else if (this.state.company === "") {
      message.warning("所属公司不能为空");
    } else if (this.state.branch === "") {
      message.warning("所属分店不能为空");
    } else {
      try {
        // 确认后的反馈，同时提交数据到action
        const uid = window.sessionStorage.getItem('admin_uid');
        this.props.admin_updateMsg(uid, this.state, moment().format("YYYY-MM-DD HH:mm:ss"));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        message.error("更新管理员信息失败");
      }
      message.success("更新管理员信息成功");
    }
  }
  render() {
    return (
      <div className="setting">
        <AdminBreadcrumb />
        <section className="setting-form">
          <p>经纪人用户名</p>
          <Input
            placeholder="请输入管理员名称"
            style={{ width: "50%" }}
            value={this.state.username}
            onChange={v => this.handleChange("username", v)}
          />
          <p>经纪人密码</p>
          <Input.Password
            placeholder="请输入管理员密码"
            style={{ width: "50%" }}
            value={this.state.password}
            onChange={v => this.handleChange("password", v)}
          />
          <p>姓名</p>
          <Input
            placeholder="请输入真实姓名"
            style={{ width: "50%" }}
            value={this.state.real_name}
            onChange={v => this.handleChange("real_name", v)}
          />
          <p>性别</p>
          <Select
            defaultValue={this.state.sex}
            style={{ width: "611px" }}
            onChange={v => this.handleChange("sex", v)}
          >
            <Select.Option value="男">男</Select.Option>
            <Select.Option value="女">女</Select.Option>
          </Select>
          <p>手机号</p>
          <Input
            placeholder="请输入手机号"
            maxLength="11"
            style={{ width: "50%" }}
            value={this.state.phone_number}
            onChange={v => this.handleChange("phone_number", v)}
          />
          <p>email</p>
          <Input
            placeholder="请输入邮箱"
            style={{ width: "50%" }}
            value={this.state.email}
            onChange={v => this.handleChange("email", v)}
          />
          <p>身份证号</p>
          <Input
            placeholder="请输入身份证号码"
            maxLength="18"
            style={{ width: "50%" }}
            value={this.state.id_number}
            onChange={v => this.handleChange("id_number", v)}
          />
          <p>所属公司</p>
          <Input
            placeholder="请输入所属公司"
            style={{ width: "50%" }}
            value={this.state.company}
            onChange={v => this.handleChange("company", v)}
          />
          <p>所属分店</p>
          <Input
            placeholder="请输入所属分店"
            style={{ width: "50%" }}
            value={this.state.branch}
            onChange={v => this.handleChange("branch", v)}
          />
        </section>
        <br />
        <section className="setting-btn">
          <Popconfirm
            title="是否确认提交所有数据？"
            onConfirm={() => {
              this.judge();
            }}
            onCancel={() => {
              // 取消后的反馈
              message.info("已取消修改管理员用户信息");
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" size="small">保存</Button>
          </Popconfirm>
          &nbsp;&nbsp;&nbsp;
          <Button type="danger" size="small" onClick={() => this.props.history.go(-1)}>
            返回
          </Button>
        </section>
      </div>
    );
  }
}
export default Setting;
