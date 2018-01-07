import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { logger } from "../middlewares/logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/index";

import Home from "./pages/Home";
//import About from './components/pages/about/About';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, promiseMiddleware))
);

class App extends Component {
  // loggedIn = () => {
  //   // ...
  //   console.log("loggedIn");
  //   return false;
  // };

  // requireAuth = (nextState, replace) => {
  //   console.log("requireAuth");
  //   if (!this.loggedIn()) {
  //     replace({
  //       pathname: "/login"
  //     });
  //   }
  // };

  render() {
    const loggedIn = () => {
      // ...
      console.log("loggedIn");
      return false;
    };

    const requireAuth = (nextState, replace) => {
      console.log("requireAuth");
      if (!loggedIn()) {
        replace({
          pathname: "/login"
        });
      }
    };

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} onEnter={requireAuth} />
            <Route path="/home" component={Home} onEnter={requireAuth} />
            {/* <Route path="/about" component={About} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
