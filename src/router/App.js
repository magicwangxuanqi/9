import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 按需加载
import Loadable from "react-loadable";
// 加载中
import Loading from "@/components/Loading/index";

const Home = Loadable({
  loader: () => import("@/views/Home"),
  loading: Loading
});
const UserCenter = Loadable({
  loader: () => import("@/views/UserCenter"),
  loading: Loading
});
const Rental = Loadable({
  loader: () => import("@/views/Rental"),
  loading: Loading
});
const Secondary = Loadable({
  loader: () => import("@/views/Secondary"),
  loading: Loading
});
const BridalChamber = Loadable({
  loader: () => import("@/views/BridalChamber"),
  loading: Loading
});
const Rent = Loadable({
  loader: () => import("@/views/Rent"),
  loading: Loading
});
const RentDetail = Loadable({
  loader: () => import("@/views/RentDetail"),
  loading: Loading
});
const Admin = Loadable({
  loader: () => import("@/views/Admin"),
  loading: Loading
});
const Err = Loadable({
  loader: () => import("@/views/Err"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="router-switch">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/userCenter/" component={UserCenter} />
            <Route path="/rental/" component={Rental} />
            <Route path="/secondary/" component={Secondary} />
            <Route path="/bridalChamber/" component={BridalChamber} />
            <Route path="/rent/" component={Rent} />
            <Route path="/rent_detail/:id" component={RentDetail} />
            <Route path="/admin/" component={Admin} />
            {/* <Route component={Err} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
