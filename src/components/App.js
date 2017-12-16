import React, { Component } from "react";
import Header from "./Layout/Header";
import Navigation from "./Navigation";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-wrap">
          <Navigation />

          <div className="content">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
              hi...!
            </p>
          </div>

          <div className="layout-options" />
          <div className="right-sidebar" />
          <footer />
        </div>
      </div>
    );
  }
}

export default App;
