import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Switch } from "antd";

class AdminMenu extends React.Component {
  state = {
    mode: "inline",
    theme: "light",
    collapsed: false
  };
  // 改变导航栏效果
  changeMode = value => {
    this.setState({
      mode: value ? "vertical" : "inline"
    });
  };
  //   改变导航栏主题
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };
  // 收缩左侧导航栏
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const SubMenu = Menu.SubMenu;
    return (
      <div
        style={{
          width: 256,
          height: '722px',
          backgroundColor: this.state.theme == "light" ? "#fff" : "#001529"
        }}
      >
        {/* 侧边导航 */}
        <section
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            padding: "20px 5px",
            backgroundColor: "#fff"
          }}
        >
          <Icon
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
            style={{ marginLeft: "10px", fontSize: "14px" }}
            onClick={this.toggleCollapsed}
          />
          &nbsp;&nbsp;
          <Switch onChange={this.changeMode} size="small" />
          &nbsp;
          <span>改变导航效果</span>&nbsp;&nbsp;
          <Switch onChange={this.changeTheme} size="small" />
          &nbsp;
          <span>改变导航主题</span>
        </section>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={this.state.mode}
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}
        >
          {/* 系统首页 */}
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="shop" />
                <span>系统首页</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to={this.props.match.path}>系统首页</Link>
            </Menu.Item>
          </SubMenu>
          {/* 房屋管理 */}
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="home" />
                <span>房屋管理</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to={`${this.props.match.path}/entrust`}>房屋委托列表</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={`${this.props.match.path}/infomation`}>房源信息列表</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="user" />
                <span>用户服务协议</span>
              </span>
            }
          >
            <Menu.Item key="3">用户服务协议</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default AdminMenu;
