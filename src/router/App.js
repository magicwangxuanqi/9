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
              return <Route {...route} key={key} />;
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
