import React, { Component } from "react";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import { login, register } from "../../../action/index";

class ModelCard extends Component {
  constructor() {
    super();
  }
  // 显示模态框
  handleCancel = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="ModelCard">
        <Modal
          title="Basic Modal"
          visible={this.props.state.loginStatus}
          onCancel={() => {
            this.props.dispatch(login(false));
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Basic Modal"
          visible={this.props.state.registerStatus}
          onCancel={() => {
            this.props.dispatch(register(false));
          }}
        >
          <p>Some 123...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state.UserStatusReducer
  };
};
export default connect(mapStateToProps)(ModelCard);
