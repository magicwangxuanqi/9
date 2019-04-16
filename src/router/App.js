import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "./index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="router-switch">
          <Switch>
            {router.map((route, key) => {
              if (route.exact) {
                return (
                  <Route
                    exact
                    key={key}
                    path={route.path}
                    component={route.component}
                  />
                );
              } else {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    component={route.component}
                  />
                );
              }
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
