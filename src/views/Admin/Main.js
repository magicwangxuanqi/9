import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// 头部
import AdminHeader from "@/Admin/AdminHeader";
// 左侧导航栏
import AdminMenu from "@/Admin/AdminMenu";
// 子路由
import Index from "./Main/Index";
import Entrust from "./Main/Entrust";
import Infomation from "./Main/Infomation";
import AddRental from "./Main/AddRental";
import Setting from "./Main/Setting";
import UserList from "./Main/UserList";
// 错误404
import Error from "./404";

class Main extends React.Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div className="admin-main">
        <section>
          <AdminHeader />
        </section>
        <section style={{ display: "flex" }}>
          <AdminMenu match={match} />
          <aside style={{ padding: "20px", flex: "1" }}>
            <Switch>
              <Route exact path={`${match.path}`} component={Index} />
              <Redirect from={`${match.path}/index`} to={`${match.path}`} />
              <Route path={`${match.path}/entrust`} component={Entrust} />
              <Route path={`${match.path}/infomation`} component={Infomation} />
              <Route path={`${match.path}/addrental`} component={AddRental} />
              <Route path={`${match.path}/setting`} component={Setting} />
              <Route path={`${match.path}/userlist`} component={UserList} />
              <Route component={Error} />
            </Switch>
          </aside>
        </section>
      </div>
    );
  }
}
export default Main;
