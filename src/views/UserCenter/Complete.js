import React from "react";
import { Input, Row, Col, Button, Select, Popconfirm, message } from "antd";
import "./Complete.scss";
import HeadPortrait from "@/components/HeadPortrait";
import { connect } from "react-redux";
import { completeUser } from "@/redux/action";

@connect(
  null,
  { completeUser }
)
class Complete extends React.Component {
  state = {
    name: "",
    sex: "",
    phoneNumber: "",
    idCard: "",
    job: "",
    email: "",
    headPortrait: [] // 头像
  };
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          marginBottom: "20px",
          padding: "100px",
          textAlign: "center",
          border: "1px solid #e6e5e5"
        }}
      >
        <Row className="change-input">
          <Col span={8}>
            <b> 姓名： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input
              placeholder="请输入姓名"
              value={this.state.name}
              onChange={v => this.handleChange("name", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Col span={8}>
            <b> 性别： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Select
              defaultValue="请选择"
              size="small"
              style={{ width: "100%" }}
              onChange={value => {
                this.setState({ sex: value });
              }}
            >
              <Select.Option value="男">男</Select.Option>
              <Select.Option value="女">女</Select.Option>
            </Select>{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Col span={8}>
            <b> 联系方式： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input
              placeholder="请确认手机号"
              maxLength={11}
              value={this.state.phoneNumber}
              onChange={v => this.handleChange("phoneNumber", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Col span={8}>
            <b> 身份证号： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input
              placeholder="请确认身份证号"
              maxLength={18}
              value={this.state.idCard}
              onChange={v => this.handleChange("idCard", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Col span={8}>
            <b> 职业： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input
              placeholder="请输入您的职业"
              value={this.state.job}
              onChange={v => this.handleChange("job", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Col span={8}>
            <b> 邮箱： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <Input
              placeholder="请确认邮箱"
              value={this.state.email}
              onChange={v => this.handleChange("email", v)}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Col span={8}>
            <b> 头像： </b>{" "}
          </Col>{" "}
          <Col span={16}>
            <HeadPortrait
              fileList={this.state.headPortrait}
              handleChange={({ fileList }) => {
                this.setState({
                  headPortrait: fileList
                });
              }}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row className="change-input">
          <Popconfirm
            title="是否进行提交？"
            onConfirm={() => {
              message.success("提交信息成功");
              setTimeout(() => {
                window.location.reload();
              }, 300);
            }}
            onCancel={() => {
              // 取消后的反馈
              message.error("已取消提交");
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              style={{
                width: "100%",
                marginTop: "10px"
              }}
              onClick={() => {
                this.props.completeUser(
                  window.sessionStorage.getItem("username"),
                  this.state
                );
                if (this.state.headPortrait.length !== 0) {
                  window.sessionStorage.setItem(
                    "img",
                    this.state.headPortrait[0].thumbUrl
                  );
                }
              }}
            >
              提交{" "}
            </Button>
          </Popconfirm>{" "}
        </Row>{" "}
      </div>
    );
  }
}
export default Complete;
