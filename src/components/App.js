import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import requireAuth from "../_helpers/require.authentication";

import Home from "./pages/Home";
// import About from "./pages/about/About";
import signIn from "./pages/Login/sign.in";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={requireAuth(Home)} />
          <Route path="/login" component={requireAuth(signIn, true)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
