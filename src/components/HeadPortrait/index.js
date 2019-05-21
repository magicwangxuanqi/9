import React from "react";
import { Upload, Icon, Modal } from "antd";
import "./index.scss";

class HeadPortrait extends React.Component {
  state = {
    //   默认不显示预览图片
    previewVisible: false,
    // 默认预览图片的url
    previewImage: ""
  };
  // 预览图片的回调函数
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

//   handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    /***
     * upload 参数
     * @param {string(file) => promise} action 上传图片的地址
     * @param {string} listType  text, picture 和 picture-card
     * @param {object} fileList 已经上传的文件列表
     * @param {function} onPreview 点击文件链接或预览图标时的回调
     * @param {function} onChange 上传文件改变时的状态
     * //jsonplaceholder.typicode.com/posts/
     */
    return (
      <div className="head-portrait">
        <Upload
          action="https://bird.ioliu.cn/v2?url=http://jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={this.props.fileList}
          onPreview={this.handlePreview}
          onChange={this.props.handleChange}
        >
          {/* 做多上传1张照片 */}
          {this.props.fileList.length >= 1 ? null : (
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text">Upload</div>
            </div>
          )}
        </Upload>
        <Modal
          visible={this.state.previewVisible}
          footer={null}
          onCancel={() => {
            this.setState({ previewVisible: false });
          }}
        >
          <img
            alt="example"
            style={{ width: "100%" }}
            src={this.state.previewImage}
          />
        </Modal>
      </div>
    );
  }
}
export default HeadPortrait;
