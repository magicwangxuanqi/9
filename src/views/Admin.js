import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "@/views/Admin/Login";
import Register from "@/views/Admin/Register";
import Err from "@/views/Err";

import "./Admin.scss";

class Admin extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="admin">
        <Switch>
          <Route exact path={`${match.path}`} component={Login} />
          <Redirect from={`${match.path}login`} to={`${match.path}`} />
          <Route path={`${match.path}register`} component={Register} />
          <Route component={Err} />
        </Switch>
      </div>
    );
  }
}

export default Admin;
