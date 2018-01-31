import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../_helpers";

import Home from "./pages/Home";
// import About from "./pages/about/About";
import Login from "./pages/Login/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <PrivateRoute path="/Home" component={Home} />
          {/* <PrivateRoute path="/About" component={About} /> */}
          {/* <Redirect from="/" to="/Login" /> */}
          {/* <Route component={NoMatch}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
