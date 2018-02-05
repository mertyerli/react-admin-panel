import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Test1 extends Component {
  render = () => {
    return (
      <div id="main" role="main">
        <h3> TEST PAGE </h3>
        Test Page 1
        <br/>
        <br/>
        <Link to="/">
        Home
        </Link>
      </div>
    );
  };
}
