import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {} from "@/";

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
import Protocol from "./Main/Protocol";
// 错误404
import Error from "./404";
import { connect } from "react-redux";
import { getEstrustInfo } from "@/redux/action";

@connect(
  state => state.GetEstrustInfoReducer,
  { getEstrustInfo }
)
class Main extends React.Component {
  componentDidMount() { 
    this.props.getEstrustInfo();
  }
  render() {
    const { match, history, count } = this.props;
    return (
      <div className="admin-main">
        <section>
          <AdminHeader history={history} count={count} />
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
              <Route path={`${match.path}/protocol`} component={Protocol} />
              <Route component={Error} />
            </Switch>
          </aside>
        </section>
      </div>
    );
  }
}
export default Main;
